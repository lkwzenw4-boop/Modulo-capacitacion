// --- CONFIGURACIÓN DE FIREBASE (FALLBACK AUTOMÁTICO A LOCAL STORAGE SI NO ESTÁ CONFIGURADO) ---
let firebaseConfig = {
    apiKey: "AIzaSyAb00mXQ1oGIGIMHwc_snll3NeRFoKbaFw",
    authDomain: "capacitacion-401a3.firebaseapp.com",
    projectId: "capacitacion-401a3",
    storageBucket: "capacitacion-401a3.firebasestorage.app",
    messagingSenderId: "1075068067754",
    appId: "1:1075068067754:web:cdf86752b2dfdb40fed5d3"
};
let db = null; // Firestore reference
let isFirebaseActive = false;

// Intentar cargar la configuración de Firebase (usar la predeterminada si no hay una personalizada)
try {
    const firebaseEnabled = localStorage.getItem('scc_firebase_enabled') !== 'false'; // Predeterminado true
    const savedConfig = localStorage.getItem('scc_firebase_config');
    if (savedConfig) {
        firebaseConfig = JSON.parse(savedConfig);
    }
    
    if (firebaseEnabled && firebaseConfig && firebaseConfig.apiKey) {
        // Inicializar Firebase
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        isFirebaseActive = true;
        console.log("Firebase Firestore inicializado correctamente.");
    }
} catch (e) {
    console.warn("Firebase no configurado o error al inicializar. Usando base de datos LocalStorage como fallback.", e);
}

// --- BASE DE DATOS LOCAL DE RESPALDO (LOCALSTORAGE) ---
const LocalDB = {
    getWhitelist: function() {
        const data = localStorage.getItem('scc_whitelist');
        return data ? JSON.parse(data) : []; // Array of allowed codes
    },
    saveWhitelist: function(list) {
        localStorage.setItem('scc_whitelist', JSON.stringify(list));
    },
    addWhitelist: function(code) {
        const list = this.getWhitelist();
        if (!list.includes(code)) {
            list.push(code);
            this.saveWhitelist(list);
            
            // Sincronizar con Firebase si está activo
            if (isFirebaseActive && db) {
                db.collection("config").doc("whitelist").set({ codes: list })
                    .catch(err => console.error("Error al guardar lista blanca en Firebase:", err));
            }
        }
    },
    removeWhitelist: function(code) {
        const list = this.getWhitelist();
        const newList = list.filter(c => c !== code);
        this.saveWhitelist(newList);
        
        // Sincronizar con Firebase si está activo
        if (isFirebaseActive && db) {
            db.collection("config").doc("whitelist").set({ codes: newList })
                .catch(err => console.error("Error al eliminar de lista blanca en Firebase:", err));
        }
    },
    getTrainees: function() {
        const data = localStorage.getItem('scc_trainees');
        return data ? JSON.parse(data) : [];
    },
    saveTrainees: function(trainees) {
        localStorage.setItem('scc_trainees', JSON.stringify(trainees));
    },
    addTrainee: function(name, nif) {
        const trainees = this.getTrainees();
        // Evitar duplicados por código
        const existing = trainees.find(t => t.nif === nif);
        if (existing) return existing;

        const newTrainee = {
            name: name,
            nif: nif,
            progress: 0,
            score: null,
            approved: false,
            examAttempts: 0,
            examTimeSeconds: 0,
            moduleTimes: {},
            loginSessions: [],
            timestamp: new Date().toISOString()
        };
        trainees.push(newTrainee);
        this.saveTrainees(trainees);
        return newTrainee;
    },
    updateTraineeProgress: function(nif, updates) {
        const trainees = this.getTrainees();
        const trainee = trainees.find(t => t.nif === nif);
        if (trainee) {
            Object.assign(trainee, updates);
            this.saveTrainees(trainees);
        }
    },
    getAdminPassword: function() {
        return localStorage.getItem('scc_admin_password') || 'admin123';
    },
    saveAdminPassword: function(newPass) {
        localStorage.setItem('scc_admin_password', newPass);
    }
};

// --- ESTADO GLOBAL DE LA APLICACIÓN ---
let currentUser = null;
let currentModuleIndex = 0;
let userAnswers = new Array(examQuestions.length).fill(null);
let moduleStartTime = null;
let examStartTime = null;

// --- GESTIÓN DE FALLBACK DE VIDEOS (OCULTAR VIDEOS NO CARGADOS EN VERSIÓN WEB) ---
document.addEventListener('error', function(e) {
    if (e.target && (e.target.tagName === 'SOURCE' || e.target.tagName === 'VIDEO')) {
        const video = e.target.tagName === 'SOURCE' ? e.target.parentNode : e.target;
        if (video && video.tagName === 'VIDEO' && !video.dataset.hasError) {
            video.dataset.hasError = true;
            
            const placeholder = document.createElement('div');
            placeholder.className = 'alert-note';
            placeholder.style.textAlign = 'center';
            placeholder.style.padding = '2rem 1rem';
            placeholder.style.margin = '1.5rem 0';
            placeholder.innerHTML = `
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎥</div>
                <div style="font-weight: 600; color: var(--primary-light); font-size: 1.05rem;">Video no disponible en la versión Web</div>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.5rem 0 0 0; line-height: 1.5;">
                    El video de capacitación (232 MB) ha sido excluido de la versión de hosting para acelerar la carga y evitar límites de consumo. 
                    El video explicativo completo está disponible en la versión local de esta plataforma.
                </p>
            `;
            video.parentNode.replaceChild(placeholder, video);
        }
    }
}, true);

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    checkAppSession();
    renderSidebarNav();
    setupEventListeners();
    updateFirebaseStatusIndicator();
    syncWhitelistFromFirebase();
});

// Sincronizar lista blanca desde Firebase al iniciar
function syncWhitelistFromFirebase() {
    if (isFirebaseActive && db) {
        db.collection("config").doc("whitelist").get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    if (data && Array.isArray(data.codes)) {
                        LocalDB.saveWhitelist(data.codes);
                        
                        const adminView = document.getElementById('admin-view');
                        if (adminView && adminView.classList.contains('active')) {
                            renderWhitelistAdmin();
                        }
                    }
                }
            })
            .catch((error) => {
                console.error("Error al sincronizar lista blanca desde Firebase:", error);
            });
    }
}

// Comprobar si hay un usuario logueado en la sesión
function checkAppSession() {
    const savedUser = sessionStorage.getItem('scc_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showView('dashboard-view');
        loadTraineeProgress();
    } else {
        showView('login-view');
    }
}

