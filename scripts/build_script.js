const fs = require('fs');

const appJsPath = 'app.js';
let appJs = fs.readFileSync(appJsPath, 'utf8');

// 1. Replace the modules array
const newModulesArr = `const modules = [
    {
        moduleGroup: "Módulo 1: Modelo UNIFICADO",
        title: "1.1 Certificado Estándar",
        tag: "Lección 1",
        content: \`
            <p>El Modelo Unificado engloba los certificados de cancelación de hipotecas más comunes y estandarizados dentro de la operativa del banco.</p>
            <h3>Certificado Estándar</h3>
            <p>Se emite cuando el historial del préstamo hipotecario no ha sufrido modificaciones estructurales complejas a lo largo de su vida. Utiliza la plantilla de cancelación unificada estándar.</p>
            <p><strong>Procedimiento según formación:</strong> Revisamos el Gestor Documental (GD) para encontrar la plantilla, la nota simple y la escritura. En <strong>SIBIS</strong>, comprobamos el número de préstamo (ej. empieza con 807). En la escritura, validamos el importe principal en la cláusula financiera y la finca registral (ej. Mijas, finca 108).</p>
        \`,
        checkpoint: {
            question: "¿En qué sistema validamos el importe y la finca registral consultando la escritura y la nota simple?",
            options: [
                { text: "En CIVIS.", correct: false },
                { text: "En SIBIS y el Gestor Documental (GD).", correct: true },
                { text: "En Canal BSOS exclusivamente.", correct: false },
                { text: "En el portal de CertiPress.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 1: Modelo UNIFICADO",
        title: "1.2 Certificado NO Estándar",
        tag: "Lección 2",
        content: \`
            <h3>Certificado NO Estándar</h3>
            <p>Se utiliza cuando el préstamo ha sufrido modificaciones contractuales importantes. Esto ocurre comúnmente en casos de:</p>
            <ul>
                <li><strong>Extinción de condominio:</strong> Por ejemplo, tras una separación o divorcio, donde uno de los prestatarios asume la deuda.</li>
                <li><strong>Ampliación de capital:</strong> Cuando el cliente solicitó más dinero sobre la misma hipoteca.</li>
                <li><strong>Novación:</strong> Cambio de condiciones.</li>
            </ul>
            <p>En estos casos, se debe leer detenidamente la escritura para reflejar estas condiciones especiales (ej. "vende y transmite a Francisco José... por el importe tal").</p>
        \`,
        checkpoint: {
            question: "¿Qué evento requiere obligatoriamente redactar el certificado como NO Estándar?",
            options: [
                { text: "Cuando la hipoteca tiene más de 10 años.", correct: false },
                { text: "Cuando hay una extinción de condominio o ampliación de capital.", correct: true },
                { text: "Cuando el cliente solicita el certificado en persona.", correct: false },
                { text: "Cuando el préstamo empieza con 807.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 2: Certificados AUTOMÁTICOS",
        title: "2.1 Certificados Automáticos",
        tag: "Lección 3",
        content: \`
            <h3>Certificados Automáticos</h3>
            <p>Son aquellos documentos de saldo cero que el sistema central del banco genera y pone a disposición de la oficina directamente. Como agentes, no confeccionamos estos certificados manualmente.</p>
            <p><strong>¿Cómo identificarlo?</strong> En SIBIS, ingresamos a cancelación iniciativa (tecla F9). Si aparece una ventana que dice "firma digital" o "automático", sabemos que lo es.</p>
            <p><strong>Procedimiento:</strong> Realizamos una <em>Devolución Directa</em>. Ponemos la coletilla correspondiente indicando a la oficina: "El certificado solicitado pueden obtenerlo a través de operatoria básica...".</p>
        \`,
        checkpoint: {
            question: "¿Qué acción se debe tomar si se recibe una solicitud SCC que se puede obtener por vía automática?",
            options: [
                { text: "Generarlo manualmente para agilizar.", correct: false },
                { text: "Finalizar con Devolución Directa indicando la ruta informática en SIBIS.", correct: true },
                { text: "Pedir autorización a Riesgos por Canal BSOS.", correct: false },
                { text: "Dejar el trámite en Pendiente de Datos.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 3: ANTES DEL 28/11/2006",
        title: "3.1 Préstamos anteriores a 2006",
        tag: "Lección 4",
        content: \`
            <h3>Préstamos cancelados antes del 28/11/2006</h3>
            <p>Para préstamos muy antiguos, a menudo no encontraremos el número de préstamo en las pantallas habituales ni en SIBIS. Por ello, es <strong>obligatorio</strong> que la oficina nos adjunte un correo de <strong>CertiPress</strong>.</p>
            <p>CertiPress nos confirmará: <em>"Revisados los aplicativos, hemos localizado que el préstamo corresponde a tal, la cual coincide con deudores, importe parcial y fecha"</em>.</p>
            <p>Si la oficina no lo adjunta, lo solicitamos a través de <strong>Canal BSOS</strong> y dejamos el trámite en "Pendiente de datos".</p>
        \`,
        checkpoint: {
            question: "¿Qué documento es vital exigir para tramitar un certificado de una hipoteca cancelada antes del 2006?",
            options: [
                { text: "El correo de validación de CertiPress.", correct: true },
                { text: "La autorización de SAOC.", correct: false },
                { text: "Un avalista adicional.", correct: false },
                { text: "El reporte de contencioso impreso.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.1 Hipoteca personal (Línea)",
        tag: "Lección 5",
        content: \`
            <h3>Hipoteca Personal (Línea)</h3>
            <p>Dentro del "Resto de Modelos", encontramos préstamos que funcionan como líneas de crédito con garantía hipotecaria.</p>
            <p>A diferencia de un préstamo cerrado, una línea de crédito permite disposiciones y reintegros, por lo que la validación en SIBIS requiere confirmar no solo el saldo actual cero, sino que la línea haya sido formalmente clausurada y no permita nuevos desembolsos.</p>
        \`,
        checkpoint: {
            question: "¿Qué característica particular tiene la Hipoteca Personal (Línea)?",
            options: [
                { text: "No tiene garantía hipotecaria.", correct: false },
                { text: "Permite disposiciones y reintegros, requiriendo verificar su clausura total en SIBIS.", correct: true },
                { text: "Siempre se deriva a CertiPress.", correct: false },
                { text: "Solo puede ser cancelada en divisa extranjera.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.2 Cancelación de una sola finca",
        tag: "Lección 6",
        content: \`
            <h3>Cancelación de una sola finca (Varias garantías)</h3>
            <p>En ocasiones, un préstamo está garantizado por dos o más fincas (ej. una vivienda y un garaje). El cliente puede solicitar la cancelación de la hipoteca <strong>únicamente sobre una de ellas</strong>.</p>
            <p><strong>Procedimiento:</strong> Es obligatoria la <strong>autorización expresa del departamento de Riesgos</strong>. Si no se adjunta en GD, debemos solicitarla vía Canal BSOS. Nunca asumimos la liberación de una garantía sin este aval.</p>
        \`,
        checkpoint: {
            question: "¿Qué documento es indispensable si el cliente solicita cancelar solo el garaje pero la vivienda sigue hipotecada?",
            options: [
                { text: "La escritura de compraventa del garaje.", correct: false },
                { text: "Autorización de Riesgos justificando la liberación de la garantía.", correct: true },
                { text: "La nota simple con una antigüedad mayor a 5 años.", correct: false },
                { text: "El DNI de los dueños colindantes.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.3 Solicitud del propietario actual",
        tag: "Lección 7",
        content: \`
            <h3>Solicitud del propietario actual (No titular)</h3>
            <p>Ocurre cuando la persona que solicita el certificado es el dueño actual de la casa, pero <strong>no fue quien firmó el préstamo original</strong> con el banco.</p>
            <p><strong>Norma de Seguridad y LOPD:</strong> En la redacción del certificado NO debemos revelar los nombres de los prestatarios originales si son personas físicas. Protegemos su privacidad usando frases como "y otros".</p>
        \`,
        checkpoint: {
            question: "¿Qué principio rige la emisión de un certificado al propietario actual que no firmó la hipoteca?",
            options: [
                { text: "Se deben incluir todos los nombres originales para evitar fraude.", correct: false },
                { text: "Cumplimiento estricto de la LOPD, ocultando los nombres de los deudores originales (personas físicas).", correct: true },
                { text: "Debe elevarse el caso a SAOC.", correct: false },
                { text: "Se emite un certificado automático.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.4 Hipoteca de máximos",
        tag: "Lección 8",
        content: \`
            <h3>Hipoteca de Máximos</h3>
            <p>La hipoteca de máximo garantiza una pluralidad de obligaciones, presentes o futuras, hasta un límite máximo estipulado.</p>
            <p>En el certificado, se debe hacer mención a la cláusula específica de la escritura que define este tope máximo. La revisión en SIBIS y GD debe ser minuciosa para confirmar que ninguna de las operaciones subyacentes amparadas por la hipoteca mantiene saldo deudor.</p>
        \`,
        checkpoint: {
            question: "¿Qué garantiza una hipoteca de máximos?",
            options: [
                { text: "Obligaciones futuras o presentes hasta un límite máximo acordado.", correct: true },
                { text: "Exclusivamente el valor de un inmueble tasado por el Estado.", correct: false },
                { text: "Préstamos otorgados únicamente en divisa extranjera.", correct: false },
                { text: "Créditos con plazo mayor a 40 años.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.5 Préstamos en divisas",
        tag: "Lección 9",
        content: \`
            <h3>Préstamos en Divisas</h3>
            <p>Préstamos concedidos en una moneda distinta al Euro (ej. Francos Suizos, Yenes).</p>
            <p>Al redactar el certificado, se debe reflejar el importe y la divisa original exacta en la que se formalizó la escritura, independientemente de su contravalor en Euros al momento de la cancelación. Toda esta validación se corrobora cruzando los datos de la escritura con SIBIS.</p>
        \`,
        checkpoint: {
            question: "¿Qué consideración especial tiene la redacción de préstamos en divisas?",
            options: [
                { text: "Se debe convertir el monto a Euros usando la tasa actual.", correct: false },
                { text: "Se debe reflejar el importe y la divisa original exacta de la escritura.", correct: true },
                { text: "Se derivan directamente a CertiPress.", correct: false },
                { text: "Se envían a la oficina central de Madrid para su validación manual.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.6 Solicitud de herederos",
        tag: "Lección 10",
        content: \`
            <h3>Solicitud de Herederos</h3>
            <p>Si los titulares originales han fallecido, sus herederos legítimos pueden solicitar el certificado.</p>
            <p>La oficina debe aportar en el GD la documentación de <strong>Testamentaría</strong> aprobada por el departamento correspondiente del banco, que certifique quiénes son los herederos legales. Sin esto, se solicita por Canal BSOS.</p>
        \`,
        checkpoint: {
            question: "¿Qué documento debe adjuntar la oficina si el solicitante es heredero de un titular fallecido?",
            options: [
                { text: "El certificado de defunción del Registro Civil únicamente.", correct: false },
                { text: "La documentación de Testamentaría validada por el banco.", correct: true },
                { text: "Un poder notarial firmado por el difunto.", correct: false },
                { text: "La autorización de SAOC.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.7 Contencioso (Consulta a SAOC)",
        tag: "Lección 11",
        content: \`
            <h3>Préstamos en situación de Contencioso</h3>
            <p>Cuando al ingresar a SIBIS o revisar el reporte de morosidad vemos el aviso de <strong>Contencioso</strong> (el caso se judicializó por impagos).</p>
            <p><strong>Procedimiento:</strong> Es obligatorio elevar una consulta (ticket) a <strong>SAOC (Servicio de Asesoría Operativa Contenciosa)</strong>. Mientras tanto, el trámite se deja en estado "Pendiente CCC" o "Provisional con incidencias". Una vez que SAOC responda con el visto bueno o el certificado adjunto, procedemos a finalizarlo.</p>
        \`,
        checkpoint: {
            question: "¿Qué departamento es el único autorizado para validar un certificado en Contencioso?",
            options: [
                { text: "CertiPress.", correct: false },
                { text: "SAOC (Servicio de Asesoría Operativa Contenciosa).", correct: true },
                { text: "Metodología Hipotecaria.", correct: false },
                { text: "El director de la oficina origen.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.8 Subrogación de Acreedor",
        tag: "Lección 12",
        content: \`
            <h3>Subrogación de Acreedor</h3>
            <p>Ocurre cuando otra entidad financiera "compra" el préstamo y asume la deuda original del cliente para llevárselo a su banco.</p>
            <p>En el certificado debemos indicar expresamente que el saldo cero es resultado del pago subrogado efectuado por la entidad financiera de destino, validando en la escritura de subrogación los datos de dicho banco.</p>
        \`,
        checkpoint: {
            question: "¿Qué significa una subrogación de acreedor?",
            options: [
                { text: "Que el prestatario se divorció.", correct: false },
                { text: "Que otra entidad financiera asumió la deuda para llevarse la hipoteca.", correct: true },
                { text: "Que el banco condonó la deuda.", correct: false },
                { text: "Que la deuda pasó a Contencioso.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.9 Subrogación de Deudor",
        tag: "Lección 13",
        content: \`
            <h3>Subrogación de Deudor</h3>
            <p>Se presenta cuando, por ejemplo, alguien compra una vivienda hipotecada y, en lugar de solicitar un nuevo préstamo, asume la hipoteca existente (el nuevo dueño pasa a ser el nuevo deudor).</p>
            <p>En la redacción del certificado (Modelo No Estándar - Resto de Modelos), debe trazarse la línea de tiempo reflejando quiénes eran los prestatarios originales y quiénes son los subrogados que finalmente cancelan la operación.</p>
        \`,
        checkpoint: {
            question: "¿En qué consiste la subrogación de deudor?",
            options: [
                { text: "Un nuevo cliente asume la hipoteca existente, convirtiéndose en el nuevo prestatario.", correct: true },
                { text: "El préstamo se traslada a otro banco.", correct: false },
                { text: "Se añade un avalista extra.", correct: false },
                { text: "El cliente devuelve la casa al banco (dación en pago).", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 4: RESTO DE MODELOS",
        title: "4.10 Fondo de comercio",
        tag: "Lección 14",
        content: \`
            <h3>Garantía sobre Fondo de Comercio</h3>
            <p>Se refiere a créditos donde la garantía no es un inmueble físico tradicional (casa, piso, garaje), sino un activo intangible o negocio en marcha (hipoteca mobiliaria, farmacias, estancos, locales comerciales traspasados).</p>
            <p>La validación se realiza de la misma forma en SIBIS y GD, pero los datos registrales a consignar corresponden a registros especiales (Registro de Bienes Muebles) y no al Registro de la Propiedad habitual.</p>
        \`,
        checkpoint: {
            question: "¿Qué tipo de activo respalda un préstamo con garantía sobre fondo de comercio?",
            options: [
                { text: "Un inmueble residencial exclusivamente.", correct: false },
                { text: "Un activo intangible o negocio en marcha (ej. licencias, mobiliario).", correct: true },
                { text: "Divisas en moneda extranjera.", correct: false },
                { text: "El aval del Estado.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 5: PH NO HIPOTECARIO",
        title: "5.1 Préstamos NO Hipotecarios",
        tag: "Lección 15",
        content: \`
            <h3>Préstamos NO Hipotecarios</h3>
            <p>A pesar de que el trámite es de cancelación de hipotecas, excepcionalmente certificamos la liquidación de préstamos sin garantía real inmobiliaria (ej. pólizas de crédito, préstamos mercantiles).</p>
            <p><strong>Identificación:</strong> En la escritura/póliza o en SIBIS, en la pestaña "Garantías", veremos que no hay fincas grabadas.</p>
            <p><strong>Redacción:</strong> Es mucho más simplificada. No es necesario detallar datos registrales (tomo, libro, folio). Solo validamos en la póliza el nombre, importe, fecha y comprobamos el saldo cero.</p>
        \`,
        checkpoint: {
            question: "¿Cómo identificamos rápidamente un préstamo NO hipotecario en los sistemas?",
            options: [
                { text: "Al ver que su importe es siempre menor a 1.000 euros.", correct: false },
                { text: "En SIBIS, revisando la pestaña 'Garantías' notamos que no hay ninguna finca grabada.", correct: true },
                { text: "Aparece con el estado de Contencioso por defecto.", correct: false },
                { text: "Viene siempre con una Autorización de Riesgos.", correct: false }
            ]
        }
    }
];`;

