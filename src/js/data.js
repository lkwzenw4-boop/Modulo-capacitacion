// --- CONFIGURACIÓN DEL CURSO Y CONTENIDOS ---
const modules = [
        {
        moduleGroup: "Módulo 0: Introducción al Sistema",
        title: "Introducción General",
        tag: "Introducción",
        content: `
            <h3>Introducción General</h3>
            <p>Bienvenido a la capacitación interactiva del sistema SCC (Certificado de Cancelación Administrativa). En esta sección conocerás los conceptos fundamentales antes de operar.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <div class="system-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, rgba(0, 102, 204, 0.15) 0%, rgba(255, 255, 255, 0.02) 100%); border-color: rgba(0, 102, 204, 0.35);">
                <div class="system-card-title">
                    <span style="font-size: 1.5rem;">🎯</span> ¿Qué es el sistema SCC y para qué sirve?
                </div>
                <p style="margin: 0; line-height: 1.6;">El sistema SCC está diseñado para gestionar y emitir los certificados de cancelación de préstamos hipotecarios y personales del Banco Sabadell, confirmando oficialmente que la deuda ha sido saldada para poder liberar las garantías registrales.</p>
            </div>

            <h4>Cómo ingresar (Flujo de Acceso Seguro)</h4>
            <p>El acceso a nuestras herramientas es restringido y seguro. Debes seguir estrictamente este orden de conexión:</p>
            
            <div class="connection-flow">
                <div class="flow-node">
                    <span style="font-size: 1.5rem;">🔒</span>
                    <div class="flow-node-title">Paso 1: VPN</div>
                    <div class="flow-node-desc">Conexión a Madrid con tus credenciales de laptop</div>
                </div>
                <div class="flow-arrow-icon">➔</div>
                <div class="flow-node">
                    <span style="font-size: 1.5rem;">🖥️</span>
                    <div class="flow-node-title">Paso 2: Citrix</div>
                    <div class="flow-node-desc">Iniciar Citrix Workspace seguro</div>
                </div>
                <div class="flow-arrow-icon">➔</div>
                <div class="flow-node">
                    <span style="font-size: 1.5rem;">🚀</span>
                    <div class="flow-node-title">Paso 3: Aplicativos</div>
                    <div class="flow-node-desc">Lanzar SIBIS y el Explorador Windows (Keren)</div>
                </div>
            </div>

            <video controls preload="metadata" width="100%" style="border-radius:8px; margin: 1rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"><source src="src/assets/videos/Formacion_certificados_SCC_1.mp4#t=3,180" type="video/mp4"></video>
            
            <div class="alert-warning" style="margin-top: 1rem;">
                <div class="alert-title">⚠ Atención Crítica</div>
                <p>Sin la conexión VPN de Madrid activa, ninguna aplicación o enlace del flujo funcionará.</p>
            </div>

            <h4 style="margin-top: 2.5rem;">Módulos del Ecosistema</h4>
            <p>Trabajamos diariamente integrando tres herramientas principales:</p>
            
            <div class="info-grid">
                <div class="system-card">
                    <div class="system-card-title">
                        <span>💼</span> Gestión Comercial
                    </div>
                    <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0; line-height: 1.5;">Para revisar los datos del préstamo (importe, situación, titulares y fincas de garantía).</p>
                </div>
                <div class="system-card">
                    <div class="system-card-title">
                        <span>📋</span> Gestión de Trámites
                    </div>
                    <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0; line-height: 1.5;">Para tomar las solicitudes, revisar el Gestor Documental (GD) y finalizar el trámite.</p>
                </div>
                <div class="system-card">
                    <div class="system-card-title">
                        <span>📁</span> Explorador Keren
                    </div>
                    <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0; line-height: 1.5;">Para acceder de forma segura a las plantillas de Word de los modelos de certificados.</p>
                </div>
            </div>

            <h4 style="margin-top: 2.5rem;">Cómo filtrar trámites en Gestión de Trámites (GT)</h4>
            <p>Para localizar solicitudes pendientes, configura los siguientes filtros en la plataforma:</p>
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-sm); margin-bottom: 2rem;">
                <ul style="margin: 0; padding-left: 1.25rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; list-style-type: square;">
                    <li><strong>Oficina Inferior:</strong> 3796 (por defecto)</li>
                    <li><strong>Oficina Superior:</strong> 3813</li>
                    <li><strong>Tipo de trámite:</strong> Solicitud certificado cancelación</li>
                    <li><strong>Resultado:</strong> No finalizados</li>
                    <li><strong>Estado:</strong> Sin asignar</li>
                </ul>
            </div>

            <h4>Tipos de Certificados Disponibles</h4>
            <div class="info-grid">
                <div class="system-card" style="border-left: 3px solid var(--primary-light);">
                    <div class="system-card-title" style="font-size: 1rem;">Unificado / Estándar <span class="highlight-badge info">Común</span></div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.4;">Modelo base para cancelaciones puras (vencimiento, amortización o quita).</p>
                </div>
                <div class="system-card" style="border-left: 3px solid #a855f7;">
                    <div class="system-card-title" style="font-size: 1rem;">No Estándar <span class="highlight-badge info">Especial</span></div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.4;">Modificaciones por extinción de condominio, novación, carta parcial, etc.</p>
                </div>
                <div class="system-card" style="border-left: 3px solid var(--warning);">
                    <div class="system-card-title" style="font-size: 1rem;">Antes del 29/11/2006 <span class="highlight-badge warning">Histórico</span></div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.4;">Sin número de contrato, llevan modelo corto de "saldo cero sin provisión".</p>
                </div>
                <div class="system-card" style="border-left: 3px solid var(--danger);">
                    <div class="system-card-title" style="font-size: 1rem;">Resto de Modelos <span class="highlight-badge danger">Complejo</span></div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.4;">Casos especiales (divisas, créditos, herederos, contenciosos SAOC, etc.).</p>
                </div>
                <div class="system-card" style="border-left: 3px solid var(--success);">
                    <div class="system-card-title" style="font-size: 1rem;">Automáticos <span class="highlight-badge success">Devolución</span></div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.4;">Se generan solos en el sistema. Debemos realizar una devolución directa.</p>
                </div>
            </div>

            <!-- ACORDEÓN PARA ESTADOS DEL TRÁMITE -->
            <details class="content-accordion">
                <summary>📋 Estados del Trámite (Ver Referencia Rápida)</summary>
                <div class="content-accordion-content">
                    <p style="margin-bottom: 1rem;">Usa los estados correctos en la plataforma para mantener la trazabilidad de los trámites:</p>
                    <video controls preload="metadata" width="100%" style="border-radius:8px; margin: 1rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"><source src="src/assets/videos/Formacion_certificados_SCC_1.mp4#t=2746,3428" type="video/mp4"></video>
                    
                    <div style="overflow-x: auto; margin-top: 1rem;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
                            <thead>
                                <tr style="border-bottom: 2px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.02);">
                                    <th style="text-align: left; padding: 0.75rem; font-weight: 600;">Estado</th>
                                    <th style="text-align: left; padding: 0.75rem; font-weight: 600;">Cuándo usarlo / Criterio de uso</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 0.75rem; color: var(--primary-light); font-weight: bold; white-space: nowrap;">En tramitación</td>
                                    <td style="padding: 0.75rem;">Cuando has tomado el trámite para trabajarlo. Evita que otro agente lo tome por error.</td>
                                </tr>
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 0.75rem; color: var(--success); font-weight: bold; white-space: nowrap;">Finalizado</td>
                                    <td style="padding: 0.75rem;">¡Misión cumplida! Realizaste y subiste el certificado correctamente al Gestor Documental (GD).</td>
                                </tr>
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 0.75rem; color: var(--success); font-weight: bold; white-space: nowrap;">Finalizado coincidencias</td>
                                    <td style="padding: 0.75rem;">SAOC (contencioso) ya resolvió el caso y nos envió el certificado para adjuntar.</td>
                                </tr>
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 0.75rem; color: var(--danger); font-weight: bold; white-space: nowrap;">Devolución directa</td>
                                    <td style="padding: 0.75rem;">Rechazo automático: El préstamo ya tiene certificado automático, es un duplicado o sigue activo.</td>
                                </tr>
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 0.75rem; color: var(--danger); font-weight: bold; white-space: nowrap;">Devolución oficina</td>
                                    <td style="padding: 0.75rem;">La oficina ignoró tus consultas por 6 días hábiles. Al 7.º día se devuelve irrevocablemente.</td>
                                </tr>
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 0.75rem; color: var(--warning); font-weight: bold; white-space: nowrap;">Pendiente de datos</td>
                                    <td style="padding: 0.75rem;">La pelota está en la cancha de la oficina. Estás esperando que te envíen documentos o aclaren dudas.</td>
                                </tr>
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 0.75rem; color: var(--warning); font-weight: bold; white-space: nowrap;">Pendiente CCC</td>
                                    <td style="padding: 0.75rem;">Consulta interna en proceso. Estás esperando respuesta de SAOC (contencioso) o Garantías.</td>
                                </tr>
                                <tr>
                                    <td style="padding: 0.75rem; color: var(--warning); font-weight: bold; white-space: nowrap;">Provisional con incidencias</td>
                                    <td style="padding: 0.75rem;">Consulta de "fuerza mayor" al equipo interno del banco.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </details>

            <h4 style="margin-top: 2.5rem;">Tiempos de Resolución y Acuerdos de Nivel de Servicio (SLA)</h4>
            <ul>
                <li>El tiempo de resolución esperado para un certificado estándar es de <strong>10 a 30 minutos</strong> (máximo 1 hora para nuevos agentes).</li>
                <li>Si la oficina no responde tus consultas de datos, el trámite se mantendrá en espera <strong>6 días hábiles</strong>. A primera hora del día 7, se procesa la "Devolución oficina".</li>
            </ul>

            <div class="alert-attention" style="margin-top: 1.5rem;">
                <div class="alert-title">🚨 Clientes Prioritarios (CP) - SLA de Atención VIP</div>
                <p>Los trámites marcados como <strong>Cliente Prioritario (CP)</strong> tienen prioridad absoluta. Deben ser resueltos y finalizados en <strong>menos de 10 minutos</strong>, deteniendo cualquier otra actividad.</p>
                <video controls preload="metadata" width="100%" style="border-radius:8px; margin: 1rem 0 0 0; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"><source src="src/assets/videos/Formacion_certificados_SCC_1.mp4#t=3428,3725" type="video/mp4"></video>
            </div>

            <!-- ACORDEÓN PARA LAS ENTIDADES ABSORBIDAS -->
            <details class="content-accordion">
                <summary>🏢 Entidades Absorbidas por Banco Sabadell (Ver Lista de las 21 Entidades)</summary>
                <div class="content-accordion-content">
                    <p style="margin-bottom: 1.25rem;">Es muy común recibir solicitudes o encontrar escrituras antiguas a nombre de bancos que hoy en día forman parte del Banco Sabadell. Trataremos estas solicitudes de manera estándar, sin requerir trámites adicionales de subrogación:</p>
                    <div class="alert-note" style="margin-top: 0;">
                        <div class="alert-title">Regla Operativa</div>
                        <p>Si la hipoteca original está a nombre de cualquiera de las siguientes entidades, <strong>procede normalmente</strong> con la cancelación.</p>
                    </div>
                    <div style="column-count: 2; column-gap: 20px; font-size: 0.9em; background-color: rgba(255, 255, 255, 0.03); padding: 15px; border-radius: 6px; border: 1px solid var(--border-color);">
                        <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                            <li>Caja de Ahorros del Mediterráneo (CAM)</li>
                            <li>Caixa D'Estalvis del Penedés</li>
                            <li>Banco Atlántico, S.A.</li>
                            <li>Banco CAM S.A.U.</li>
                            <li>Banco Herrero, S.A.</li>
                            <li>Banco Guipuzcoano, S.A.</li>
                            <li>Banco de Sabadell, S.A.</li>
                            <li>Banco Gallego, S.A.</li>
                            <li>Banco Halifax Hispania, S.A.U (Lloyds)</li>
                            <li>Banco de Asturias, S.A.</li>
                            <li>Banco Natwest España, S.A.</li>
                        </ul>
                        <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
                            <li>Banco Mare Nostrum, S.A. (BMN)</li>
                            <li>LLOYDS TSB BANK PLC</li>
                            <li>Banco Urquijo, S.A.</li>
                            <li>Abbey National Bank, S.A.E.</li>
                            <li>Solbank SBD, S.A.</li>
                            <li>Sabadell Solbank S.A.</li>
                            <li>Bansabadell Hipotecaria, S.A.</li>
                            <li>Bansabadell Hipotecaria E.F.C, S.A.</li>
                            <li>Bansabadell Financiación E.F.C, S.A.</li>
                            <li>BANCO SAN PAOLO S.A</li>
                        </ul>
                    </div>
                </div>
            </details>
        `
    }
    ,
    {
        moduleGroup: "Módulo 0: Introducción al Sistema",
        title: "Auditoría y Emisión",
        tag: "Procesos",
        content: `
            <h3>Auditoría y Emisión de Certificados Bancarios</h3>
            <p style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem;">
                En esta sección aprenderás la <strong>línea de vida de un trámite</strong> y las fases esenciales del proceso de validación, garantizando el cumplimiento de las normativas de confidencialidad y calidad del banco.
            </p>

            <!-- LÍNEA DE VIDA DEL TRÁMITE REDISEÑADA -->
            <div style="margin-top: 1.5rem;">
                
                <!-- FASE 1 -->
                <div class="step-card phase-1">
                    <span class="step-badge phase-1">Fase 1</span>
                    <span class="highlight-badge info">Triaje e Inicio</span>
                    <h4 style="margin: 0.25rem 0 0.75rem 0; color: var(--primary-light); font-size: 1.15rem;">Triaje y Asignación de Solicitudes</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem; line-height: 1.5;">Clasificación y validación preliminar en la plataforma:</p>
                    <ul style="font-size: 0.875rem; padding-left: 1.25rem; color: var(--text-main); margin-bottom: 0; line-height: 1.6;">
                        <li><strong>Asignación Inteligente:</strong> Toma los casos estrictamente <strong>de uno en uno</strong> para proteger tus tiempos de SLA y evitar el vencimiento en cascada de trámites en tu bandeja.</li>
                        <li><strong>Identificación (Regla de Oro):</strong> Si la pestaña de garantías en SIBIS está vacía y en el Gestor Documental (GD) solo visualizas una póliza comercial, se trata de un <u>préstamo no hipotecario</u> (personal).</li>
                        <li><strong>Control de Plazos:</strong> Si un caso requiere datos y el estado está en "Pendiente de datos" por <strong>6 días hábiles</strong>, procede a cerrarlo por "Devolución oficina" a primera hora del día 7 de forma irrevocable.</li>
                        <li><strong>Gestión de Dudas:</strong> Utiliza siempre el canal oficial de <strong>BSOS</strong> para solicitar documentos faltantes o aclaraciones a la oficina emisora.</li>
                    </ul>
                </div>

                <!-- FASE 2 -->
                <div class="step-card phase-2">
                    <span class="step-badge phase-2">Fase 2</span>
                    <span class="highlight-badge info" style="background: rgba(168, 85, 247, 0.15); color: #c084fc;">LOPD</span>
                    <h4 style="margin: 0.25rem 0 0.75rem 0; color: #c084fc; font-size: 1.15rem;">Confidencialidad y Vínculos Legales</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem; line-height: 1.5;">Garantizar el cumplimiento de normativas vigentes y privacidad de datos:</p>
                    <ul style="font-size: 0.875rem; padding-left: 1.25rem; color: var(--text-main); margin-bottom: 0; line-height: 1.6;">
                        <li><strong>Validación de Vínculos Legales:</strong> Rastrea de forma exhaustiva en SIBIS (pestaña Vínculos) y en la escritura aportada si existen préstamos origen vinculados o relacionados en el historial del contrato.</li>
                        <li><strong>Protección de Datos (Reglamento LOPD):</strong> Si por causa de una compraventa previa o una extinción de condominio ya no existe un vínculo legal con un titular anterior, <strong>evita incluir información o nombres de esa persona física</strong> en el nuevo certificado de deuda cero que estás generando.</li>
                    </ul>
                </div>

                <!-- FASE 3 -->
                <div class="step-card phase-3">
                    <span class="step-badge phase-3">Fase 3</span>
                    <span class="highlight-badge warning">Prueba de Fuego</span>
                    <h4 style="margin: 0.25rem 0 0.75rem 0; color: var(--warning); font-size: 1.15rem;">Lectura Estratégica de Escrituras</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem; line-height: 1.5;">Técnica de lectura rápida para optimizar la velocidad en expedientes extensos:</p>
                    <ul style="font-size: 0.875rem; padding-left: 1.25rem; color: var(--text-main); margin-bottom: 0; line-height: 1.6;">
                        <li><strong>El Salto Estratégico:</strong> No leas el documento hoja por hoja. Dirígete de inmediato hacia la <strong>séptima u octava cláusula de la escritura</strong> (comúnmente entre las páginas 15 y 18).</li>
                        <li><strong>Palabras Clave:</strong> Escanea visualmente la página buscando palabras clave como "hipoteca", "carga" o "responsabilidad hipotecaria".</li>
                        <li><strong>Límite de Búsqueda:</strong> Detén la lectura tan pronto como ubiques la "cláusula de amortización". El importe oficial que debes validar se encuentra siempre redactado en los párrafos inmediatamente anteriores a esta cláusula.</li>
                    </ul>
                </div>

                <!-- FASE 4 -->
                <div class="step-card phase-4">
                    <span class="step-badge phase-4">Fase 4</span>
                    <span class="highlight-badge success">Calidad</span>
                    <h4 style="margin: 0.25rem 0 0.75rem 0; color: var(--success); font-size: 1.15rem;">Cierre del Trámite, Calidad y Estética</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem; line-height: 1.5;">Formato profesional y finalización en el aplicativo:</p>
                    <ul style="font-size: 0.875rem; padding-left: 1.25rem; color: var(--text-main); margin-bottom: 0; line-height: 1.6;">
                        <li><strong>Ceros a la Izquierda:</strong> Si vas a tipear datos numéricos manualmente, elimina siempre los ceros a la izquierda (ej. cambiar "010.01" a "10.01") para copiar de manera idéntica al formato oficial de la nota simple.</li>
                        <li><strong>Estética Profesional:</strong> Asegúrate de que el tamaño de la firma digital mantenga la proporción y ancho exactos del bloque del nombre del banco, logrando una presentación corporativa limpia y profesional.</li>
                    </ul>
                </div>
            </div>
        `,
    },
{
        moduleGroup: "Módulo 1: Modelo UNIFICADO",
        title: "1.1 Certificado Estándar",
        tag: "Lección 1",
        content: `
            <h3>Guía Interactiva: Emisión del Certificado Unificado / Estándar</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>14 minutos</strong> en condiciones normales (sin incidencias de contencioso ni documentación incompleta).</p></div>
            <p><strong>El Corazón del Sistema SCC</strong> — Esta es la operativa más común que realizarás en tu día a día. Aquí aprenderemos el paso a paso definitivo para tramitar un certificado de cancelación cuando el préstamo no tiene complicaciones especiales.</p>
            <p><em>Basado en sesiones de expertiz internas.</em></p>

            <div class="alert-note">
                <div class="alert-title">Sistemas involucrados</div>
                <p>SIBIS (Gestión Comercial › Contrato Datos Básicos), Gestión de Trámites (GT), Gestor Documental (GD), Keren (explorador de plantillas).</p>
            </div>
            <div class="alert-important">
                <div class="alert-title">Documentos requeridos antes de empezar</div>
                <p>① Plantilla de solicitud — ② Nota simple o Escritura original.</p>
                <p>Verifica en GD que ambos estén adjuntos <strong>antes</strong> de avanzar a la validación en SIBIS.</p>
            </div>

            <video controls preload="metadata" width="100%" style="border-radius:8px; margin: 1rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"><source src="src/assets/videos/Formacion_certificados_SCC_1.mp4#t=910,2109" type="video/mp4"></video>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <div style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 2rem; text-align: center; font-weight: 500; letter-spacing: 2px;">[ INICIO DEL TRÁMITE ]</div>

<div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin-bottom: 1rem;">↓</div>

<h4>PARTE 1 — A LA CAZA DEL TRÁMITE (Asignación)</h4>
            <p>Ya en el sistema, vamos a buscar nuestro primer caso de estudio.</p>
            <ol start="1">
                <li><strong>Filtrado de Solicitudes:</strong> En Gestión de Trámites, usa los filtros clave: Oficina 3796 (inferior) y 3813 (superior), Tipo «Solicitud de certificado de cancelación», Resultado «No finalizados» y Estado «Sin asignar».<br>
                <div class="alert-attention"><div class="alert-title">⚠ Regla de Oro Prioritaria</div><p>Antes de tomar un trámite nuevo, revisa tu bandeja de «Pendiente de datos». Si la oficina ya respondió a una duda que tenías, ¡esos trámites urgen y van primero!</p></div></li>
                <li><strong>Toma de Posesión:</strong> Selecciona un trámite y pásalo a estado «En tramitación». A partir de aquí, trabaja siempre entrando por el botón «Detalle» para evitar manchar el historial del trámite.<br>
                <div class="alert-important"><div class="alert-title">✔ Tiempos</div><p>Tómate entre 10 y 30 minutos por trámite. Si es un <strong>Cliente Prioritario (CP)</strong>, ¡el cronómetro baja a menos de 10 minutos!</p></div></li>
            </ol>
            
                <p>Próximamente: Video de Asignación y Filtrado de Trámites</p>
            </div>

            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>

<h4>PARTE 2 — MODO DETECTIVE (Validación del Préstamo)</h4>
            <p>Aquí es donde tu ojo analítico brilla. Validaremos que la información sea correcta antes de firmar nada.</p>
            <ol start="3">
                <li><strong>Inspección del Gestor Documental (GD):</strong> Entra al GD y revisa qué te mandó la oficina (plantilla, nota simple, escritura). Ordena por fecha para ver lo más reciente.<br>
                <div class="alert-attention"><div class="alert-title">⚠ Cuidado con los Duplicados</div><p>Si ya hay un certificado hecho por otro compañero, valídalo. Si está bien, se hace una devolución directa por duplicado. Si está mal, toca rehacerlo.</p></div></li>
                <li><strong>Análisis de la Situación en SIBIS:</strong> Busca el préstamo (que empieza con 807). Si dice "Cancelado por amortización anticipada", "vencimiento" o "quita" → ¡Luz verde! Vamos con el modelo estándar.<br>
                <div class="alert-warning"><div class="alert-title">🛑 Alto Ahí</div><p>Si dice "CANCELADO POR DACIÓN", esto requiere consultar al departamento SAOC.</p></div></li>
                <li><strong>Revisión de Garantías (Fincas):</strong> En la pestaña Garantías, revisa si el préstamo tiene más de una finca y confirma que esté totalmente cancelado. Si el préstamo sigue activo y solo cancelaron una finca, pregunta a la oficina qué necesitan exactamente.</li>
            </ol>
            
                <p>Próximamente: Video de Validación en Gestor Documental y SIBIS</p>
            </div>

            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>

<h4>PARTE 3 — ELIGIENDO EL MOLDE CORRECTO</h4>
            <p>Dependiendo de nuestra investigación, elegiremos la plantilla de Word adecuada.</p>
            <ol start="6">
                <li><strong>Confirmación del Modelo Unificado:</strong> Revisa la solicitud de la oficina. Si NO mencionan herederos, apoderados, divisas, ni situaciones raras, y el contrato empieza con 807 → ¡Bingo! Es un certificado Estándar.<br>
                <div class="alert-note"><div class="alert-title">ⓘ Nota Histórica</div><p>Si el préstamo es muy antiguo (antes del 29/11/2006) y no tiene número de contrato, se usa un modelo especial más corto llamado "saldo cero sin provisión".</p></div></li>
            </ol>
            
                <p>Próximamente: Cómo identificar el Modelo Unificado correcto</p>
            </div>

            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>

<h4>PARTE 4 — CREACIÓN DEL DOCUMENTO OFICIAL</h4>
            <p>Llegó el momento de redactar el certificado. ¡Mucho cuidado con los "copiar y pegar"!</p>
            <ol start="7">
                <li><strong>Apertura de la Plantilla:</strong> Ve al explorador Windows (Keren), navega a la carpeta de <em>Modelos de cancelación → SSCC → Certificado cancelación unificado</em>. Haz una copia del archivo y ponle el número de préstamo como nombre.</li>
                <li><strong>Llenado de Datos:</strong> Completa todos los campos sombreados. Utiliza los datos de la escritura o la nota simple. <strong style="color: var(--warning);">¡La escritura SIEMPRE manda sobre lo que diga SIBIS!</strong>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>Importe prestado:</strong> extráelo de la pestaña <em>Garantías</em> en SIBIS, <u>no</u> del campo "Importe Principal" aunque difieran — siempre prevalece el de Garantías.</li>
                        <li><strong>Fecha firma escritura:</strong> obtenerla desde SIBIS o directamente de la Escritura.</li>
                        <li><strong>Prestatarios:</strong> extraer desde SIBIS (Vínculos) y confirmar con la Escritura.</li>
                        <li><strong>Número de finca, Registro de Propiedad y fecha de cancelación:</strong> copiar exactamente como figuran en la Nota Simple (sin omitir ceros).</li>
                        <li><strong>Campo "a petición de":</strong> colocar al solicitante que figura en GT (siempre una persona física, nunca una empresa).</li>
                    </ul>
                </li>
                <li><strong>Opciones Adicionales:</strong> Si en la historia del préstamo hubo una novación (cambio de condiciones) o una ampliación, añade esa cláusula. Si fue un préstamo normal, déjalo como un "Estándar Puro".</li>
                <li><strong>Firma y Guardado:</strong> Firma digitalmente el documento y guárdalo en tu carpeta personal "U738XXX" dentro de Keren.</li>
            </ol>
            
                <p>Próximamente: Llenado paso a paso de la Plantilla Word en Keren</p>
            </div>

            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>

<h4>PARTE 5 — CIERRE CON BROCHE DE ORO</h4>
            <p>El documento está listo. Solo falta entregarlo y registrar nuestro trabajo.</p>
            <ol start="11">
                <li><strong>Subida al GD:</strong> Sube tu certificado firmado al Gestor Documental del trámite. La oficina lo verá allí mágicamente.</li>
                <li><strong>Finalización en el Sistema:</strong> Cambia el subtipo de operación a "Hipoteca ESTÁNDAR" (o "NO ESTÁNDAR" si usaste opciones adicionales). Pon el trámite en estado «Finalizado» y agrega la coletilla de cierre de rigor.</li>
                <li><strong>Registro de Control:</strong> Anota el trámite en tu Excel personal de seguimiento. Píntalo de verde si lo finalizaste. Si abriste una consulta a SAOC, ¡guarda el número de ticket como si fuera tu vida! Te servirá para rastrearlo si desaparece.</li>
            </ol>
            
                <p>Próximamente: Cierre del Trámite en el Sistema y Registro en Excel</p>
            </div>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2.5rem 0;">

            <div class="alert-warning">
                <div class="alert-title">Errores comunes a evitar</div>
                <ul>
                    <li>Escribir "entre otras" en el certificado cuando el préstamo tiene <strong>solo una finca</strong> — es un error de auditoría.</li>
                    <li>Omitir ceros en el importe o en el número de finca — se copia <strong>exactamente</strong> como aparece en la Nota Simple.</li>
                    <li>Poner como solicitante en "a petición de" a una empresa — <strong>siempre debe ser una persona física</strong> (el administrador, si aplica).</li>
                    <li>Usar el importe del campo "Principal" en SIBIS si difiere del que figura en Garantías — <strong>siempre prevalece el de Garantías</strong>.</li>
                </ul>
            </div>

        `,
        checkpoints: [
            {
            question: "¿Qué modelo de certificado oficial se emplea para una Solicitud de Certificado de Cancelación (SCC) Estándar y en qué portal se validan las firmas electrónicas?",
            options: [
                { text: "Modelo ME-4328 y se valida en SIBIS.", correct: false },
                { text: "Modelo ME-4329 y se valida en el portal VALIDe.", correct: true },
                { text: "Modelo ME-5325 y se valida presencialmente.", correct: false },
                { text: "Modelo ME-4850 y se valida en CertiPress.", correct: false }
            ]
        }
            ,
            {
                question: "¿Qué herramienta principal se utiliza para comprobar los números de préstamo y saldos?",
                options: [
                    { text: "SIBIS", correct: true },
                    { text: "Portal VALIDe", correct: false },
                    { text: "Gestor Documental (GD)", correct: false },
                    { text: "CertiPress", correct: false }
                ]
            },
            {
                question: "¿Qué portal se debe usar para validar una firma electrónica del cliente?",
                options: [
                    { text: "Portal VALIDe", correct: true },
                    { text: "SIBIS", correct: false },
                    { text: "SARA", correct: false },
                    { text: "SAOC", correct: false }
                ]
            },
            {
                question: "¿Qué departamento autoriza las excepciones de cancelaciones complejas o de una sola finca?",
                options: [
                    { text: "Dirección de Riesgos", correct: true },
                    { text: "SAOC", correct: false },
                    { text: "Atención al Cliente", correct: false },
                    { text: "Gestoría", correct: false }
                ]
            },
            {
                question: "¿Cómo se llama el archivo central de documentos donde encontramos la plantilla y escrituras?",
                options: [
                    { text: "Gestor Documental (GD)", correct: true },
                    { text: "SIBIS", correct: false },
                    { text: "Archivo Físico", correct: false },
                    { text: "VALIDe", correct: false }
                ]
            },
            {
                question: "¿Qué estado se debe asignar en el gestor si falta información o autorización?",
                options: [
                    { text: "Pendiente de Datos", correct: true },
                    { text: "Devolución Directa", correct: false },
                    { text: "Finalizado", correct: false },
                    { text: "Pendiente de SS.CC.", correct: false }
                ]
            },
            {
                question: "¿Cuál es el modelo oficial estándar general para una Solicitud de Certificado de Cancelación (SCC)?",
                options: [
                    { text: "ME-4329", correct: true },
                    { text: "ME-4328", correct: false },
                    { text: "ME-5325", correct: false },
                    { text: "ME-4286", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 1: Modelo UNIFICADO",
        title: "1.2 Certificado NO Estándar",
        tag: "Lección 2",
        content: `
            <h3>Certificado NO Estándar</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>19 minutos</strong> en condiciones normales (puede aumentar si hay múltiples modificaciones contractuales).</p></div>
            <p>Se utiliza cuando el préstamo ha sufrido alteraciones durante su vida útil (cambio de numeración, extinción de condominio, ampliación de capital o carta parcial de pago).</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong></li>
                <li><strong>Gestión de Trámites (GT)</strong></li>
                <li><strong>Gestor Documental (GD)</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Nota simple.</li>
                <li>Escritura original.</li>
                <li>Escritura de modificación, ampliación o cancelación parcial.</li>
                <li>Sentencia de divorcio / Escritura de extinción de condominio (si aplica).</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Identificación de modificaciones</h4>
            <ol>
                <li>Al revisar <strong>SIBIS</strong> (Préstamos relacionados) o la Escritura, identificar si existen cambios contractuales o variaciones de capital.</li>
                <li>Determinar qué opción del modelo unificado se utilizará:
                    <ul>
                        <li><em>Opción 1:</em> Cambio de numeración.</li>
                        <li><em>Opción 2:</em> Extinción de condominio (divorcio/separación).</li>
                        <li><em>Opción 3:</em> Novación de hipoteca (Ampliación o Carta parcial de pago).</li>
                    </ul>
                </li>
            </ol>

            <h4>Fase 2: Redacción cronológica</h4>
            <ol>
                <li>Completar el primer párrafo con los datos del préstamo origen.</li>
                <li>Añadir los eventos utilizando las opciones correspondientes en <strong>orden estricto de fechas</strong> (ej. primero el origen en 2009, luego una carta parcial en 2014, luego un cambio de numeración en 2016).</li>
                <li>Restar o sumar los importes si hay carta parcial de pago o ampliación, verificando que cuadre con el importe final de SIBIS o la Escritura.</li>
            </ol>

            <h4>Fase 3: Finalización</h4>
            <ol>
                <li>Subir a GD y cambiar el subtipo a <strong>"Hipoteca no estándar"</strong>.</li>
                <li>Marcar como <strong>"Finalizado"</strong>.</li>
            </ol>

            <div class="alert-attention"><div class="alert-title">⚠ Importante / SLA</div><p>Es mandatorio que los hitos se relaten de manera <strong>cronológica</strong> en el certificado.</p></div>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Informar sobre <strong>titulares antiguos</strong> después de una extinción de condominio en los párrafos finales.</li>
                <li>Extraer el motivo del cambio contractual al azar (debe sacarse explícitamente de <strong>SIBIS › Motivo</strong>).</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Cuándo se debe utilizar el Certificado NO Estándar en lugar del Estándar?",
                options: [
                    { text: "Cuando el préstamo es inferior a 5.000 euros.", correct: false },
                    { text: "Cuando la hipoteca tiene más de 5 años de antigüedad.", correct: false },
                    { text: "Cuando el préstamo ha sufrido alteraciones como extinción de condominio, novaciones o ampliaciones de capital.", correct: true },
                    { text: "Cuando lo pide la Notaría.", correct: false }
                ]
            },
            {
                question: "¿En qué orden deben relatarse los hitos en el Certificado NO Estándar?",
                options: [
                    { text: "Por importancia económica, de mayor a menor importe.", correct: false },
                    { text: "En orden estricto cronológico (por fechas).", correct: true },
                    { text: "Primero la cancelación, luego las modificaciones anteriores.", correct: false },
                    { text: "El orden no importa mientras estén todos los hitos.", correct: false }
                ]
            },
            {
                question: "¿Qué Opción del modelo unificado corresponde a una Extinción de Condominio (divorcio/separación)?",
                options: [
                    { text: "Opción 1", correct: false },
                    { text: "Opción 2", correct: true },
                    { text: "Opción 3", correct: false },
                    { text: "No hay opción específica para ese caso.", correct: false }
                ]
            },
            {
                question: "Al tramitar un NO Estándar, ¿dónde se consulta explícitamente el motivo del cambio contractual?",
                options: [
                    { text: "En el correo de la oficina solicitante.", correct: false },
                    { text: "En SIBIS › Motivo.", correct: true },
                    { text: "En el Gestor Documental (GD).", correct: false },
                    { text: "En la nota simple del Registro.", correct: false }
                ]
            },
            {
                question: "¿Qué subtipo se debe seleccionar al finalizar un Certificado NO Estándar?",
                options: [
                    { text: "Hipoteca estándar", correct: false },
                    { text: "Hipoteca no estándar", correct: true },
                    { text: "Cancelación parcial", correct: false },
                    { text: "Pendiente de datos", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 2: Certificados AUTOMÁTICOS",
        title: "2.1 Certificados Automáticos",
        tag: "Lección 3",
        content: `
            <h3>Certificados Automáticos</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>8 minutos</strong> (verificación en SIBIS y gestión de devolución directa).</p></div>
            <p>Certificados que el banco ya ha generado de manera sistémica y automática, por lo que <strong>no requieren elaboración manual</strong>.</p>
            <div class="alert-note"><div class="alert-title">ℹ Nota importante</div><p>Las empresas <strong>nunca</strong> tienen certificado automático.</p></div>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong> (Operatoria básica)</li>
            </ul>

            <h4>Documentos requeridos</h4>
            <p>Ninguno.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Comprobación</h4>
            <ol>
                <li>En SIBIS, ir a <strong>"Cancelación iniciativa"</strong> y presionar <strong>F9</strong> en el solicitante.</li>
                <li>Si aparece una ventana emergente pequeña que dice <em>"firma digital"</em> o <em>"alta manual de trámites"</em> te bloquea con el automático, significa que el sistema ya lo generó.</li>
            </ol>

            <h4>Fase 2: Devolución</h4>
            <ol>
                <li>Abandonar el trámite (no realizar el certificado manual).</li>
                <li>Marcar el estado como <strong>"Devolución directa"</strong>.</li>
                <li>Pegar la coletilla establecida: <em>"El certificado solicitado pueden obtenerlo a través de operatoria básica, fijar cuenta, situación, contrato, certificado. Si no fuese posible, por favor adjuntar captura..."</em></li>
            </ol>

            <div class="alert-attention"><div class="alert-title">⚠ Importante / SLA</div><p>No inviertas tiempo revisando escrituras si el préstamo tiene automático. Toma entre <strong>3 y 4 minutos</strong> validar y devolver.</p></div>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Elaborar el certificado manualmente, duplicando el trabajo del sistema.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Qué tipo de entidad NUNCA puede tener un certificado automático?",
                options: [
                    { text: "Personas físicas con hipoteca personal.", correct: false },
                    { text: "Titulares con préstamos cancelados por vencimiento.", correct: false },
                    { text: "Empresas.", correct: true },
                    { text: "Clientes con más de un préstamo.", correct: false }
                ]
            },
            {
                question: "¿En qué estado debe quedar el trámite en GT si detectamos que el certificado ya existe como automático?",
                options: [
                    { text: "En Tramitación.", correct: false },
                    { text: "Finalizado con incidencias.", correct: false },
                    { text: "Devolución Directa.", correct: true },
                    { text: "Pendiente de datos.", correct: false }
                ]
            },
            {
                question: "¿Qué ruta se debe seguir en SIBIS para comprobar si existe un certificado automático?",
                options: [
                    { text: "Préstamos relacionados → Ver historial.", correct: false },
                    { text: "Cancelación iniciativa → F9 en el solicitante.", correct: true },
                    { text: "Gestor Documental → Buscar certificado.", correct: false },
                    { text: "Operatoria básica → Consulta de saldo.", correct: false }
                ]
            },
            {
                question: "¿Cuánto tiempo aproximado debe tomar gestionar un trámite con certificado automático?",
                options: [
                    { text: "Entre 10 y 30 minutos.", correct: false },
                    { text: "Máximo 1 hora.", correct: false },
                    { text: "Entre 3 y 4 minutos.", correct: true },
                    { text: "El mismo tiempo que un certificado estándar.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 3: ANTES DEL 28/11/2006",
        title: "3.1 Préstamos anteriores a 2006",
        tag: "Lección 4",
        content: `
            <h3>Préstamos cancelados antes de 2006 (con correo de CertiPress)</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>15 minutos</strong> — siempre que el correo de CertiPress esté disponible en GD. Si hay que abrir canal BSOS el SLA se extiende.</p></div>
            <p>Modelo conocido como <strong>"Saldo Cero"</strong> o <strong>"2006"</strong>. Aplica a préstamos muy antiguos que, por lo general, no poseen un número de contrato grabado en el sistema (no hay 807).</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong> (sin acceso a datos)</li>
                <li><strong>Gestión de Trámites (GT)</strong></li>
                <li><strong>Gestor Documental (GD)</strong></li>
                <li><strong>CertiPress</strong></li>
                <li><strong>BSOS</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Nota simple.</li>
                <li>Correo de respuesta de CertiPress (obligatorio).</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Validación de CertiPress</h4>
            <ol>
                <li>Verificar en GD que esté el correo de CertiPress confirmando que la hipoteca fue cancelada antes de 2006.</li>
                <li>Si no hay correo de CertiPress ni número de contrato, abrir canal <strong>BSOS</strong> a la oficina solicitando la información. Dejar en estado <strong>"Pendiente de datos"</strong>.</li>
            </ol>

            <h4>Fase 2: Confección del certificado</h4>
            <ol>
                <li>Seleccionar el modelo <strong>"Saldo cero anteriores a noviembre 2006"</strong>.</li>
                <li>Extraer de la <strong>Nota Simple</strong>: fecha de concesión, importe, número de finca y registro de propiedad.</li>
                <li>Extraer del <strong>correo de CertiPress</strong>: la fecha exacta de cancelación.</li>
                <li>Si el número de finca no está numerado en la nota (ej. <em>"Registro de Orihuela"</em>), colocar un <strong>"1"</strong>.</li>
            </ol>

            <h4>Fase 3: Finalización</h4>
            <ol>
                <li>Subir el PDF directamente al trámite (GT), ya que <strong>no hay carpeta del préstamo en GD</strong>.</li>
                <li>Subtipo: <strong>"Por cancelación 2006"</strong> o <strong>"Resto de modelos"</strong>.</li>
            </ol>

            <div class="alert-attention"><div class="alert-title">⚠ Importante / SLA</div><p>Si se solicitan documentos por BSOS, se debe esperar <strong>6 días hábiles</strong>. Al 7.º día hábil sin respuesta, se marca como <strong>"Devolución oficina"</strong> y se cierra el trámite.</p></div>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Confiar en el número de finca que escribe CertiPress en el correo; pueden equivocarse. El número de finca válido <strong>SIEMPRE</strong> es el de la Nota Simple.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Cómo se conoce coloquialmente el modelo utilizado para préstamos cancelados antes de noviembre de 2006?",
                options: [
                    { text: "Modelo Estándar.", correct: false },
                    { text: "Saldo Cero o 2006.", correct: true },
                    { text: "Modelo de Entidades Absorbidas.", correct: false },
                    { text: "Certificado CertiPress.", correct: false }
                ]
            },
            {
                question: "Si no hay correo de CertiPress adjunto, ¿qué acción se toma?",
                options: [
                    { text: "Elaborar el certificado con los datos de SIBIS.", correct: false },
                    { text: "Hacer devolución directa inmediatamente.", correct: false },
                    { text: "Abrir canal BSOS a la oficina y dejar en estado 'Pendiente de datos'.", correct: true },
                    { text: "Consultar a SAOC para que emitan ellos el certificado.", correct: false }
                ]
            },
            {
                question: "¿Cuántos días hábiles tiene la oficina para responder antes de que se marque como 'Devolución oficina'?",
                options: [
                    { text: "3 días hábiles.", correct: false },
                    { text: "6 días hábiles.", correct: true },
                    { text: "10 días hábiles.", correct: false },
                    { text: "30 días naturales.", correct: false }
                ]
            },
            {
                question: "¿Qué dato del correo de CertiPress se extrae para confeccionar el certificado?",
                options: [
                    { text: "El número de finca registral.", correct: false },
                    { text: "El importe original del préstamo.", correct: false },
                    { text: "La fecha exacta de cancelación.", correct: true },
                    { text: "El nombre del titular actual.", correct: false }
                ]
            },
            {
                question: "¿Cuál es la fuente fiable del número de finca, especialmente si CertiPress lo informa diferente?",
                options: [
                    { text: "El correo de CertiPress.", correct: false },
                    { text: "La Nota Simple del Registro.", correct: true },
                    { text: "Los datos de SIBIS.", correct: false },
                    { text: "La plantilla enviada por la oficina.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 4: Préstamos No Hipotecarios",
        title: "4.1 Pólizas",
        tag: "Lección 5",
        content: `
            <h3>Certificados de cancelación de préstamos no hipotecarios</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>15 minutos</strong> en condiciones normales (sin necesidad de consulta BSOS por empresa/administrador).</p></div>
            <p>Préstamos o créditos que <strong>no cuentan con una garantía hipotecaria física</strong> (vivienda, local, etc.). En lugar de una escritura, poseen una <strong>"Póliza"</strong>.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong></li>
                <li><strong>Gestión de Trámites (GT)</strong></li>
                <li><strong>Gestor Documental (GD)</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Póliza de préstamo.</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Verificación de garantías</h4>
            <ol>
                <li>En SIBIS (<strong>Contrato › Datos básicos</strong>), entrar a <strong>"Garantías"</strong>. Verificar que la pantalla sale en blanco (no hay hipoteca grabada).</li>
                <li>En GD, comprobar que el documento adjunto sea una <strong>"Póliza"</strong>.</li>
            </ol>

            <h4>Fase 2: Llenado del documento</h4>
            <ol>
                <li>Usar el modelo <strong>"Préstamos no hipotecarios (Cancelación)"</strong>.</li>
                <li>Obtener los titulares desde <strong>SIBIS › Vínculos</strong>.</li>
                <li>Escribir el <strong>"Título de la póliza"</strong> copiando el texto exacto desde SIBIS (ej. <em>"Préstamo canal online"</em>).</li>
                <li>Tomar la <strong>"fecha firma original"</strong> (o fecha de vigencia) desde SIBIS.</li>
                <li>Eliminar el párrafo de <strong>"aval"</strong> del modelo, a menos que la oficina lo haya solicitado explícitamente en la plantilla.</li>
            </ol>

            <h4>Fase 3: Finalización</h4>
            <ol>
                <li>Estado <strong>"Finalizado"</strong>, subtipo <strong>"PH no hipotecario"</strong> / <strong>"Resto de modelos"</strong>.</li>
            </ol>

            <div class="alert-attention"><div class="alert-title">⚠ Importante / SLA</div><p>Si el titular es una empresa y no se especifica quién es la persona física solicitante, ir a <strong>Vínculos › Estructura</strong> y colocar al <strong>primer administrador</strong> que aparezca.</p></div>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Inventar el título del préstamo o copiar uno erróneo de la plantilla. Siempre usar el que dicta <strong>SIBIS</strong>.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Cuál es la principal diferencia de un préstamo no hipotecario frente a uno hipotecario?",
                options: [
                    { text: "No tiene titulares ni vínculos en SIBIS.", correct: false },
                    { text: "En lugar de escritura, tiene una Póliza y no hay garantía física grabada.", correct: true },
                    { text: "Su importe siempre es inferior a 10.000 €.", correct: false },
                    { text: "Nunca puede ser emitido por el sistema automáticamente.", correct: false }
                ]
            },
            {
                question: "¿Cómo se confirma en SIBIS que un préstamo NO tiene garantía hipotecaria?",
                options: [
                    { text: "Verificando que el saldo en Datos Básicos sea cero.", correct: false },
                    { text: "Comprobando que la pantalla de Garantías sale completamente en blanco.", correct: true },
                    { text: "Revisando que el tipo de contrato sea 'personal'.", correct: false },
                    { text: "Preguntando a la oficina si es hipotecario.", correct: false }
                ]
            },
            {
                question: "¿De dónde se debe copiar el título de la póliza para rellenar el certificado?",
                options: [
                    { text: "De la plantilla enviada por la oficina.", correct: false },
                    { text: "Del Gestor Documental (GD).", correct: false },
                    { text: "Del texto exacto que aparece en SIBIS.", correct: true },
                    { text: "De la nota simple del Registro.", correct: false }
                ]
            },
            {
                question: "Si el titular del préstamo no hipotecario es una empresa, ¿a quién se pone como solicitante en el certificado?",
                options: [
                    { text: "A nombre de la propia empresa.", correct: false },
                    { text: "Al primer administrador que figure en SIBIS › Vínculos › Estructura.", correct: true },
                    { text: "Al director de la oficina solicitante.", correct: false },
                    { text: "A cualquier persona física vinculada al contrato.", correct: false }
                ]
            },
            {
                question: "¿En qué caso se mantiene el párrafo de 'aval' en el modelo de no hipotecario?",
                options: [
                    { text: "Siempre, es obligatorio en todos los casos.", correct: false },
                    { text: "Solo si el importe supera los 50.000 €.", correct: false },
                    { text: "Solo si la oficina lo ha solicitado explícitamente en la plantilla.", correct: true },
                    { text: "Nunca, siempre se elimina.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
        title: "5.1 Hipoteca personal (Línea)",
        tag: "Lección 6",
        content: `
            <h3>Certificado para hipoteca personal (línea)</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>20 minutos</strong> — tiempo incluye verificación de todos los contratos 827 en SIBIS.</p></div>
            <p>Certificados para líneas de crédito que empiezan con el contrato <strong>817</strong> (la "madre") y poseen disposiciones que inician con <strong>827</strong> (los "hijos").</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong></li>
                <li><strong>Gestión de Trámites (GT)</strong></li>
                <li><strong>Gestor Documental (GD)</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Nota simple o Escritura.</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Triaje de línea y disposiciones</h4>
            <ol>
                <li>Si el trámite se abre con un <strong>827</strong>, abandonar esa cuenta y buscar el contrato <strong>817</strong> (origen) en SIBIS.</li>
                <li>Validar que <strong>todas</strong> las disposiciones (los 827) y la línea principal (817) estén en situación <strong>"Cancelado"</strong>.</li>
            </ol>

            <h4>Fase 2: Emisión</h4>
            <ol>
                <li>Usar el modelo <strong>"Hipoteca personal"</strong>.</li>
                <li>Llenar los datos de <strong>"acreditados"</strong> (no prestatarios), importe inicial (garantía) y fecha de cancelación del último contrato cancelado.</li>
                <li>Finalizar como <strong>"Resto de modelos"</strong>.</li>
            </ol>

            <div class="alert-attention"><div class="alert-title">⚠ Importante / SLA</div><p>Si la línea madre (817) sale como <strong>"Incorporado"</strong> pero todas sus disposiciones están canceladas, enviar consulta por <strong>BSOS</strong> a oficina advirtiendo que, si no harán más disposiciones, deben cancelar el límite disponible para emitir el certificado de saldo cero.</p></div>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Emitir el certificado si alguna de las disposiciones (<strong>827</strong>) sigue activa.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Qué número de contrato identifica a la línea 'madre' en una hipoteca personal (línea)?",
                options: [
                    { text: "807", correct: false },
                    { text: "817", correct: true },
                    { text: "827", correct: false },
                    { text: "837", correct: false }
                ]
            },
            {
                question: "Si el trámite llega con un contrato que empieza por 827, ¿cuál es el primer paso?",
                options: [
                    { text: "Emitir el certificado directamente con ese contrato.", correct: false },
                    { text: "Devolver el trámite a la oficina por error.", correct: false },
                    { text: "Abandonar esa cuenta y buscar el contrato 817 (origen) en SIBIS.", correct: true },
                    { text: "Consultar a SAOC antes de continuar.", correct: false }
                ]
            },
            {
                question: "¿Qué condición deben cumplir TODAS las disposiciones (827) para poder emitir el certificado?",
                options: [
                    { text: "Tener saldo pendiente inferior a 1.000 €.", correct: false },
                    { text: "Estar en situación 'Cancelado'.", correct: true },
                    { text: "Haber sido canceladas el mismo día.", correct: false },
                    { text: "Estar reflejadas en la nota simple.", correct: false }
                ]
            },
            {
                question: "¿Qué acción se toma si la línea madre (817) aparece como 'Incorporado' y sus disposiciones están canceladas?",
                options: [
                    { text: "Emitir el certificado igualmente, ya que las disposiciones están canceladas.", correct: false },
                    { text: "Marcar como devolución directa sin más gestión.", correct: false },
                    { text: "Enviar consulta por BSOS a la oficina para que cancelen el límite disponible.", correct: true },
                    { text: "Elevar consulta a SAOC para que resuelvan.", correct: false }
                ]
            },
            {
                question: "¿Qué término se usa en el modelo 'Hipoteca personal' en lugar de 'prestatarios'?",
                options: [
                    { text: "Titulares", correct: false },
                    { text: "Avalistas", correct: false },
                    { text: "Acreditados", correct: true },
                    { text: "Solicitantes", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
        title: "5.2 Cancelación de una sola finca",
        tag: "Lección 7",
        content: `
            <h3>Certificado de cancelación de una sola finca</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>20 minutos</strong> — condicionado a que el Expediente de Riesgo (ER) esté disponible en GD.</p></div>
            <p>Préstamos que tienen múltiples fincas (ej. préstamos Promotor) pero de los cuales solo se va a certificar la cancelación de una en específico, mientras el resto o la cuenta general sigue <strong>"Incorporado"</strong>.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong> (Operatoria Básica › Movimientos)</li>
                <li><strong>Gestión de Trámites (GT)</strong></li>
                <li><strong>Gestor Documental (GD)</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Expediente de Riesgo (ER) o Autorización de Riesgos. <em>(Excepción: No es necesario si es una hipoteca Promotor o si el préstamo general ya está 100% Cancelado).</em></li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Validación del ER</h4>
            <ol>
                <li>Si el préstamo está <strong>"Incorporado"</strong>, revisar el <strong>Expediente de Riesgo</strong> adjunto en GD.</li>
                <li>Confirmar que el analista de riesgos haya escrito frases como: <em>"baja de la garantía finca tal"</em> o <em>"se autoriza cancelación"</em>.</li>
            </ol>

            <h4>Fase 2: Búsqueda del motivo de cancelación</h4>
            <ol>
                <li>Ir a SIBIS (<strong>Operatoria Básica › Consulta movimientos › Operaciones</strong>).</li>
                <li>Localizar el movimiento de <strong>"Cancelación de la finca"</strong>.</li>
                <li>Entrar a <strong>"Detalle"</strong> para ver el importe exacto con el que se canceló esa finca.</li>
            </ol>

            <h4>Fase 3: Llenado del certificado</h4>
            <ol>
                <li>Usar modelo <strong>"Cancelación administrativa respecto a una de las fincas"</strong>.</li>
                <li>Elegir la opción de cancelación correcta en el modelo (ej. <em>"por pago de cuotas hasta vencimiento"</em> o <em>"por amortización anticipada"</em>) según SIBIS, o preguntar a la oficina mediante BSOS si no es claro.</li>
                <li>Indicar el número de finca, su <strong>responsabilidad individual</strong> y la cantidad con la que se liberó.</li>
            </ol>

            <div class="alert-attention"><div class="alert-title">⚠ Importante / SLA</div><p>Si se emite de una sola finca estando el préstamo <strong>"Incorporado"</strong> en SIBIS, y no es promotor, es mandatorio auditar que la <strong>Autorización de Riesgos</strong> esté adjunta.</p></div>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Devolver a la oficina de forma directa solo porque el préstamo dice <strong>"Incorporado"</strong> sin revisar que están pidiendo certificado de una finca específica cancelada.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿En qué caso NO es necesario el Expediente de Riesgo para emitir un certificado de una sola finca?",
                options: [
                    { text: "Cuando el solicitante es un cliente prioritario (CP).", correct: false },
                    { text: "Cuando es una hipoteca Promotor o el préstamo general ya está 100% Cancelado.", correct: true },
                    { text: "Cuando la oficina así lo indica en la plantilla.", correct: false },
                    { text: "Siempre es necesario sin excepción.", correct: false }
                ]
            },
            {
                question: "¿En qué ruta de SIBIS se localiza el importe exacto con el que se canceló una finca específica?",
                options: [
                    { text: "Contrato › Datos Básicos › Situación.", correct: false },
                    { text: "Operatoria Básica › Consulta movimientos › Operaciones › Detalle.", correct: true },
                    { text: "Garantías › Fincas › Histórico.", correct: false },
                    { text: "Gestor Documental › Escritura de cancelación.", correct: false }
                ]
            },
            {
                question: "¿Qué modelo se usa para certificar la cancelación de una sola finca de un préstamo con varias garantías?",
                options: [
                    { text: "Certificado Unificado / Estándar.", correct: false },
                    { text: "Hipoteca personal.", correct: false },
                    { text: "Cancelación administrativa respecto a una de las fincas.", correct: true },
                    { text: "Saldo cero anteriores a noviembre 2006.", correct: false }
                ]
            },
            {
                question: "¿Qué frase en el Expediente de Riesgo confirma que está autorizada la cancelación de una finca específica?",
                options: [
                    { text: "\"Préstamo aprobado para cancelación total\".", correct: false },
                    { text: "\"Baja de la garantía finca tal\" o \"se autoriza cancelación\".", correct: true },
                    { text: "\"Cliente sin incidencias de morosidad\".", correct: false },
                    { text: "\"Solicitud recibida y en proceso\".", correct: false }
                ]
            },
            {
                question: "Un préstamo aparece como 'Incorporado' en SIBIS. La oficina pide certificado de una finca específica cancelada. ¿Qué debes hacer?",
                options: [
                    { text: "Devolución directa porque el préstamo sigue activo.", correct: false },
                    { text: "Revisar si hay ER o si es Promotor, y continuar con el procedimiento de una sola finca.", correct: true },
                    { text: "Elevar consulta a SAOC automáticamente.", correct: false },
                    { text: "Pedir a la oficina que cancele el préstamo completo primero.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
                title: "5.3 Solicitud de Actual Propietario",
        tag: "Lección 8",
        content: `
            <h3>Certificado de "Actual Propietario" y Privacidad</h3>
            <p><strong>Objetivo del Módulo:</strong> Enseñar al analista a identificar escenarios donde el solicitante no es el titular original de la deuda, aplicando correctamente el modelo de "Actual Propietario" para garantizar el hermetismo de los datos bancarios.</p>
            
            <div style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 2rem; text-align: center; font-weight: 500; letter-spacing: 2px;">[ INICIO DEL TRÁMITE ]</div>
            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin-bottom: 1rem;">↓</div>

            <h4>Lección 1: Identificación del Escenario (¿Cuándo usar este modelo?)</h4>
            <p>El analista debe activar este protocolo cuando detecta una desconexión entre quién pide el documento y quién firmó el préstamo original.</p>
            <ul>
                <li><strong>Discrepancia en SIBIS:</strong> El solicitante (ej. Antonio) envía una petición indicando "soy titular de la vivienda", pero al buscar en el sistema SIBIS, el préstamo hipotecario figura a nombre de una empresa distinta (usualmente una Promotora o Inmobiliaria).</li>
                <li><strong>La Prueba Irrefutable:</strong> En estos casos, la escritura original rara vez mencionará al nuevo dueño. La Nota Simple se vuelve el documento obligatorio y definitivo, ya que es el único respaldo legal que demuestra que el solicitante actual es, en efecto, el dueño legítimo de esa finca registral específica.</li>
            </ul>

            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>

            <h4>Lección 2: La Regla de Oro de la Privacidad (Alerta LOPD)</h4>
            <div class="alert-warning">
                <div class="alert-title">Alerta LOPD</div>
                <p>Emitir un certificado "Estándar" en este escenario es un error crítico de auditoría.</p>
            </div>
            <ul>
                <li><strong>Prohibición de Datos Cruzados:</strong> El actual propietario compró la casa, pero no firmó la hipoteca original. Por lo tanto, no tiene derecho legal a conocer los datos financieros del prestatario anterior.</li>
                <li><strong>Riesgo Legal:</strong> Si el analista emite un certificado estándar mencionando los nombres o el NIF/DNI de los titulares originales (la constructora o dueños previos), el banco se expone a denuncias por vulneración de privacidad, ya que se estaría entregando información confidencial a un tercero sin autorización.</li>
            </ul>

            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>

            <h4>Lección 3: Parametrización del Certificado (Paso a Paso)</h4>
            <p>Para evitar la fuga de datos, se abandona el modelo unificado y se utiliza la plantilla específica denominada: <strong>"Certificado a petición de actual propietario de la finca"</strong>.</p>
            <ul>
                <li><strong>Paso 1: Fechas y Banco:</strong> Ingresa la fecha de concesión basándote en la fecha de la escritura original. Si el nombre del banco de origen no figura claramente, se borra el espacio o se estandariza a Banco Sabadell.</li>
                <li><strong>Paso 2: Segmentación del Importe (Crucial):</strong> Dado que el préstamo original pudo ser de un promotor (con cientos de fincas y un capital de millones), NUNCA coloques el importe total del préstamo madre. Debes extraer y redactar únicamente el importe de responsabilidad hipotecaria específico de la finca que se está consultando (ej. 175,600 € correspondientes solo a la finca 6364).</li>
                <li><strong>Paso 3: Redacción del Solicitante:</strong> Elimina cualquier mención a los titulares del préstamo en la cabecera. En el párrafo final del documento, ubica la sección "A petición de..." y coloca exclusivamente el nombre del solicitante actual, seguido de la coletilla: "en su condición de actual propietario de la finca" (tal cual lo respalda la nota simple).</li>
            </ul>

            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>

            <h4>📋 Checklist de Auditoría Rápida: Actual Propietario</h4>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Filtro de Identidad:</strong> ¿El nombre en la solicitud (GT) difiere del titular original en SIBIS?</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Validación de Propiedad:</strong> ¿La Nota Simple confirma que el solicitante es el dueño actual de la finca?</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Selección de Plantilla:</strong> ¿Abrí el documento "Certificado a petición de actual propietario" en lugar del Unificado?</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Filtro de Privacidad:</strong> ¿Me aseguré de que NO aparezca el nombre ni el NIF de la empresa/persona que tomó el préstamo originalmente?</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Cruce de Importe:</strong> ¿El monto en euros refleja solo la porción de esa finca y no el total de la constructora?</li>
            </ul>
        `,
        checkpoints: [
            {
            question: "Para certificar a un propietario actual no deudor, ¿qué antigüedad máxima debe tener la Nota Simple aportada?",
            options: [
                { text: "Menos de 1 mes.", correct: false },
                { text: "Menos de 6 meses.", correct: true },
                { text: "Menos de 1 año.", correct: false },
                { text: "No es necesaria la Nota Simple.", correct: false }
            ]
        }
            ,
            {
                question: "¿Qué herramienta principal se utiliza para comprobar los números de préstamo y saldos?",
                options: [
                    { text: "SIBIS", correct: true },
                    { text: "Portal VALIDe", correct: false },
                    { text: "Gestor Documental (GD)", correct: false },
                    { text: "CertiPress", correct: false }
                ]
            },
            {
                question: "¿Qué portal se debe usar para validar una firma electrónica del cliente?",
                options: [
                    { text: "Portal VALIDe", correct: true },
                    { text: "SIBIS", correct: false },
                    { text: "SARA", correct: false },
                    { text: "SAOC", correct: false }
                ]
            },
            {
                question: "¿Qué departamento autoriza las excepciones de cancelaciones complejas o de una sola finca?",
                options: [
                    { text: "Dirección de Riesgos", correct: true },
                    { text: "SAOC", correct: false },
                    { text: "Atención al Cliente", correct: false },
                    { text: "Gestoría", correct: false }
                ]
            },
            {
                question: "¿Cómo se llama el archivo central de documentos donde encontramos la plantilla y escrituras?",
                options: [
                    { text: "Gestor Documental (GD)", correct: true },
                    { text: "SIBIS", correct: false },
                    { text: "Archivo Físico", correct: false },
                    { text: "VALIDe", correct: false }
                ]
            },
            {
                question: "¿Qué estado se debe asignar en el gestor si falta información o autorización?",
                options: [
                    { text: "Pendiente de Datos", correct: true },
                    { text: "Devolución Directa", correct: false },
                    { text: "Finalizado", correct: false },
                    { text: "Pendiente de SS.CC.", correct: false }
                ]
            },
            {
                question: "¿Cuál es el modelo oficial estándar general para una Solicitud de Certificado de Cancelación (SCC)?",
                options: [
                    { text: "ME-4329", correct: true },
                    { text: "ME-4328", correct: false },
                    { text: "ME-5325", correct: false },
                    { text: "ME-4286", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
        title: "5.4 Hipoteca de máximos",
        tag: "Lección 9",
        content: `
            <h3>Certificado de hipoteca de máximos</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>20 minutos</strong> — no incluye el tiempo de espera de respuesta de oficina vía BSOS.</p></div>
            <p>Aplica a créditos que en el sistema inician con el código <strong>027</strong>.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong> (Operatoria Básica › Situación contrato / Contrato historial)</li>
                <li><strong>Canal BSOS</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Nota simple o Escritura.</li>
                <li>Respuesta de Oficina vía BSOS.</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Análisis de sistema complejo</h4>
            <ol>
                <li>En SIBIS, los créditos <strong>027</strong> no habilitan la pestaña de datos básicos normales. Ir a <strong>Operatoria Básica › Situación contrato</strong>.</li>
                <li>Ir a <strong>Garantías Recibidas</strong> y validar que la garantía esté cancelada. <em>(Puede salir activa el mismo día de la cancelación por demora del proceso batch; se espera al día siguiente).</em></li>
            </ol>

            <h4>Fase 2: Consulta a Oficina</h4>
            <ol>
                <li>Abrir <strong>Canal BSOS</strong> a la oficina para que definan qué opción del certificado usar. Coletilla: <em>"Buenos días, por favor confirmar cuál de las opciones debemos indicar... así mismo, indicar si es con provisión o sin provisión"</em>.</li>
            </ol>

            <h4>Fase 3: Llenado de Notario</h4>
            <ol>
                <li>Tomar el modelo <strong>"Hipoteca máximo"</strong>.</li>
                <li>Plasmar la opción indicada por la oficina (ej. <em>Ingreso en efectivo, Opción 2 sin provisión</em>).</li>
                <li>Buscar el nombre del Notario y su población <strong>EXCLUSIVAMENTE</strong> en la carga de la hipoteca de la Escritura/Nota Simple.</li>
            </ol>

            <div class="alert-attention"><div class="alert-title">⚠ Importante / SLA</div><p>La fecha de cancelación debe extraerse de <strong>Operatoria Básica › Historial</strong>. No usar la <em>"fecha valor"</em>, usar la <strong>"fecha de cancelación"</strong> real.</p></div>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Tomar al notario principal de la escritura en lugar del notario específico de la <strong>carga hipotecaria de Banco Sabadell</strong>.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Con qué código de contrato se identifican los créditos de hipoteca de máximos en SIBIS?",
                options: [
                    { text: "807", correct: false },
                    { text: "817", correct: false },
                    { text: "027", correct: true },
                    { text: "827", correct: false }
                ]
            },
            {
                question: "¿Por qué la garantía puede aparecer activa en SIBIS el mismo día de la cancelación?",
                options: [
                    { text: "Porque el préstamo no ha sido tramitado correctamente.", correct: false },
                    { text: "Por demora del proceso batch; hay que esperar al día siguiente.", correct: true },
                    { text: "Porque falta la autorización de Riesgos.", correct: false },
                    { text: "Porque la oficina no ha confirmado la cancelación.", correct: false }
                ]
            },
            {
                question: "¿Para qué se abre el Canal BSOS a la oficina en un trámite de hipoteca de máximos?",
                options: [
                    { text: "Para solicitar el Expediente de Riesgo.", correct: false },
                    { text: "Para que confirmen qué opción del certificado usar y si es con o sin provisión.", correct: true },
                    { text: "Para pedir la nota simple del Registro.", correct: false },
                    { text: "Para confirmar la identidad del titular.", correct: false }
                ]
            },
            {
                question: "¿De dónde se debe extraer el nombre del Notario para el modelo 'Hipoteca máximo'?",
                options: [
                    { text: "Del encabezado principal de la escritura.", correct: false },
                    { text: "De la plantilla enviada por la oficina.", correct: false },
                    { text: "Exclusivamente de la carga hipotecaria de Banco Sabadell en la Escritura/Nota Simple.", correct: true },
                    { text: "De SIBIS › Datos Básicos › Notaría.", correct: false }
                ]
            },
            {
                question: "¿Qué fecha se debe usar para el certificado de hipoteca de máximos?",
                options: [
                    { text: "La 'fecha valor' que aparece en el movimiento.", correct: false },
                    { text: "La fecha del día en que se tramita el certificado.", correct: false },
                    { text: "La 'fecha de cancelación' real extraída de Operatoria Básica › Historial.", correct: true },
                    { text: "La fecha que indica la oficina en la plantilla.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
        title: "5.5 Préstamos en divisas",
        tag: "Lección 10",
        content: `
            <h3>Préstamos en divisas</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>20 minutos</strong> — no incluye el tiempo de espera de respuesta del departamento de Divisas.</p></div>
            <p>Préstamos con monedas extranjeras que inician con el contrato <strong>847</strong>.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong></li>
                <li><strong>Canal BSOS</strong> (Petición SSCC › Divisas)</li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Respuesta del departamento de Divisas.</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Consulta a centro Divisas</h4>
            <ol>
                <li>En el trámite, cambiar estado a <strong>"Pendiente CCC"</strong> › Solicitar datos a Divisas.</li>
                <li>Enviar coletilla: <em>"Solicitamos información del contrato 847... confirmarnos motivo de cancelación, importe de concesión, fecha y fecha de cancelación"</em>.</li>
            </ol>

            <h4>Fase 2: Edición del unificado</h4>
            <ol>
                <li>Tomar el modelo <strong>Unificado estándar</strong>.</li>
                <li>Con la respuesta de Divisas, añadir el importe en <strong>Euros</strong> y, al costado, el importe en la <strong>Divisa correspondiente</strong>.</li>
            </ol>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Olvidar incluir el número de contrato <strong>847</strong> en el correo a Divisas, provocando rechazo del ticket.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Con qué código de contrato se identifican los préstamos en divisas en SIBIS?",
                options: [
                    { text: "807", correct: false },
                    { text: "027", correct: false },
                    { text: "847", correct: true },
                    { text: "817", correct: false }
                ]
            },
            {
                question: "¿Qué estado se asigna al trámite mientras se espera la respuesta del departamento de Divisas?",
                options: [
                    { text: "Pendiente de datos.", correct: false },
                    { text: "Pendiente CCC › Solicitar datos a Divisas.", correct: true },
                    { text: "Provisional con incidencias.", correct: false },
                    { text: "En tramitación.", correct: false }
                ]
            },
            {
                question: "¿Qué información se solicita al departamento de Divisas mediante BSOS?",
                options: [
                    { text: "El nombre del titular y su DNI.", correct: false },
                    { text: "La nota simple y la escritura originales.", correct: false },
                    { text: "Motivo de cancelación, importe de concesión, fecha de concesión y fecha de cancelación.", correct: true },
                    { text: "El subtipo de operación y la coletilla de cierre.", correct: false }
                ]
            },
            {
                question: "¿Cómo se refleja el importe en el modelo Unificado para un préstamo en divisa?",
                options: [
                    { text: "Solo en la divisa extranjera, sin convertir a euros.", correct: false },
                    { text: "Solo en euros, convirtiendo al tipo de cambio actual.", correct: false },
                    { text: "En euros y, al costado, el importe en la divisa correspondiente.", correct: true },
                    { text: "En la divisa que indique la escritura original.", correct: false }
                ]
            },
            {
                question: "¿Qué error frecuente provoca el rechazo del ticket enviado a Divisas?",
                options: [
                    { text: "No adjuntar la nota simple al correo.", correct: false },
                    { text: "Olvidar incluir el número de contrato 847 en el mensaje.", correct: true },
                    { text: "Enviar el ticket sin cambiar el estado a 'Pendiente CCC'.", correct: false },
                    { text: "No indicar el nombre del titular.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
        title: "5.6 Solicitud de herederos",
        tag: "Lección 11",
        content: `
            <h3>Certificado a solicitud de herederos</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>20 minutos</strong> — siempre que la documentación de Testamentarías esté completa en GD.</p></div>
            <p>Se tramita cuando el titular o prestatario del préstamo figura en el sistema con el aviso de <strong>"Persona fallecida"</strong>.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong> (Ficha Cliente, Testamentarías)</li>
                <li><strong>Gestión de Trámites (GT)</strong></li>
                <li><strong>BSOS</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Certificado de defunción.</li>
                <li>Adjudicación de herencia.</li>
                <li>Testamento o Acta de declaración de herederos.</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Verificación de herederos</h4>
            <ol>
                <li>En SIBIS, si salta el aviso de <strong>"Fallecido"</strong>, verificar en <strong>"Testamentarías"</strong> si están los herederos o documentos grabados.</li>
                <li>Si hay múltiples herederos (ej. 6 personas) y la plantilla solo dice <em>"Heredero"</em>, enviar <strong>BSOS</strong> a la oficina para confirmar cuál de ellos solicita el documento. Si solo hay un hijo o heredero universal, se procede automáticamente.</li>
            </ol>

            <h4>Fase 2: Confección</h4>
            <ol>
                <li>Usar el modelo específico de <strong>"Herederos"</strong> (o insertar el párrafo final de herederos en un modelo 2006).</li>
                <li>Llenar los datos del préstamo y extraer la fecha exacta de defunción desde el <strong>Certificado de defunción</strong> (no fiarse 100% de la fecha en SIBIS).</li>
                <li>En la sección final, completar: <em>"A petición de [Nombre del heredero] en su condición de legítimo heredero de [Nombre del fallecido]"</em>.</li>
            </ol>

            <div class="alert-attention"><div class="alert-title">⚠ Importante / SLA</div><p>Si el prestatario es fallecido pero hay un <strong>co-prestatario vivo</strong> que está solicitando el certificado, <strong>no se requiere</strong> el trámite de herederos.</p></div>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Asumir el nombre del heredero cuando hay múltiples en el testamento sin consultar a la oficina.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Qué aviso en SIBIS indica que se debe aplicar el procedimiento de herederos?",
                options: [
                    { text: "\"Préstamo en contencioso\".", correct: false },
                    { text: "\"Persona fallecida\".", correct: true },
                    { text: "\"Pendiente de testamentaría\".", correct: false },
                    { text: "\"Titular sin vinculación activa\".", correct: false }
                ]
            },
            {
                question: "¿Qué se debe hacer si hay múltiples herederos en el testamento y la plantilla solo indica 'Heredero'?",
                options: [
                    { text: "Usar al primer heredero que aparezca en la lista de SIBIS.", correct: false },
                    { text: "Emitir el certificado a nombre de todos los herederos.", correct: false },
                    { text: "Enviar BSOS a la oficina para que confirmen cuál de ellos solicita el documento.", correct: true },
                    { text: "Devolver el trámite directamente por documentación incompleta.", correct: false }
                ]
            },
            {
                question: "¿De dónde se debe extraer la fecha exacta de defunción para el certificado?",
                options: [
                    { text: "Del dato que figura directamente en SIBIS.", correct: false },
                    { text: "Del Certificado de defunción oficial.", correct: true },
                    { text: "De la plantilla enviada por la oficina.", correct: false },
                    { text: "De la escritura de adjudicación de herencia.", correct: false }
                ]
            },
            {
                question: "Si el prestatario fallecido tenía un co-prestatario vivo que solicita el certificado, ¿qué procedimiento aplica?",
                options: [
                    { text: "Solicitar igualmente los documentos de herederos.", correct: false },
                    { text: "Elevar consulta a SAOC antes de continuar.", correct: false },
                    { text: "No se requiere trámite de herederos; se procede con el co-prestatario vivo.", correct: true },
                    { text: "Emitir el certificado a nombre del fallecido únicamente.", correct: false }
                ]
            },
            {
                question: "¿Cómo se redacta la sección final del certificado de herederos?",
                options: [
                    { text: "\"A petición de los herederos legítimos del contrato número...\".", correct: false },
                    { text: "\"A petición de [Nombre heredero] en su condición de legítimo heredero de [Nombre fallecido]\".", correct: true },
                    { text: "\"En representación del fallecido [Nombre], titular del préstamo...\".", correct: false },
                    { text: "\"Según testamento notarial número... se certifica lo siguiente...\".", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
        title: "5.7 Contencioso (Consulta a SAOC)",
        tag: "Lección 12",
        content: `
            <h3>Préstamos en situación de contencioso (consulta a SAOC)</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>20 minutos</strong> — no incluye el tiempo de espera de SAOC (2–4 días hábiles).</p></div>
            <p>Préstamos que entraron en fase de ejecución, morosidad judicial, dación en pago o bloqueo contencioso.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong></li>
                <li><strong>Ficha Cliente</strong> (Reporte morosidad)</li>
                <li><strong>SAOC</strong> (9800)</li>
                <li><strong>Canal BSOS</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Autorización de abogado de recuperaciones <em>(si el sistema aún marca cuotas pendientes)</em>.</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Evaluación del nivel de contencioso</h4>
            <ol>
                <li>Tomar el NIF del titular e ir a <strong>"Ficha Cliente"</strong> › Reporte de morosidad.</li>
                <li>Si figura <strong>"Regularizado"</strong> o <strong>"Contencioso Solucionado"</strong> → realizar el certificado con modelo Unificado de inmediato.</li>
                <li>Si indica <strong>"Contencioso Resuelto"</strong>, <strong>"Cancelado por dación"</strong> o <strong>"Bloqueo contencioso"</strong> → elevar consulta a SAOC.</li>
            </ol>

            <h4>Fase 2: Ticket a SAOC</h4>
            <ol>
                <li>Ingresar a <strong>Operatoria Básica › 9800 (SAOC)</strong>.</li>
                <li>Crear nueva consulta con la coletilla: <em>"Buenas tardes, nos solicitan certificado de saldo cero del préstamo tal cancelado por [dación/etc]. ¿Nos podrían informar si corresponde emitir el certificado?"</em></li>
                <li>Dejar el trámite en estado <strong>"Pendiente CCC"</strong>.</li>
            </ol>

            <h4>Fase 3: Análisis de respuesta y Abogados</h4>
            <ol>
                <li>Si SAOC autoriza → emitir el certificado.</li>
                <li>Si existen cuotas impagadas (ej. <em>"Liquidado por contencioso"</em> con capital pendiente) → enviar BSOS a oficina: <em>"Validamos que el préstamo está en contencioso. Es necesario aportar la autorización del abogado"</em>.</li>
            </ol>

            <div class="alert-attention"><div class="alert-title">⚠ Importante / SLA</div><p>SAOC suele demorar entre <strong>2 a 4 días</strong> en responder el ticket.</p></div>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Emitir certificados con cuotas vencidas sin la carta o <strong>autorización del abogado</strong>.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Qué herramienta se consulta primero para evaluar el nivel de contencioso de un préstamo?",
                options: [
                    { text: "El Gestor Documental (GD) del trámite.", correct: false },
                    { text: "Ficha Cliente › Reporte de morosidad en SIBIS.", correct: true },
                    { text: "El correo de la oficina solicitante.", correct: false },
                    { text: "La escritura de cancelación adjunta.", correct: false }
                ]
            },
            {
                question: "Si el Reporte de morosidad indica 'Regularizado' o 'Contencioso Solucionado', ¿qué se hace?",
                options: [
                    { text: "Elevar consulta a SAOC igualmente para confirmar.", correct: false },
                    { text: "Pedir autorización del abogado antes de continuar.", correct: false },
                    { text: "Realizar el certificado con modelo Unificado de inmediato.", correct: true },
                    { text: "Dejar el trámite en 'Pendiente de datos' hasta aclaración.", correct: false }
                ]
            },
            {
                question: "¿En qué estado queda el trámite mientras se espera respuesta de SAOC?",
                options: [
                    { text: "Devolución directa.", correct: false },
                    { text: "Finalizado con incidencias.", correct: false },
                    { text: "Pendiente CCC.", correct: true },
                    { text: "Provisional con incidencias.", correct: false }
                ]
            },
            {
                question: "¿Cuánto tiempo suele tardar SAOC en responder el ticket de consulta?",
                options: [
                    { text: "El mismo día hábil.", correct: false },
                    { text: "Entre 2 y 4 días.", correct: true },
                    { text: "Entre 6 y 10 días hábiles.", correct: false },
                    { text: "Hasta 30 días naturales.", correct: false }
                ]
            },
            {
                question: "Si el préstamo está 'Liquidado por contencioso' y aún tiene capital pendiente, ¿qué se requiere para emitir el certificado?",
                options: [
                    { text: "Solo la autorización de SAOC es suficiente.", correct: false },
                    { text: "La autorización del abogado de recuperaciones.", correct: true },
                    { text: "Un nuevo certificado de saldo actualizado de la oficina.", correct: false },
                    { text: "Nada, se puede emitir directamente si la dación está confirmada.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
        title: "5.8 Subrogación de Acreedor",
        tag: "Lección 13",
        content: `
            <h3>Certificado de cancelación por subrogación de acreedor</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>20 minutos</strong> — puede extenderse si hay que buscar la entidad en cuenta interna o consultar a Provisional.</p></div>
            <p>Cuando la hipoteca se cancela porque se la llevó <strong>otro banco o entidad financiera</strong>.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong> (Operatoria Básica › Movimientos en cuenta interna)</li>
                <li><strong>Gestor Documental (GD)</strong></li>
                <li><strong>Canal BSOS</strong></li>
                <li><strong>Consultas a Provisional</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Oferta Vinculante <em>(obligatoria para usar el modelo específico)</em>.</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Localizar a la nueva entidad</h4>
            <ol>
                <li>Revisar si la <strong>Oferta Vinculante</strong> está adjunta en GD. Si está, extraer de ahí el nombre del banco al que se subrogó (ej. <em>Bankinter S.A.</em>).</li>
                <li>Si no hay Oferta Vinculante, ir a <strong>SIBIS › Operatoria Básica › Movimientos en cuenta interna</strong>. Buscar una recepción <strong>OMF</strong> y, en el detalle, ubicar el código del banco (usando la lista Excel/Word de bancos españoles).</li>
                <li>Si tampoco hay rastro en el sistema, enviar <strong>BSOS</strong> a oficina pidiendo el nombre de la entidad o la Oferta Vinculante.</li>
            </ol>

            <h4>Fase 2: Generación</h4>
            <ol>
                <li>Si se obtiene la entidad, usar modelo <strong>"Subrogación Acreedor"</strong> y colocar el nombre del banco destino.</li>
                <li>Si la oficina responde <em>"No conocemos ese dato"</em>, elevar consulta a <strong>"Provisional"</strong> (área del banco) para solicitar autorización de emitir un Certificado Unificado estándar en su lugar.</li>
            </ol>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Inventar la entidad acreedora sin tener la Oferta Vinculante ni confirmación en cuenta interna.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Qué documento es el primero que se busca en GD para identificar la entidad acreedora en una subrogación?",
                options: [
                    { text: "La escritura original del préstamo.", correct: false },
                    { text: "La Oferta Vinculante del banco que se llevó la hipoteca.", correct: true },
                    { text: "El expediente de riesgo aprobado.", correct: false },
                    { text: "El certificado de saldo de la otra entidad.", correct: false }
                ]
            },
            {
                question: "Si no hay Oferta Vinculante en GD, ¿en qué ruta de SIBIS se puede encontrar el banco destino?",
                options: [
                    { text: "Contrato › Datos Básicos › Vínculos.", correct: false },
                    { text: "Operatoria Básica › Movimientos en cuenta interna, buscando una recepción OMF.", correct: true },
                    { text: "Garantías › Historial › Cancelaciones.", correct: false },
                    { text: "Ficha Cliente › Reporte de morosidad.", correct: false }
                ]
            },
            {
                question: "¿Qué modelo se utiliza cuando se ha identificado correctamente el banco al que se subrogó la hipoteca?",
                options: [
                    { text: "Certificado Unificado estándar.", correct: false },
                    { text: "Hipoteca personal.", correct: false },
                    { text: "Subrogación Acreedor.", correct: true },
                    { text: "Cancelación administrativa respecto a una de las fincas.", correct: false }
                ]
            },
            {
                question: "Si la oficina responde que no conoce el nombre de la entidad acreedora, ¿qué se hace?",
                options: [
                    { text: "Emitir el certificado Unificado directamente sin más gestión.", correct: false },
                    { text: "Elevar consulta a 'Provisional' para obtener autorización de emitir el Certificado Unificado.", correct: true },
                    { text: "Devolver el trámite a la oficina por falta de documentación.", correct: false },
                    { text: "Consultar a SAOC para que identifiquen al acreedor.", correct: false }
                ]
            },
            {
                question: "¿Qué error crítico debe evitarse en un trámite de subrogación de acreedor?",
                options: [
                    { text: "Usar el modelo de Subrogación Acreedor en lugar del Unificado.", correct: false },
                    { text: "Inventar el nombre de la entidad acreedora sin tener Oferta Vinculante ni confirmación en cuenta interna.", correct: true },
                    { text: "Consultar los movimientos de cuenta interna en SIBIS.", correct: false },
                    { text: "Enviar BSOS a la oficina antes de revisar GD.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
        title: "5.9 Subrogación de Deudor",
        tag: "Lección 14",
        content: `
            <h3>Certificado de cancelación por subrogación de deudor</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>20 minutos</strong> — incluye verificación cruzada de vínculos entre el préstamo origen y el nuevo 807.</p></div>
            <p>Ocurre cuando cambian los prestatarios (ej. por divorcio o extinción de condominio donde uno asume toda la deuda y se incorpora a un nuevo número de préstamo).</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong></li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Ninguno extraordinario más allá de Escritura/Nota Simple.</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Verificación de vínculos</h4>
            <ol>
                <li>Verificar en SIBIS si el préstamo origen está <strong>"Cancelado por subrogación deudor"</strong> y revisar sus Vínculos.</li>
                <li>Buscar el préstamo posterior (el nuevo <strong>807</strong>) y ver sus vínculos.</li>
                <li>Identificar quién solicita el certificado (el Solicitante).</li>
            </ol>

            <h4>Fase 2: Discriminación de derechos</h4>
            <ol>
                <li>Si el solicitante ya <strong>NO</strong> figura en el préstamo nuevo (ej. cedió la vivienda a su ex pareja) → <strong>TIENE DERECHO</strong> al certificado. Usar modelo <strong>"Subrogación deudor"</strong> (donde se certifica que el titular <em>"no consta en la base de datos como prestatario..."</em>).</li>
                <li>Si el solicitante <strong>sigue apareciendo</strong> en el préstamo nuevo (que figura <strong>"Incorporado"</strong>) → <strong>Devolución directa</strong>: el banco no puede dar un saldo cero mientras el cliente tenga deuda activa.</li>
            </ol>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Entregar un saldo cero a un prestatario que solo movió su deuda de número de contrato pero <strong>sigue debiéndole al banco</strong>.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Qué situación de SIBIS en el préstamo origen indica que aplica el procedimiento de subrogación de deudor?",
                options: [
                    { text: "\"Cancelado por amortización anticipada\".", correct: false },
                    { text: "\"Cancelado por subrogación deudor\".", correct: true },
                    { text: "\"Liquidado por contencioso\".", correct: false },
                    { text: "\"Incorporado con garantía activa\".", correct: false }
                ]
            },
            {
                question: "¿Qué debe comprobarse en el préstamo nuevo (807) antes de decidir si emitir el certificado?",
                options: [
                    { text: "Que tenga una nota simple adjunta en GD.", correct: false },
                    { text: "Que el importe sea inferior al préstamo original.", correct: false },
                    { text: "Si el solicitante figura o no como prestatario en ese nuevo préstamo.", correct: true },
                    { text: "Que el estado sea 'Cancelado' en el sistema.", correct: false }
                ]
            },
            {
                question: "Si el solicitante ya NO figura en el préstamo nuevo porque cedió la vivienda, ¿qué modelo se usa?",
                options: [
                    { text: "Certificado Unificado estándar.", correct: false },
                    { text: "Subrogación Acreedor.", correct: false },
                    { text: "Subrogación Deudor.", correct: true },
                    { text: "Hipoteca personal.", correct: false }
                ]
            },
            {
                question: "Si el solicitante sigue apareciendo como prestatario en el préstamo nuevo (Incorporado), ¿qué acción se toma?",
                options: [
                    { text: "Emitir el certificado igualmente con el modelo de Subrogación Deudor.", correct: false },
                    { text: "Elevar consulta a SAOC para que autoricen el saldo cero.", correct: false },
                    { text: "Devolución directa: no se puede emitir saldo cero con deuda activa.", correct: true },
                    { text: "Pedir al solicitante que aporte la escritura de extinción de condominio.", correct: false }
                ]
            },
            {
                question: "¿Cuál es el error crítico que define a la subrogación de deudor frente a otros tipos?",
                options: [
                    { text: "Usar el modelo Unificado en lugar del de Subrogación Deudor.", correct: false },
                    { text: "Emitir saldo cero a quien solo cambió el número de contrato pero sigue debiendo al banco.", correct: true },
                    { text: "No consultar el Reporte de morosidad antes de emitir.", correct: false },
                    { text: "No adjuntar la oferta vinculante al trámite.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Módulo 5: RESTO DE MODELOS",
        title: "5.10 Fondo de comercio",
        tag: "Lección 15",
        content: `
            <h3>Préstamos con garantía sobre fondo de comercio</h3>
            <div class="alert-attention" style="margin-bottom:1.5rem;"><div class="alert-title">⏱ Tiempo estimado de realización</div><p><strong>20 minutos</strong> — incluye localización de datos específicos de la licencia en la Escritura de Hipoteca Mobiliaria.</p></div>
            <p>Préstamos garantizados por bienes mobiliarios o derechos, principalmente <strong>Licencias de Farmacia</strong>.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Sistemas involucrados</h4>
            <ul>
                <li><strong>SIBIS</strong> (Garantías)</li>
            </ul>

            <h4>Documentos requeridos</h4>
            <ul>
                <li>Escritura de Hipoteca Mobiliaria.</li>
            </ul>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Fase 1: Identificación</h4>
            <ol>
                <li>En <strong>SIBIS › Garantías</strong>, verificar que el tipo de mueble diga <strong>"Derechos"</strong> o <strong>"Licencia de farmacia"</strong> (y no vivienda o garaje).</li>
            </ol>

            <h4>Fase 2: Localización de datos en Escritura</h4>
            <ol>
                <li>Utilizar modelo <strong>"Fondo comercio"</strong>.</li>
                <li>Si no hay una finca real de por medio, <strong>eliminar</strong> todo el párrafo que hable de fincas registrales.</li>
                <li>Ir a la escritura y buscar los datos específicos:
                    <ul>
                        <li>Dirección de la farmacia</li>
                        <li>Código Postal</li>
                        <li>Nombre del Colegio Farmacéutico (ej. <em>Zaragoza</em>)</li>
                        <li>Número de Licencia (ej. <em>ZT-389</em>)</li>
                    </ul>
                </li>
                <li>Completar los datos de ubicación exacta y número de matrícula/colegio.</li>
            </ol>

            <div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>
                <li>Mantener los párrafos de finca registral cuando la garantía es exclusivamente una <strong>licencia o derecho sin local en propiedad</strong>.</li>
            </ul></div>
        `,
        checkpoints: [
            {
                question: "¿Qué tipo de garantía indica que se debe usar el modelo 'Fondo comercio' en lugar del estándar?",
                options: [
                    { text: "Vivienda habitual o garaje.", correct: false },
                    { text: "Derechos o Licencia de farmacia según SIBIS › Garantías.", correct: true },
                    { text: "Préstamo con aval personal del titular.", correct: false },
                    { text: "Hipoteca sobre terreno rústico.", correct: false }
                ]
            },
            {
                question: "¿En qué ruta de SIBIS se confirma que el tipo de garantía es 'Derechos' o 'Licencia de farmacia'?",
                options: [
                    { text: "Contrato › Datos Básicos › Situación.", correct: false },
                    { text: "Operatoria Básica › Movimientos.", correct: false },
                    { text: "SIBIS › Garantías.", correct: true },
                    { text: "Ficha Cliente › Perfil Persona.", correct: false }
                ]
            },
            {
                question: "Si la garantía es una licencia de farmacia sin local en propiedad, ¿qué se debe hacer con los párrafos de finca registral del modelo?",
                options: [
                    { text: "Dejarlos igual, son parte del modelo estándar.", correct: false },
                    { text: "Completarlos con datos ficticios de ubicación.", correct: false },
                    { text: "Eliminarlos íntegramente del certificado.", correct: true },
                    { text: "Trasladarlos al final del documento como nota al pie.", correct: false }
                ]
            },
            {
                question: "¿Qué datos específicos se deben extraer de la escritura para completar un certificado de fondo de comercio?",
                options: [
                    { text: "Nombre del notario, fecha y número de protocolo.", correct: false },
                    { text: "Dirección de la farmacia, código postal, nombre del Colegio Farmacéutico y número de licencia.", correct: true },
                    { text: "Importe del préstamo, tipo de interés y cuota mensual.", correct: false },
                    { text: "NIF del titular, importe y fecha de cancelación.", correct: false }
                ]
            },
            {
                question: "¿Cuál es el error típico al tramitar un certificado con garantía de licencia de farmacia?",
                options: [
                    { text: "Usar el modelo de Subrogación Acreedor en lugar del de Fondo comercio.", correct: false },
                    { text: "Dejar en el certificado párrafos de finca registral cuando no hay local en propiedad.", correct: true },
                    { text: "Consultar SIBIS › Garantías antes de elegir el modelo.", correct: false },
                    { text: "Eliminar el número de licencia del cuerpo del certificado.", correct: false }
                ]
            }
        ]
    },
    {
        moduleGroup: "Plantillas de Resolución",
        title: "Coletillas de Finalización",
        tag: "Anexo",
        content: `
            <h3>Textos Estándar (Coletillas) para Finalizar Trámites</h3>
            <p>Al cerrar un trámite en el Gestor de Tareas, debes utilizar los textos estándar según el motivo de la finalización o devolución.</p>

            <div style="display: grid; gap: 15px; margin-top: 15px;">
                <div class="glass-panel" style="padding: 15px; border-left: 4px solid var(--success);">
                    <h4 style="margin-top: 0; color: var(--success);">Trámites Finalizados Correctamente</h4>
                    <ul style="margin-bottom: 0;">
                        <li style="margin-bottom: 8px;"><strong>Versión 1 (SCC Normal):</strong> "Trámite finalizado. El Certificado solicitado se ha digitalizado en el GD de Gestión Comercial del nº del producto. Recordad seguir las instrucciones sobre impresión, entrega y archivo de Certificados contempladas en la Guía para emisión de Certificados. Saludos."</li>
                        <li><strong>Versión 1.2 (&lt; nov 2006):</strong> "Trámite finalizado. El Certificado solicitado se ha digitalizado en el GD del trámite. Recordad seguir las instrucciones sobre impresión..."</li>
                    </ul>
                </div>

                <div class="glass-panel" style="padding: 15px; border-left: 4px solid var(--warning);">
                    <h4 style="margin-top: 0; color: var(--warning);">Falta de Datos o Error de Ruta</h4>
                    <ul style="margin-bottom: 0;">
                        <li style="margin-bottom: 8px;"><strong>Ruta errónea:</strong> "...vamos a devolver el trámite ya que la ruta correcta es lo antes mencionado. Muchas gracias y un saludo."</li>
                        <li><strong>Sin respuesta de oficina:</strong> "Trámite no finalizado por falta de datos. Por favor, rogamos iniciéis nuevo trámite cuando dispongáis de los datos solicitados."</li>
                    </ul>
                </div>

                <div class="glass-panel" style="padding: 15px; border-left: 4px solid var(--danger);">
                    <h4 style="margin-top: 0; color: var(--danger);">Devolución Directa (Trámite No Realizado)</h4>
                    <ul style="margin-bottom: 0;">
                        <li style="margin-bottom: 8px;"><strong>Certificados automáticos:</strong> "Trámite finalizado. El Certificado solicitado pueden obtenerlo a través de Operativa Básica > fijar cuenta > Situación contrato > Certificados."</li>
                        <li style="margin-bottom: 8px;"><strong>Sin Garantía / Anulado:</strong> "Trámite no finalizado. El préstamo no tiene garantía hipotecaria y no tenemos Nota Simple ni escritura para preparar el certificado."</li>
                        <li style="margin-bottom: 8px;"><strong>Venta, Cesión o Incorporado:</strong> "Tramite no realizado, ya que el préstamo se encuentra incorporado y desde este medio solo certificamos los prestamos cancelados."</li>
                        <li><strong>Productos Leasing:</strong> "Trámite no finalizado. No realizamos este tipo de certificado. Desde la oficina pueden solicitarlo al buzón 0901LeasingAdmon@bancsabadell.com."</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        moduleGroup: "Glosario de Términos",
        title: "Diccionario Hipotecario",
        tag: "Anexo",
        content: `
            <h3>Glosario de Términos - Certificados</h3>
            <p>A continuación se detallan los conceptos clave que encontrarás habitualmente en las solicitudes y escrituras hipotecarias:</p>
            <div style="column-count: 2; column-gap: 20px; font-size: 0.85em;">
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Amortización</strong>
                    <span style="color: var(--text-muted);">También llamado reembolso. Es la devolución anticipada de una parte del préstamo hipotecario. Puede ser total o parcial.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Avalista</strong>
                    <span style="color: var(--text-muted);">Es una persona o entidad que se compromete a pagar una deuda si la persona a quien avala no puede hacerlo.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Bastanteo de poderes</strong>
                    <span style="color: var(--text-muted);">Es un documento que verifica que una persona o entidad tiene la capacidad de actuar en nombre de otra.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Capital</strong>
                    <span style="color: var(--text-muted);">El monto de dinero que se presta.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Carga</strong>
                    <span style="color: var(--text-muted);">Una limitación o deuda que afecta a una propiedad (ej. hipotecas, embargos).</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Carta parcial de pago</strong>
                    <span style="color: var(--text-muted);">Documento que reconoce que se ha hecho un pago parcial de una deuda.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Certificado de saldo cero</strong>
                    <span style="color: var(--text-muted);">Documento que acredita que no se tienen deudas con un banco.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Certificado de últimas voluntades</strong>
                    <span style="color: var(--text-muted);">Documento que acredita si una persona fallecida dejó testamento y ante qué notario.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Dación en pago</strong>
                    <span style="color: var(--text-muted);">Acto jurídico donde el deudor entrega un bien al acreedor para saldar una deuda.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Declaración de herederos abintestato</strong>
                    <span style="color: var(--text-muted);">Documento que establece quiénes son los herederos de una persona que falleció sin testamento.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">División horizontal</strong>
                    <span style="color: var(--text-muted);">Acto jurídico que permite dividir un edificio en varias unidades independientes. La matriz desaparece.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Escritura de préstamo hipotecario</strong>
                    <span style="color: var(--text-muted);">Documento oficial donde se exponen las cláusulas y condiciones pactadas.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Euribor</strong>
                    <span style="color: var(--text-muted);">Índice de referencia del mercado interbancario de Europa.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Expediente de riesgos (ER)</strong>
                    <span style="color: var(--text-muted);">Información financiera y personal analizada para aprobar una solicitud.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Extinción de condominio</strong>
                    <span style="color: var(--text-muted);">Procedimiento legal que finaliza la copropiedad de un bien inmueble.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">FEIN</strong>
                    <span style="color: var(--text-muted);">Ficha Europea de Información Normalizada. Contiene toda la información de la hipoteca.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Finca registral</strong>
                    <span style="color: var(--text-muted);">Unidad de suelo o edificación inscrita en el Registro de la Propiedad.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Hipoteca</strong>
                    <span style="color: var(--text-muted);">Acuerdo entre un prestamista y un deudor con derecho sobre una propiedad en caso de impago.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Hipotecante no deudor</strong>
                    <span style="color: var(--text-muted);">Persona que garantiza la deuda de un tercero con su inmueble, sin recibir el dinero.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Hipoteca unilateral</strong>
                    <span style="color: var(--text-muted);">Hipoteca voluntaria constituida por el propietario sin acuerdo previo con el acreedor.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">LCCI</strong>
                    <span style="color: var(--text-muted);">Ley de Contratos de Crédito Inmobiliario.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Leasing</strong>
                    <span style="color: var(--text-muted);">Contrato de arrendamiento financiero con opción a compra.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">LOPD</strong>
                    <span style="color: var(--text-muted);">Ley Orgánica de Protección de Datos.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Nota simple</strong>
                    <span style="color: var(--text-muted);">Documento que contiene información básica sobre un inmueble (titularidad, cargas).</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Novación de préstamo</strong>
                    <span style="color: var(--text-muted);">Acuerdo para modificar las condiciones de un préstamo ya contratado.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Nuda propiedad</strong>
                    <span style="color: var(--text-muted);">Derecho real sobre una cosa sin el derecho a usar o disfrutar de ella (usufructo).</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Oferta vinculante</strong>
                    <span style="color: var(--text-muted);">Acuerdo por escrito que establece las condiciones inmodificables de un préstamo.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Préstamo a tipo variable</strong>
                    <span style="color: var(--text-muted);">Préstamo donde el tipo de interés puede variar.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Préstamo a tipo fijo</strong>
                    <span style="color: var(--text-muted);">Préstamo donde el tipo de interés no varía.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Préstamo mixto</strong>
                    <span style="color: var(--text-muted);">Combina un tipo de interés fijo y otro variable.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Préstamo en divisas</strong>
                    <span style="color: var(--text-muted);">Financiamiento en una moneda distinta al euro.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Préstamo promotor</strong>
                    <span style="color: var(--text-muted);">Otorgado a promotores para proyectos de construcción.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Prestatario</strong>
                    <span style="color: var(--text-muted);">Persona o entidad que solicita un préstamo.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Provisión de fondos</strong>
                    <span style="color: var(--text-muted);">Dinero entregado por adelantado para cubrir gastos futuros.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Registro de la Propiedad</strong>
                    <span style="color: var(--text-muted);">Servicio público que registra los actos y contratos sobre inmuebles.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Responsabilidad hipotecaria</strong>
                    <span style="color: var(--text-muted);">Cantidad máxima (capital, intereses, costas) a pagar por un préstamo.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Segregación de fincas</strong>
                    <span style="color: var(--text-muted);">Divide una propiedad en fincas independientes. La finca matriz continúa existiendo.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Subrogación</strong>
                    <span style="color: var(--text-muted);">Sustitución de una de las partes (Acreedor o Deudor) en un préstamo.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Tasación</strong>
                    <span style="color: var(--text-muted);">Valoración económica de un inmueble realizada por empresa homologada.</span>
                </div>
                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">Tipo de interés</strong>
                    <span style="color: var(--text-muted);">Porcentaje que se cobra por pedir un préstamo.</span>
                </div>
            </div>
        `
    }
];

const examQuestions = [
    {
        question: "1. ¿Qué modelo oficial utilizamos para un Certificado de Cancelación Administrativa Estándar (SCC)?",
        options: [
            { text: "Modelo ME-4328", correct: false },
            { text: "Modelo ME-4329", correct: true },
            { text: "Modelo ME-5325", correct: false },
            { text: "Modelo ME-14505", correct: false }
        ]
    },
    {
        question: "2. Si la oficina solicita un SCC que se puede obtener como Certificado Automático, ¿cuál es el estado de GT que debemos aplicar?",
        options: [
            { text: "Pendiente de Datos.", correct: false },
            { text: "Provisional con incidencias.", correct: false },
            { text: "Devolución Directa.", correct: true },
            { text: "En Tramitación / Resolución.", correct: false }
        ]
    },
    {
        question: "3. ¿Cuántos días hábiles puede estar como máximo un trámite en estado 'Pendiente de datos' antes de cerrarse con incidencias?",
        options: [
            { text: "2 días hábiles.", correct: false },
            { text: "6 días hábiles.", correct: true },
            { text: "15 días hábiles.", correct: false },
            { text: "No caduca nunca.", correct: false }
        ]
    },
    {
        question: "4. ¿Para qué se utiliza el portal externo 'VALIDe' en la operativa diaria?",
        options: [
            { text: "Para validar la firma electrónica de los clientes en las solicitudes.", correct: true },
            { text: "Para enviar consultas a SAOC.", correct: false },
            { text: "Para consultar los datos de la nota simple en el Registro de la Propiedad.", correct: false },
            { text: "Para emitir los certificados de cancelación de los préstamos en divisas.", correct: false }
        ]
    },
    {
        question: "5. ¿Qué requisito clave es obligatorio para tramitar un certificado de una hipoteca cancelada antes de noviembre del 2006?",
        options: [
            { text: "El reporte impreso del Contencioso.", correct: false },
            { text: "La confirmación validada mediante correo electrónico por CertiPress.", correct: true },
            { text: "Que el director de la oficina acuda a firmarlo en persona.", correct: false },
            { text: "Que sea una hipoteca de tipo personal.", correct: false }
        ]
    },
    {
        question: "6. Para emitir el certificado de un propietario actual que NO es el deudor original, ¿qué regla de privacidad aplica?",
        options: [
            { text: "No existe ninguna regla, se exponen todos los datos históricos.", correct: false },
            { text: "Protección LOPD: Si los deudores originarios son personas físicas, se ocultan sus nombres indicando 'y otros'.", correct: true },
            { text: "No se puede emitir el certificado si no es el titular original.", correct: false },
            { text: "Se emite automáticamente sin necesidad de nota simple.", correct: false }
        ]
    },
    {
        question: "7. Si el préstamo a certificar se encuentra en estado de Contencioso, ¿qué departamento debe aprobar el trámite?",
        options: [
            { text: "La sucursal de origen.", correct: false },
            { text: "Asistente SARA.", correct: false },
            { text: "SAOC o el abogado de recuperaciones del caso.", correct: true },
            { text: "La Dirección de Riesgos.", correct: false }
        ]
    },
    {
        question: "8. ¿Qué modelo oficial utilizamos si la oficina pide cancelar SÓLO UNA FINCA (teniendo el préstamo múltiples garantías) y ya contamos con el OK de Riesgos?",
        options: [
            { text: "Modelo ME-4329", correct: false },
            { text: "Modelo ME-5107", correct: false },
            { text: "Modelo ME-5325", correct: true },
            { text: "Modelo ME-4328", correct: false }
        ]
    },
    {
        question: "9. Al redactar un certificado por Subrogación de Acreedor (otra entidad se lleva la deuda), ¿qué documento nos sirve como solicitud firmada válida?",
        options: [
            { text: "La Oferta Vinculante (OV) de la otra entidad dirigida al Banco Sabadell.", correct: true },
            { text: "La nota simple del Registro Mercantil.", correct: false },
            { text: "El recibo del último mes pagado.", correct: false },
            { text: "Una carta informal del cliente sin firmar.", correct: false }
        ]
    },
    {
        question: "10. ¿Cuál es el procedimiento general para las solicitudes de Préstamos Personales (No Hipotecarios) que llegan a nuestra bandeja?",
        options: [
            { text: "Realizarlos inmediatamente con el modelo ME-4329.", correct: false },
            { text: "Solicitar siempre autorización a CertiPress.", correct: false },
            { text: "Finalizar con 'Devolución Directa', ya que como norma general no los certificamos nosotros.", correct: true },
            { text: "Derivarlos al departamento de Divisas.", correct: false }
        ]
    }
];