// Cargar el progreso en tiempo real del alumno
function loadTraineeProgress() {
    if (!currentUser) return;
    
    // Si Firebase está activo, sincronizar desde Firestore, si no, desde LocalDB
    if (isFirebaseActive && db) {
        db.collection("trainees").doc(currentUser.nif).get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    Object.assign(currentUser, {
                        name: data.name || currentUser.name,
                        progress: data.progress || 0,
                        score: data.score !== undefined ? data.score : null,
                        approved: data.approved || false,
                        examAttempts: data.examAttempts || 0,
                        examTimeSeconds: data.examTimeSeconds || 0,
                        moduleTimes: data.moduleTimes || {},
                        loginSessions: data.loginSessions || []
                    });
                    sessionStorage.setItem('scc_current_user', JSON.stringify(currentUser));
                    updateUIForProgress();

                    // Cargar módulo o resultados correspondientes
                    if (currentUser.score !== null) {
                        renderResults(currentUser.score, currentUser.approved);
                    } else {
                        let activeIndex = 0;
                        for (let index = 0; index < modules.length; index++) {
                            const threshold = (index / modules.length) * 100;
                            const isUnlocked = index === 0 || (currentUser.progress >= threshold - 1);
                            if (isUnlocked) {
                                activeIndex = index;
                            } else {
                                break;
                            }
                        }
                        loadModule(activeIndex);
                    }
                } else {
                    saveCurrentUserToDB();
                    loadModule(0);
                }
            })
            .catch((error) => {
                console.error("Error al obtener progreso de Firebase:", error);
                loadLocalProgress();
            });
    } else {
        loadLocalProgress();
    }
}

function loadLocalProgress() {
    const trainees = LocalDB.getTrainees();
    const local = trainees.find(t => t.nif === currentUser.nif);
    if (local) {
        Object.assign(currentUser, {
            name: local.name || currentUser.name,
            progress: local.progress || 0,
            score: local.score !== undefined ? local.score : null,
            approved: local.approved || false,
            examAttempts: local.examAttempts || 0,
            examTimeSeconds: local.examTimeSeconds || 0,
            moduleTimes: local.moduleTimes || {},
            loginSessions: local.loginSessions || []
        });
        sessionStorage.setItem('scc_current_user', JSON.stringify(currentUser));
    }
    updateUIForProgress();

    // Cargar módulo o resultados correspondientes
    if (currentUser.score !== null) {
        renderResults(currentUser.score, currentUser.approved);
    } else {
        let activeIndex = 0;
        for (let index = 0; index < modules.length; index++) {
            const threshold = (index / modules.length) * 100;
            const isUnlocked = index === 0 || (currentUser.progress >= threshold - 1);
            if (isUnlocked) {
                activeIndex = index;
            } else {
                break;
            }
        }
        loadModule(activeIndex);
    }
}

function saveCurrentUserToDB() {
    if (!currentUser) return;
    sessionStorage.setItem('scc_current_user', JSON.stringify(currentUser));

    if (isFirebaseActive && db) {
        db.collection("trainees").doc(currentUser.nif).set({
            name: currentUser.name,
            nif: currentUser.nif,
            progress: currentUser.progress,
            score: currentUser.score,
            approved: currentUser.approved,
            examAttempts: currentUser.examAttempts || 0,
            examTimeSeconds: currentUser.examTimeSeconds || 0,
            moduleTimes: currentUser.moduleTimes || {},
            loginSessions: currentUser.loginSessions || [],
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true })
        .then(() => console.log("Progreso guardado en Firebase Firestore."))
        .catch(error => console.error("Error al guardar en Firebase Firestore:", error));
    } else {
        LocalDB.updateTraineeProgress(currentUser.nif, {
            progress: currentUser.progress,
            score: currentUser.score,
            approved: currentUser.approved,
            examAttempts: currentUser.examAttempts,
            examTimeSeconds: currentUser.examTimeSeconds,
            moduleTimes: currentUser.moduleTimes,
            loginSessions: currentUser.loginSessions
        });
    }
}

// Guardar progreso básico
function saveProgress(progress, score = null, approved = false) {
    if (!currentUser) return;
    currentUser.progress = progress;
    if (score !== null) {
        currentUser.score = score;
        currentUser.approved = approved;
    }
    saveCurrentUserToDB();
    updateUIForProgress();
}

function flushModuleTimer() {
    if (moduleStartTime && currentUser) {
        const elapsed = Math.round((Date.now() - moduleStartTime) / 1000);
        if (!currentUser.moduleTimes) currentUser.moduleTimes = {};
        if (!currentUser.moduleTimes[currentModuleIndex]) {
            currentUser.moduleTimes[currentModuleIndex] = 0;
        }
        currentUser.moduleTimes[currentModuleIndex] += elapsed;
        saveCurrentUserToDB();
    }
    moduleStartTime = null;
}

// Actualizar barra de progreso y navegación lateral
function updateUIForProgress() {
    document.getElementById('user-display-name').innerText = currentUser.name;
    document.getElementById('user-display-nif').innerText = `ID: ${currentUser.nif}`;
    
    const progressPercent = Math.round(currentUser.progress);
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('progress-percentage').innerText = `${progressPercent}%`;
    
    renderSidebarNav();
}

// Cambiar de vista
function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
    });
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Mostrar/ocultar botones del header según la vista
    const logoutBtn = document.getElementById('btn-logout');
    const adminToggle = document.getElementById('btn-admin-toggle');

    if (viewId === 'login-view') {
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (adminToggle) adminToggle.style.display = 'flex';
    } else if (viewId === 'admin-view') {
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (adminToggle) {
            adminToggle.style.display = 'flex';
            adminToggle.innerHTML = '📂 Vista Alumno';
            adminToggle.classList.remove('btn-secondary');
            adminToggle.classList.add('btn-primary');
        }
    } else {
        // Alumno en curso
        if (logoutBtn) logoutBtn.style.display = 'flex';
        if (adminToggle) {
            adminToggle.style.display = 'flex';
            adminToggle.innerHTML = '⚙️ Panel Admin';
            adminToggle.classList.remove('btn-primary');
            adminToggle.classList.add('btn-secondary');
        }
    }
}