const startIdx = appJs.indexOf('const modules = [');
const endIdx = appJs.indexOf('const examQuestions = [');

appJs = appJs.substring(0, startIdx) + newModulesArr + "\n\n" + appJs.substring(endIdx);

// 2. Replace renderSidebarNav function
const renderSidebarNavNew = `function renderSidebarNav() {
    const container = document.getElementById('module-list-container');
    if (!container) return;

    container.innerHTML = '';
    
    let lastGroup = "";

    modules.forEach((mod, index) => {
        if (mod.moduleGroup !== lastGroup) {
            const groupHeader = document.createElement('div');
            groupHeader.className = 'module-nav-header';
            groupHeader.style.fontWeight = 'bold';
            groupHeader.style.padding = '0.75rem 1rem 0.25rem 1rem';
            groupHeader.style.color = 'var(--primary-light)';
            groupHeader.style.fontSize = '0.85rem';
            groupHeader.innerText = mod.moduleGroup;
            container.appendChild(groupHeader);
            lastGroup = mod.moduleGroup;
        }

        const item = document.createElement('div');
        item.className = 'module-nav-item';
        item.style.paddingLeft = '1.5rem';
        item.style.fontSize = '0.9rem';
        
        const threshold = (index / modules.length) * 100;
        const isUnlocked = index === 0 || (currentUser && currentUser.progress >= threshold - 1);
        const isCompleted = currentUser && currentUser.progress >= (((index + 1) / modules.length) * 100 - 1);
        
        if (!isUnlocked) {
            item.classList.add('locked');
            item.innerHTML = \`<span class="dot"></span> 🔒 \${mod.title}\`;
        } else {
            if (isCompleted) {
                item.classList.add('completed');
            }
            if (index === currentModuleIndex) {
                item.classList.add('active');
            }
            
            item.innerHTML = \`<span class="dot"></span> \${mod.title}\`;
            item.addEventListener('click', () => {
                loadModule(index);
            });
        }
        
        container.appendChild(item);
    });

    // Botón de examen en barra lateral
    const examBtn = document.getElementById('btn-sidebar-exam');
    if (examBtn && currentUser) {
        if (currentUser.progress >= 99) {
            examBtn.classList.remove('locked');
            examBtn.style.opacity = '1';
            examBtn.style.cursor = 'pointer';
            if (currentUser.score !== null) {
                examBtn.innerHTML = currentUser.approved ? '🎓 Curso Aprobado' : '📝 Repetir Examen';
            } else {
                examBtn.innerHTML = '📝 Tomar Examen Final';
            }
        } else {
            examBtn.classList.add('locked');
            examBtn.style.opacity = '0.4';
            examBtn.style.cursor = 'not-allowed';
            examBtn.innerHTML = '🔒 Examen Final (Completar)';
        }
    }
}`;