// Configurar los eventos de botones y controles
function setupEventListeners() {

    // Sidebar toggle (mobile)
    const btnSidebarToggle = document.getElementById('btn-sidebar-toggle');
    const sidebar = document.querySelector('.app-sidebar');
    if (btnSidebarToggle && sidebar) {
        btnSidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
    
    // Global Search (L&D Phase-Aware)
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const normalize = str => str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
                const term = normalize(e.target.value);
                
                const phaseGroups = document.querySelectorAll('.phase-group');
                phaseGroups.forEach((group, phaseIdx) => {
                    const items = group.querySelectorAll('.module-nav-item');
                    let visibleCount = 0;
                    
                    items.forEach(item => {
                        const index = parseInt(item.dataset.index);
                        const mod = modules[index];
                        const matchesTitle = normalize(mod.title).includes(term);
                        const matchesContent = normalize(mod.content).includes(term);
                        
                        if (matchesTitle || matchesContent || term === "") {
                            item.style.display = 'flex';
                            visibleCount++;
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    
                    if (visibleCount > 0) {
                        group.style.display = 'block';
                        if (term !== "") {
                            group.classList.add('expanded');
                            if (window.expandedPhases) window.expandedPhases[phaseIdx] = true;
                        }
                    } else {
                        group.style.display = 'none';
                    }
                });
            }, 300); // 300ms debounce
        });
    }

    // Login
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('input-name').value.trim();
        const nif = document.getElementById('input-nif').value.trim().toUpperCase();

        if (name && nif) {
            const errorMsg = document.getElementById('login-error-msg');
            
            // Mostrar estado de carga en el botón
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Verificando... ⏳';

            let whitelist = LocalDB.getWhitelist();

            // Sincronizar en tiempo real con Firebase para evitar condiciones de carrera
            if (isFirebaseActive && db) {
                try {
                    const doc = await db.collection("config").doc("whitelist").get();
                    if (doc.exists) {
                        const data = doc.data();
                        if (data && Array.isArray(data.codes)) {
                            whitelist = data.codes;
                            LocalDB.saveWhitelist(whitelist); // Actualizar copia local
                        }
                    }
                } catch (err) {
                    console.error("Error al validar lista blanca en tiempo real desde Firebase:", err);
                }
            }

            // Restaurar botón
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;

            // Validar de forma restrictiva
            if (whitelist.length > 0 && !whitelist.includes(nif)) {
                errorMsg.innerText = '❌ Acceso denegado: Código no autorizado.';
                errorMsg.style.display = 'block';
                return;
            } else if (whitelist.length === 0) {
                errorMsg.innerText = '❌ Acceso denegado: Lista de accesos vacía. Contacte al administrador.';
                errorMsg.style.display = 'block';
                return;
            }
            
            errorMsg.style.display = 'none';

            // Guardar en la base de datos local y/o sesión de forma segura sin sobreescribir
            let traineeData = null;
            if (isFirebaseActive && db) {
                try {
                    const traineeDoc = await db.collection("trainees").doc(nif).get();
                    if (traineeDoc.exists) {
                        traineeData = traineeDoc.data();
                        console.log("Progreso existente cargado desde Firebase.");
                    }
                } catch (err) {
                    console.error("Error al buscar progreso en Firebase:", err);
                }
            }

            if (!traineeData) {
                const trainees = LocalDB.getTrainees();
                const existing = trainees.find(t => t.nif === nif);
                if (existing) {
                    traineeData = existing;
                    console.log("Progreso existente cargado desde LocalDB.");
                }
            }

            if (traineeData) {
                currentUser = {
                    name: traineeData.name || name,
                    nif: nif,
                    progress: traineeData.progress || 0,
                    score: traineeData.score !== undefined ? traineeData.score : null,
                    approved: traineeData.approved || false,
                    examAttempts: traineeData.examAttempts || 0,
                    examTimeSeconds: traineeData.examTimeSeconds || 0,
                    moduleTimes: traineeData.moduleTimes || {},
                    loginSessions: traineeData.loginSessions || []
                };
            } else {
                currentUser = {
                    name: name,
                    nif: nif,
                    progress: 0,
                    score: null,
                    approved: false,
                    examAttempts: 0,
                    examTimeSeconds: 0,
                    moduleTimes: {},
                    loginSessions: []
                };
            }

            // Registrar sesión
            if (!currentUser.loginSessions) currentUser.loginSessions = [];
            currentUser.loginSessions.push(new Date().toLocaleString('es-ES'));

            // Guardar en LocalDB
            const allTrainees = LocalDB.getTrainees();
            const idx = allTrainees.findIndex(t => t.nif === nif);
            if (idx !== -1) {
                allTrainees[idx] = currentUser;
            } else {
                allTrainees.push(currentUser);
            }
            LocalDB.saveTrainees(allTrainees);

            // Guardar en Firebase y SessionStorage
            saveCurrentUserToDB();
            sessionStorage.setItem('scc_current_user', JSON.stringify(currentUser));

            showView('dashboard-view');
            updateUIForProgress();

            // Cargar el módulo correspondiente o el examen
            if (currentUser.score !== null) {
                renderResults(currentUser.score, currentUser.approved);
            } else {
                let activeIndex = 0;
                for (let index = 0; index < modules.length; index++) {
                    const threshold = (index / modules.length) * 100;
                    const isUnlocked = index === 0 || (currentUser.progress >= threshold - 1);
                    if (isUnlocked) {
                        activeIndex = index;
                    } else {
                        break;
                    }
                }
                loadModule(activeIndex);
            }

            moduleStartTime = Date.now();

            // Limpiar inputs
            document.getElementById('input-name').value = '';
            document.getElementById('input-nif').value = '';
        }
    });

    // Logout
    document.getElementById('btn-logout').addEventListener('click', () => {
        flushModuleTimer();
        sessionStorage.removeItem('scc_current_user');
        currentUser = null;
        showView('login-view');
    });

    // Toggle Admin Panel
    document.getElementById('btn-admin-toggle').addEventListener('click', () => {
        const adminToggle = document.getElementById('btn-admin-toggle');
        if (adminToggle.innerHTML.includes('Vista Alumno')) {
            if (currentUser) {
                showView('dashboard-view');
                loadTraineeProgress();
            } else {
                showView('login-view');
            }
        } else {
            // Pedir contraseña de Administrador
            document.getElementById('admin-password-modal').classList.add('active');
            document.getElementById('input-admin-pass').focus();
        }
    });

    // Modal Admin Cerrar
    document.getElementById('close-admin-modal').addEventListener('click', () => {
        document.getElementById('admin-password-modal').classList.remove('active');
        document.getElementById('input-admin-pass').value = '';
        document.getElementById('admin-pass-error').style.display = 'none';
    });

    // Validar contraseña de Admin
    document.getElementById('btn-confirm-admin-pass').addEventListener('click', () => {
        const enteredPass = document.getElementById('input-admin-pass').value;
        const realPass = LocalDB.getAdminPassword();

        if (enteredPass === realPass) {
            document.getElementById('admin-password-modal').classList.remove('active');
            document.getElementById('input-admin-pass').value = '';
            document.getElementById('admin-pass-error').style.display = 'none';
            showView('admin-view');
            loadAdminDashboardData();
        } else {
            document.getElementById('admin-pass-error').style.display = 'block';
        }
    });

    // Modal Settings (Firebase)
    document.getElementById('btn-settings-toggle').addEventListener('click', () => {
        document.getElementById('settings-modal').classList.add('active');
        loadSettingsConfig();
    });

    document.getElementById('close-settings-modal').addEventListener('click', () => {
        document.getElementById('settings-modal').classList.remove('active');
    });

    // Guardar Configuración en Modal
    document.getElementById('btn-save-settings').addEventListener('click', () => {
        const adminPass = document.getElementById('setting-admin-pass').value.trim();
        if (adminPass) {
            LocalDB.saveAdminPassword(adminPass);
        }

        const useFirebase = document.getElementById('toggle-firebase').checked;
        localStorage.setItem('scc_firebase_enabled', useFirebase ? 'true' : 'false');
        if (useFirebase) {
            try {
                const configText = document.getElementById('setting-firebase-config').value.trim();
                const parsedConfig = JSON.parse(configText);
                localStorage.setItem('scc_firebase_config', JSON.stringify(parsedConfig));
                alert("Configuración de Firebase guardada. La página se recargará para aplicar los cambios.");
                location.reload();
            } catch (e) {
                alert("La configuración de Firebase no es un JSON válido. Comprueba el formato.");
                return;
            }
        } else {
            localStorage.removeItem('scc_firebase_config');
            alert("Firebase desactivado. La página se recargará para volver al almacenamiento local.");
            location.reload();
        }

        document.getElementById('settings-modal').classList.remove('active');
    });

    // Mostrar/ocultar área de configuración de Firebase en modal
    document.getElementById('toggle-firebase').addEventListener('change', (e) => {
        const configArea = document.getElementById('firebase-config-area');
        configArea.style.display = e.target.checked ? 'block' : 'none';
    });

    // Botones del Curso (Dashboard)
    document.getElementById('btn-prev-module').addEventListener('click', () => {
        if (currentModuleIndex > 0) {
            loadModule(currentModuleIndex - 1);
        }
    });

    document.getElementById('btn-next-module').addEventListener('click', () => {
        if (currentModuleIndex < modules.length - 1) {
            const result = checkCheckpointScore();
            if (result.passed) {
                const newProgress = Math.max(currentUser.progress, ((currentModuleIndex + 1) / modules.length) * 100);
                saveProgress(newProgress);
                loadModule(currentModuleIndex + 1);
            } else {
                if (!result.answeredAll) {
                    alert(`Por favor, responde todas las ${result.total} preguntas antes de continuar.`);
                } else {
                    alert(`Has obtenido ${result.score} de ${result.total}. Necesitas al menos ${result.required} para avanzar. Las preguntas se han reiniciado. ¡Inténtalo de nuevo!`);
                    renderCheckpoint(modules[currentModuleIndex].checkpoints); // Reset questions
                }
            }
        }
    });

    document.getElementById('btn-start-exam').addEventListener('click', () => {
        if (!modules[modules.length - 1].checkpoint) {
            saveProgress(100);
        }
        if (currentUser.progress >= 99) {
            startExam();
        } else {
            alert("Debes completar todos los módulos formativos antes de tomar el examen.");
        }
    });

    // Botones de Examen
    document.getElementById('btn-prev-question').addEventListener('click', showPrevQuestion);
    document.getElementById('btn-next-question').addEventListener('click', showNextQuestion);
    document.getElementById('btn-submit-exam').addEventListener('click', submitExam);

    // Diploma
    document.getElementById('btn-download-diploma').addEventListener('click', downloadDiplomaImage);
    document.getElementById('btn-restart-course').addEventListener('click', restartCourse);

    // Exportar CSV
    const btnExportCsv = document.getElementById('btn-export-csv');
    if (btnExportCsv) {
        btnExportCsv.addEventListener('click', exportTraineesToCSV);
    }
}

// Exportar la lista de trainees a un archivo CSV para RRHH / Control de Gestión
function exportTraineesToCSV() {
    const trainees = LocalDB.getTrainees();
    if (trainees.length === 0) {
        alert("No hay datos de alumnos para exportar.");
        return;
    }

    let csvContent = "\uFEFF"; // UTF-8 BOM para soporte de acentos en Excel
    csvContent += "Nombre,Código Empleado,Progreso (%),Calificación Examen,Aprobado,Intentos Examen,Tiempo Examen (seg),Sesiones de Inicio\n";
    
    trainees.forEach(t => {
        const approvedText = t.approved ? "SI" : "NO";
        const scoreText = t.score !== null ? t.score : "-";
        const progressPercent = Math.round(t.progress);
        const loginCount = t.loginSessions ? t.loginSessions.length : 0;
        
        const escapedName = `"${t.name.replace(/"/g, '""')}"`;
        const escapedNif = `"${t.nif}"`;
        
        csvContent += `${escapedName},${escapedNif},${progressPercent}%,${scoreText},${approvedText},${t.examAttempts || 0},${t.examTimeSeconds || 0},${loginCount}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `reporte_capacitacion_scc_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Cargar configuraciones guardadas en el modal
function loadSettingsConfig() {
    document.getElementById('setting-admin-pass').value = LocalDB.getAdminPassword();
    document.getElementById('toggle-firebase').checked = isFirebaseActive;
    document.getElementById('firebase-config-area').style.display = isFirebaseActive ? 'block' : 'none';
    document.getElementById('setting-firebase-config').value = JSON.stringify(firebaseConfig, null, 2);
}

// Indicator de estado de Firebase en el pie de página
function updateFirebaseStatusIndicator() {
    const indicator = document.getElementById('firebase-status-indicator');
    if (indicator) {
        if (isFirebaseActive) {
            indicator.innerHTML = `<span class="badge badge-success">☁️ Firebase Firestore Activo</span>`;
        } else {
            indicator.innerHTML = `<span class="badge badge-info">💾 Almacenamiento Local (Sin Servidor)</span>`;
        }
    }
}

// Renderizar la barra lateral con la lista de módulos agrupados por fases (L&D)
function renderSidebarNav() {
    const container = document.getElementById('module-list-container');
    if (!container) return;

    container.innerHTML = '';
    
    const phases = [
        { name: "Fase 1: Inducción e Introducción", range: [0, 1] },
        { name: "Fase 2: Modelos Estándar y Automáticos", range: [2, 4] },
        { name: "Fase 3: Operaciones Complejas", range: [5, 16] },
        { name: "Fase 4: Material de Consulta Diaria", range: [17, 18] }
    ];

    if (!window.expandedPhases) {
        window.expandedPhases = phases.map(phase => {
            return currentModuleIndex >= phase.range[0] && currentModuleIndex <= phase.range[1];
        });
    }

    phases.forEach((phase, phaseIdx) => {
        const phaseGroup = document.createElement('div');
        phaseGroup.className = 'phase-group';
        if (window.expandedPhases[phaseIdx]) {
            phaseGroup.classList.add('expanded');
        }

        const phaseHeader = document.createElement('div');
        phaseHeader.className = 'phase-header';
        phaseHeader.innerHTML = `<span>${phase.name}</span><span class="phase-chevron">▼</span>`;
        phaseHeader.addEventListener('click', () => {
            window.expandedPhases[phaseIdx] = !window.expandedPhases[phaseIdx];
            renderSidebarNav();
        });
        phaseGroup.appendChild(phaseHeader);

        const modulesContainer = document.createElement('div');
        modulesContainer.className = 'phase-modules-container';

        for (let index = phase.range[0]; index <= phase.range[1]; index++) {
            if (index >= modules.length) break;
            const mod = modules[index];

            const item = document.createElement('div');
            item.className = 'module-nav-item';
            
            const threshold = (index / modules.length) * 100;
            let isUnlocked = index === 0 || (currentUser && currentUser.progress >= threshold - 1);
            if (!mod.checkpoints) isUnlocked = true; // Anexos siempre desbloqueados
            const isCompleted = currentUser && currentUser.progress >= (((index + 1) / modules.length) * 100 - 1);
            
            item.dataset.index = index;

            if (!isUnlocked) {
                item.classList.add('locked');
                item.innerHTML = `<span class="dot"></span> 🔒 ${mod.title}`;
            } else {
                if (isCompleted) {
                    item.classList.add('completed');
                }
                if (index === currentModuleIndex) {
                    item.classList.add('active');
                }
                
                item.innerHTML = `<span class="dot"></span> ${mod.title}`;
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    loadModule(index);
                    if (window.innerWidth <= 900) { 
                        document.querySelector('.app-sidebar').classList.remove('open'); 
                    }
                });
            }
            modulesContainer.appendChild(item);
        }

        phaseGroup.appendChild(modulesContainer);
        container.appendChild(phaseGroup);
    });

    // Botón de examen en barra lateral
    const examBtn = document.getElementById('btn-sidebar-exam');
    if (examBtn && currentUser) {
        if (currentUser.progress >= 99) {
            examBtn.classList.remove('locked');
            examBtn.style.opacity = '1';
            examBtn.style.cursor = 'pointer';
            if (currentUser.score !== null) {
                examBtn.innerHTML = currentUser.approved ? '🎓 Curso Aprobado (Ver Certificado)' : '📝 Repetir Examen Final';
            } else {
                examBtn.innerHTML = '📝 Tomar Examen Final';
            }
        } else {
            examBtn.classList.add('locked');
            examBtn.style.opacity = '0.4';
            examBtn.style.cursor = 'not-allowed';
            examBtn.innerHTML = '🔒 Examen Final (Completar Módulos)';
        }
    }
}

// Cargar un módulo específico en la interfaz
function loadModule(index) {
    if (currentUser) flushModuleTimer();
    currentModuleIndex = index;
    moduleStartTime = Date.now();
    const mod = modules[index];
    
    document.getElementById('module-tag').innerText = mod.tag;
    document.getElementById('module-title').innerText = mod.title;
    
    // Inyectar contenido HTML
    const bodyContainer = document.getElementById('module-content-body');
    bodyContainer.innerHTML = mod.content;
    // Prevent keyboard seeking on videos
    document.querySelectorAll('video').forEach(vid => {
        vid.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
            }
        });
        vid.addEventListener('contextmenu', e => e.preventDefault()); // Prevent right click
    });

    
    // Generar checkpoint interactivo al final
    renderCheckpoint(mod.checkpoints);

    // Ajustar botones inferiores de navegación
    const prevBtn = document.getElementById('btn-prev-module');
    const nextBtn = document.getElementById('btn-next-module');
    const startExamBtn = document.getElementById('btn-start-exam');

    prevBtn.disabled = index === 0;
    
    if (index === modules.length - 1) {
        nextBtn.style.display = 'none';
        startExamBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        startExamBtn.style.display = 'none';
    }

    // Actualizar barra de navegación activa
    document.querySelectorAll('.module-nav-item').forEach((item) => {
        if (parseInt(item.dataset.index) === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Comprobar si el alumno ya respondió correctamente el checkpoint del módulo actual
function checkCheckpointScore() {
    if (!modules[currentModuleIndex].checkpoints) return { passed: true, score: 5, total: 5, required: 0 };
    
    const threshold = ((currentModuleIndex + 1) / modules.length) * 100;
    if (currentUser.progress >= threshold - 1) {
        return { passed: true, score: 5, total: 5, required: 0 }; // Already passed previously
    }
    
    const container = document.getElementById('checkpoint-container');
    const cards = container.querySelectorAll('.objective-card');
    let correctCount = 0;
    let answeredCount = 0;
    
    cards.forEach(card => {
        const selected = card.querySelector('.obj-option.selected');
        if (selected) {
            answeredCount++;
            if (selected.dataset.correct === "true") {
                correctCount++;
            }
        }
    });
    
    const required = Math.ceil(cards.length * 0.8);
    return { 
        passed: correctCount >= required, 
        score: correctCount, 
        total: cards.length,
        required: required,
        answeredAll: answeredCount === cards.length
    };
}

// Renderizar el micro-desafío interactivo del módulo con Feedback Formativo (L&D)
function renderCheckpoint(checkpoints) {
    const container = document.getElementById('checkpoint-container');
    container.innerHTML = '';
    
    if (!checkpoints || checkpoints.length === 0) return;

    const shuffled = [...checkpoints].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    
    const cards = [];
    let currentIndex = 0;

    selected.forEach((cp, idx) => {
        const card = document.createElement('div');
        card.className = 'objective-card';
        card.style.marginBottom = '1rem';
        card.style.display = idx === 0 ? 'block' : 'none';
        
        const header = document.createElement('div');
        header.className = 'objective-header';
        header.innerHTML = `<span class="objective-icon">🎯</span> <h4>Pregunta ${idx + 1} de ${selected.length}</h4>`;
        card.appendChild(header);

        const questionP = document.createElement('p');
        questionP.style.fontSize = '0.95rem';
        questionP.style.fontWeight = '500';
        questionP.innerText = cp.question;
        card.appendChild(questionP);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'objective-options';

        const shuffledOptions = [...cp.options].sort(() => 0.5 - Math.random());

        shuffledOptions.forEach(opt => {
            const optionBtn = document.createElement('div');
            optionBtn.className = 'obj-option';
            optionBtn.innerText = opt.text;
            optionBtn.dataset.correct = opt.correct ? "true" : "false";

            optionBtn.addEventListener('click', () => {
                // Si ya se respondió y reveló, evitar múltiples selecciones para fijar la respuesta
                if (optionsDiv.querySelector('.obj-option.correct') || optionsDiv.querySelector('.obj-option.wrong')) {
                    return;
                }

                optionsDiv.querySelectorAll('.obj-option').forEach(btn => btn.classList.remove('selected'));
                optionBtn.classList.add('selected');
                
                // Mostrar Feedback Formativo
                let feedbackDiv = card.querySelector('.checkpoint-feedback');
                if (!feedbackDiv) {
                    feedbackDiv = document.createElement('div');
                    feedbackDiv.className = 'checkpoint-feedback';
                    card.appendChild(feedbackDiv);
                }

                if (opt.correct) {
                    optionBtn.classList.add('correct');
                    feedbackDiv.className = 'checkpoint-feedback correct';
                    feedbackDiv.innerHTML = `<strong>✨ ¡Correcto!</strong> Buen trabajo.`;
                } else {
                    optionBtn.classList.add('wrong');
                    // Revelar la respuesta correcta en verde
                    optionsDiv.querySelectorAll('.obj-option').forEach(btn => {
                        if (btn.dataset.correct === "true") {
                            btn.classList.add('correct');
                        }
                    });
                    feedbackDiv.className = 'checkpoint-feedback incorrect';
                    const correctOpt = shuffledOptions.find(o => o.correct);
                    feedbackDiv.innerHTML = `<strong>⚠️ Incorrecto.</strong> La respuesta adecuada era:<br><em>"${correctOpt.text}"</em>`;
                }
                feedbackDiv.style.display = 'block';
            });

            optionsDiv.appendChild(optionBtn);
        });

        card.appendChild(optionsDiv);
        cards.push(card);
        carouselWrapper.appendChild(card);
    });
    
    const navControls = document.createElement('div');
    navControls.style.display = 'flex';
    navControls.style.justifyContent = 'space-between';
    navControls.style.marginTop = '0.5rem';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn btn-secondary';
    prevBtn.innerHTML = '← Anterior';
    prevBtn.style.visibility = 'hidden';
    prevBtn.style.padding = '0.5rem 1rem';
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-secondary';
    nextBtn.innerHTML = 'Siguiente →';
    nextBtn.style.padding = '0.5rem 1rem';
    
    const updateCarousel = () => {
        cards.forEach((c, i) => {
            c.style.display = i === currentIndex ? 'block' : 'none';
        });
        prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = currentIndex === cards.length - 1 ? 'hidden' : 'visible';
    };
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    navControls.appendChild(prevBtn);
    navControls.appendChild(nextBtn);
    carouselWrapper.appendChild(navControls);
    
    container.appendChild(carouselWrapper);
}

// --- LÓGICA DEL EXAMEN FINAL ---
let currentQuestionIndex = 0;

function startExam() {
    flushModuleTimer();
    examStartTime = Date.now();
    currentQuestionIndex = 0;
    userAnswers = new Array(examQuestions.length).fill(null);
    showView('exam-view');
    renderQuestion(0);
}

function renderQuestion(index) {
    currentQuestionIndex = index;
    const q = examQuestions[index];

    document.getElementById('current-question-num').innerText = index + 1;
    document.getElementById('total-questions-num').innerText = examQuestions.length;

    const card = document.getElementById('exam-question-card');
    card.innerHTML = '';

    const textDiv = document.createElement('div');
    textDiv.className = 'question-text';
    textDiv.innerText = q.question;
    card.appendChild(textDiv);

    const optionsList = document.createElement('div');
    optionsList.className = 'options-list';

    q.options.forEach((opt, optIndex) => {
        const item = document.createElement('div');
        item.className = 'option-item';
        if (userAnswers[index] === optIndex) {
            item.classList.add('selected');
        }

        const radio = document.createElement('div');
        radio.className = 'option-radio';
        const fill = document.createElement('div');
        fill.className = 'option-radio-fill';
        radio.appendChild(fill);
        item.appendChild(radio);

        const content = document.createElement('div');
        content.className = 'option-content';
        content.innerText = opt.text;
        item.appendChild(content);

        item.addEventListener('click', () => {
            optionsList.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
            userAnswers[index] = optIndex;
            updateExamNavigation();
        });

        optionsList.appendChild(item);
    });

    card.appendChild(optionsList);
    updateExamNavigation();
}

function updateExamNavigation() {
    const prevBtn = document.getElementById('btn-prev-question');
    const nextBtn = document.getElementById('btn-next-question');
    const submitBtn = document.getElementById('btn-submit-exam');

    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === examQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

function showPrevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < examQuestions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
    }
}

function submitExam() {
    // Comprobar si faltan preguntas por responder
    const unanswered = userAnswers.filter(ans => ans === null).length;
    if (unanswered > 0) {
        const confirmSubmit = confirm(`Aún te quedan ${unanswered} preguntas sin responder. ¿Estás seguro de que quieres finalizar el examen?`);
        if (!confirmSubmit) return;
    }

    const elapsedSeconds = examStartTime ? Math.round((Date.now() - examStartTime) / 1000) : 0;

    // Calcular nota
    let correctCount = 0;
    examQuestions.forEach((q, index) => {
        const userSelection = userAnswers[index];
        if (userSelection !== null && q.options[userSelection].correct) {
            correctCount++;
        }
    });

    const score = correctCount; // Nota sobre 10
    const approved = score >= 8; // Mínimo 80%

    // Guardar progreso y nota final
    currentUser.examAttempts = (currentUser.examAttempts || 0) + 1;
    currentUser.examTimeSeconds = elapsedSeconds;
    saveProgress(100, score, approved);

    // Cargar pantalla de resultados
    renderResults(score, approved);
}

function renderResults(score, approved) {
    showView('result-view');

    const iconEl = document.getElementById('result-icon');
    const titleEl = document.getElementById('result-title');
    const descEl = document.getElementById('result-desc');
    const scoreBadge = document.getElementById('score-badge');
    const diplomaPreview = document.getElementById('diploma-preview-container');
    const downloadBtn = document.getElementById('btn-download-diploma');
    const restartBtn = document.getElementById('btn-restart-course');

    if (approved) {
        iconEl.innerHTML = '🏆';
        iconEl.className = 'result-icon pass';
        titleEl.innerText = '¡Felicidades, Capacitación Aprobada!';
        descEl.innerHTML = `Has demostrado comprender a la perfección los lineamientos del trámite <strong>SCC (Solicitud de Certificado de Cancelación)</strong> conforme a la normativa legal de Banco Sabadell. Tu diploma ya está disponible para su descarga.`;
        
        scoreBadge.innerText = `Calificación: ${score} / 10 (${score * 10}%)`;
        scoreBadge.className = 'score-badge pass';

        diplomaPreview.style.display = 'flex';
        downloadBtn.style.display = 'inline-flex';
        restartBtn.style.display = 'none';

        // Dibujar y cargar previsualización del diploma
        generateDiplomaPreview();
    } else {
        iconEl.innerHTML = '❌';
        iconEl.className = 'result-icon fail';
        titleEl.innerText = 'Capacitación No Aprobada';
        descEl.innerHTML = `Has obtenido un resultado menor al <strong>80% de aciertos</strong> requeridos para certificar tus conocimientos en SCC. Te recomendamos revisar nuevamente los módulos de estudio y volver a tomar la evaluación.`;
        
        scoreBadge.innerText = `Calificación: ${score} / 10 (${score * 10}%)`;
        scoreBadge.className = 'score-badge fail';

        diplomaPreview.style.display = 'none';
        downloadBtn.style.display = 'none';
        restartBtn.style.display = 'inline-flex';
    }
}

// Dibujar diploma en un Canvas para previsualizar y descargar
function generateDiplomaPreview() {
    const canvas = document.getElementById('diplomaCanvas');
    const ctx = canvas.getContext('2d');

    // Dimensiones de alta resolución (A4 apaisado aproximado)
    canvas.width = 1120;
    canvas.height = 792;

    // --- DISEÑO PREMIUM DEL DIPLOMA ---
    // Fondo oscuro premium
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Marco exterior (azul corporativo y oro)
    ctx.lineWidth = 12;
    ctx.strokeStyle = '#0066cc';
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#f59e0b'; // Acento dorado
    ctx.strokeRect(32, 32, canvas.width - 64, canvas.height - 64);

    // Elementos gráficos de esquina decorativos
    ctx.fillStyle = '#f59e0b';
    const corners = [
        { x: 34, y: 34 },
        { x: canvas.width - 44, y: 34 },
        { x: 34, y: canvas.height - 44 },
        { x: canvas.width - 44, y: canvas.height - 44 }
    ];
    corners.forEach(c => {
        ctx.fillRect(c.x, c.y, 10, 10);
    });

    // Logotipo simulado
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 36px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('BS', canvas.width / 2, 110);
    
    // Título Principal
    ctx.fillStyle = '#f1f5f9';
    ctx.font = '500 24px Inter, sans-serif';
    ctx.fillText('CERTIFICADO DE APROBACIÓN', canvas.width / 2, 170);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 16px Inter, sans-serif';
    ctx.fillText('Otorgado formalmente a:', canvas.width / 2, 230);

    // Nombre del alumno destacado
    ctx.fillStyle = '#3b82f6';
    ctx.font = 'bold 44px Outfit, sans-serif';
    ctx.fillText(currentUser.name.toUpperCase(), canvas.width / 2, 300);

    // Subtítulo Nombre
    ctx.fillStyle = '#64748b';
    ctx.font = '500 15px Inter, sans-serif';
    ctx.fillText(`Identificación de Colaborador (NIF/ID): ${currentUser.nif}`, canvas.width / 2, 340);

    // Línea divisoria
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 4, 380);
    ctx.lineTo((canvas.width / 4) * 3, 380);
    ctx.stroke();

    // Texto de la certificación
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '18px Inter, sans-serif';
    ctx.fillText('Por haber completado satisfactoriamente los módulos formativos y superado con éxito', canvas.width / 2, 425);
    ctx.fillText('el examen del curso teórico-práctico de especialización en el trámite:', canvas.width / 2, 455);
    
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px Outfit, sans-serif';
    ctx.fillText('EMISIÓN DE CERTIFICADOS DE CANCELACIÓN HIPOTECARIA (SCC)', canvas.width / 2, 505);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '15px Inter, sans-serif';
    ctx.fillText(`Evaluación aprobada con nota ${currentUser.score} de 10 (${currentUser.score * 10}% de aciertos).`, canvas.width / 2, 550);

    // Fecha
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const todayStr = new Date().toLocaleDateString('es-ES', options);
    ctx.fillText(`Emitido el ${todayStr}`, canvas.width / 2, 590);

    // Firma simulada (Línea y nombres)
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 100, 680);
    ctx.lineTo(canvas.width / 2 + 100, 680);
    ctx.stroke();

    // Dibujar trazo de firma ficticia
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 50, 660);
    ctx.bezierCurveTo(canvas.width / 2 - 20, 640, canvas.width / 2 + 20, 675, canvas.width / 2 + 50, 650);
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 14px Inter, sans-serif';
    ctx.fillText('Dirección de Capacitación y RRHH', canvas.width / 2, 705);
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Inter, sans-serif';
    ctx.fillText('Centro Resolutor 3813 - Administración de Préstamos', canvas.width / 2, 725);

    // Renderizar canvas en la etiqueta img de previsualización
    const thumbImg = document.getElementById('diploma-preview-img');
    thumbImg.src = canvas.toDataURL('image/png');
}