const navStart = appJs.indexOf('function renderSidebarNav() {');
const navEnd = appJs.indexOf('function loadModule(index) {');
appJs = appJs.substring(0, navStart) + renderSidebarNavNew + "\n\n" + appJs.substring(navEnd);

// 3. Replace hasCompletedCurrentCheckpoint and threshold logic
appJs = appJs.replace(/const threshold = \(currentModuleIndex \+ 1\) \* 20;/g, "const threshold = ((currentModuleIndex + 1) / modules.length) * 100;");
appJs = appJs.replace(/const newProgress = Math.max\(currentUser.progress, \(currentModuleIndex \+ 1\) \* 20\);/g, "const newProgress = Math.max(currentUser.progress, ((currentModuleIndex + 1) / modules.length) * 100);");
// also adjust hasCompletedCurrentCheckpoint return check
appJs = appJs.replace(/if \(currentUser.progress >= threshold\) {/g, "if (currentUser.progress >= threshold - 1) {");

// 4. Replace other occurrences of modules lengths / thresholds just in case
// startExam logic
appJs = appJs.replace(/if \(currentUser.progress >= 100\) {/g, "if (currentUser.progress >= 99) {");

// 5. Correct text mistakes overall
appJs = appJs.replace(/Civis/g, "SIBIS");
appJs = appJs.replace(/civis/g, "SIBIS");
appJs = appJs.replace(/CIVIS/g, "SIBIS");
appJs = appJs.replace(/canal besos/gi, "Canal BSOS");

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log("Successfully rebuilt app.js");