// Descargar el diploma como archivo PNG
function downloadDiplomaImage() {
    const canvas = document.getElementById('diplomaCanvas');
    const image = canvas.toDataURL('image/png');
    
    const link = document.createElement('a');
    link.download = `Certificado_SCC_${currentUser.name.replace(/\s+/g, '_')}.png`;
    link.href = image;
    link.click();
}

// Reiniciar curso en caso de reprobar
function restartCourse() {
    // Mantener la sesión iniciada y el progreso al 100% (para no bloquear los módulos), 
    // pero restablecer la calificación del examen para poder reintentarlo.
    saveProgress(100, null, false);
    currentModuleIndex = 0;
    showView('dashboard-view');
    loadModule(0);
}

// --- PANEL DE ADMINISTRACIÓN (VISTA ADMIN) ---
function loadAdminDashboardData() {
    renderWhitelistAdmin();
    // Si Firebase está activo, descargar los datos de Firebase, si no, usar LocalDB
    if (isFirebaseActive && db) {
        db.collection("trainees").orderBy("timestamp", "desc").get()
            .then((querySnapshot) => {
                const trainees = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    trainees.push(data);
                });
                renderAdminTable(trainees);
            })
            .catch((error) => {
                console.error("Error al descargar listado de Firebase:", error);
                // Fallback a local
                renderAdminTable(LocalDB.getTrainees());
            });
    } else {
        renderAdminTable(LocalDB.getTrainees());
    }
}

function renderWhitelistAdmin() {
    const list = LocalDB.getWhitelist();
    const ul = document.getElementById('whitelist-list');
    if (!ul) return;
    ul.innerHTML = '';
    list.forEach(code => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.padding = '0.5rem';
        li.style.background = 'rgba(255,255,255,0.05)';
        li.style.borderRadius = '4px';
        li.innerHTML = `<span>${code}</span> <button class="btn btn-danger" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">X</button>`;
        li.querySelector('button').addEventListener('click', () => {
            LocalDB.removeWhitelist(code);
            renderWhitelistAdmin();
        });
        ul.appendChild(li);
    });

    const addBtn = document.getElementById('btn-add-whitelist');
    const input = document.getElementById('input-whitelist-code');
    // Eliminar listeners viejos clonando
    const newAddBtn = addBtn.cloneNode(true);
    addBtn.parentNode.replaceChild(newAddBtn, addBtn);
    newAddBtn.addEventListener('click', () => {
        const code = input.value.trim().toUpperCase();
        if (code) {
            LocalDB.addWhitelist(code);
            input.value = '';
            renderWhitelistAdmin();
        }
    });
}

function renderAdminTable(trainees) {
    const tbody = document.getElementById('admin-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    // Calcular estadísticas generales
    let total = trainees.length;
    let approvedCount = 0;
    let inProgressCount = 0;
    let scoreSum = 0;
    let scoresRated = 0;

    trainees.forEach((t, index) => {
        const row = document.createElement('tr');
        
        // Columna Nombre
        const cellName = document.createElement('td');
        cellName.style.fontWeight = '500';
        cellName.innerText = t.name;
        row.appendChild(cellName);

        // Columna ID
        const cellId = document.createElement('td');
        cellId.innerText = t.nif;
        row.appendChild(cellId);

        // Columna Progreso Módulos
        const cellProgress = document.createElement('td');
        const progressVal = Math.round(t.progress);
        let progressBadge = '';
        if (progressVal >= 100) {
            progressBadge = `<span class="badge badge-success">Completado (100%)</span>`;
        } else if (progressVal > 0) {
            progressBadge = `<span class="badge badge-warning">En Curso (${progressVal}%)</span>`;
            inProgressCount++;
        } else {
            progressBadge = `<span class="badge badge-info">No Iniciado</span>`;
            inProgressCount++;
        }
        cellProgress.innerHTML = progressBadge;
        row.appendChild(cellProgress);

        // Columna Calificación Examen
        const cellScore = document.createElement('td');
        if (t.score !== null && t.score !== undefined) {
            scoreSum += t.score;
            scoresRated++;
            const scoreClass = t.approved ? 'badge-success' : 'badge-danger';
            const scoreText = t.approved ? `Aprobado (${t.score}/10)` : `Reprobado (${t.score}/10)`;
            cellScore.innerHTML = `<span class="badge ${scoreClass}">${scoreText}</span>`;
            
            if (t.approved) approvedCount++;
        } else {
            cellScore.innerHTML = `<span class="badge badge-info">-</span>`;
        }
        row.appendChild(cellScore);

        // Columna Acciones (Detalles y Eliminar)
        const cellActions = document.createElement('td');
        cellActions.style.display = 'flex';
        cellActions.style.gap = '8px';

        const btnDetails = document.createElement('button');
        btnDetails.className = 'btn btn-secondary';
        btnDetails.style.padding = '0.35rem 0.75rem';
        btnDetails.style.fontSize = '0.8rem';
        btnDetails.innerText = 'Ver Detalles';
        btnDetails.addEventListener('click', () => {
            showStudentDetailsModal(t);
        });
        cellActions.appendChild(btnDetails);

        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn btn-danger';
        btnDelete.style.padding = '0.35rem 0.75rem';
        btnDelete.style.fontSize = '0.8rem';
        btnDelete.style.background = 'var(--danger)';
        btnDelete.style.border = 'none';
        btnDelete.innerText = 'Eliminar';
        btnDelete.addEventListener('click', () => {
            if (confirm(`¿Estás seguro de eliminar el registro de ${t.name}?`)) {
                // 1. Eliminar de LocalDB por NIF
                let allTrainees = LocalDB.getTrainees();
                const localIndex = allTrainees.findIndex(item => item.nif === t.nif);
                if (localIndex !== -1) {
                    allTrainees.splice(localIndex, 1);
                    LocalDB.saveTrainees(allTrainees);
                }

                // 2. Eliminar de Firebase Firestore si está activo
                if (isFirebaseActive && db) {
                    db.collection("trainees").doc(t.nif).delete()
                        .then(() => {
                            console.log(`Registro de ${t.name} eliminado de Firebase.`);
                            loadAdminDashboardData();
                        })
                        .catch(err => {
                            console.error("Error al eliminar alumno de Firebase:", err);
                            alert("Error al eliminar de la base de datos en la nube.");
                            loadAdminDashboardData();
                        });
                } else {
                    renderAdminTable(allTrainees);
                }
            }
        });
        cellActions.appendChild(btnDelete);

        row.appendChild(cellActions);

        tbody.appendChild(row);
    });

    // Si la tabla está vacía
    if (total === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay alumnos registrados todavía.</td></tr>`;
    }

    // Inyectar Estadísticas
    document.getElementById('stat-total-trainees').innerText = total;
    document.getElementById('stat-passed-trainees').innerText = approvedCount;
    document.getElementById('stat-inprogress-trainees').innerText = inProgressCount;
    
    const avgScore = scoresRated > 0 ? (scoreSum / scoresRated).toFixed(1) : '-';
    document.getElementById('stat-avg-score').innerText = avgScore;
}

function showStudentDetailsModal(trainee) {
    document.getElementById('admin-student-details-modal').classList.add('active');
    document.getElementById('details-modal-title').innerText = `Detalles de ${trainee.name}`;
    
    const formatTime = (secs) => {
        if (secs < 60) return `${secs}s`;
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        if (s === 0) return `${m} min`;
        return `${m}:${s.toString().padStart(2, '0')} min`;
    };

    document.getElementById('detail-exam-attempts').innerText = trainee.examAttempts || 0;
    document.getElementById('detail-exam-time').innerText = formatTime(trainee.examTimeSeconds || 0);
    
    // Módulos
    const tbodyModules = document.getElementById('detail-module-times');
    tbodyModules.innerHTML = '';
    const mTimes = trainee.moduleTimes || {};
    const groupTimes = {};
    modules.forEach((mod, i) => {
        const groupName = mod.moduleGroup;
        if (groupName === "Plantillas de Resolución" || groupName === "Glosario de Términos") return;
        if (!groupTimes[groupName]) {
            groupTimes[groupName] = 0;
        }
        groupTimes[groupName] += (mTimes[i] || 0);
    });

    Object.keys(groupTimes).forEach((groupName) => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.innerText = groupName;
        const tdTime = document.createElement('td');
        tdTime.innerText = formatTime(groupTimes[groupName]);
        tr.appendChild(tdName);
        tr.appendChild(tdTime);
        tbodyModules.appendChild(tr);
    });

    // Sesiones
    const ulSessions = document.getElementById('detail-login-sessions');
    ulSessions.innerHTML = '';
    const sessions = trainee.loginSessions || [];
    if (sessions.length === 0) {
        ulSessions.innerHTML = '<li>Sin registros de sesión.</li>';
    } else {
        sessions.forEach(s => {
            const li = document.createElement('li');
            li.innerText = `➡️ Inicio de sesión: ${s}`;
            li.style.padding = '0.25rem 0';
            ulSessions.appendChild(li);
        });
    }

    document.getElementById('close-student-details-modal').onclick = () => {
        document.getElementById('admin-student-details-modal').classList.remove('active');
    };
}
