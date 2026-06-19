import codecs

# 1. Update app.js
app_js_path = 'src/js/app.js'
with codecs.open(app_js_path, 'r', 'utf-8') as f:
    js = f.read()

target_content = """content: `
            <h3>Certificado Estándar</h3>
            <p>Se emite cuando el historial del préstamo hipotecario no ha sufrido modificaciones estructurales complejas a lo largo de su vida. Utiliza la plantilla de cancelación unificada estándar.</p>
            <p><strong>Códigos de Modelos:</strong> Para este trámite usamos el <strong>ME-4329</strong> si es una Solicitud de Certificado de Cancelación (SCC) y el <strong>ME-4328</strong> si es de Capital Pendiente (SCP).</p>
            <p><strong>Procedimiento según formación:</strong> Revisamos el Gestor Documental (GD) para encontrar la plantilla, la nota simple y la escritura. En <strong>SIBIS</strong>, comprobamos el número de préstamo (ej. empieza con 807). Validamos el importe principal y la finca registral. Si el cliente firmó con <strong>firma electrónica</strong>, debemos validar dicho documento subiéndolo al portal <strong>VALIDe</strong> de la red SARA antes de darlo por bueno.</p>
            <p>Los trámites pueden estar "En Tramitación/Resolución" mientras trabajas en ellos. Si te acaba de entrar un trámite nuevo estará "Pendiente de resolver".</p>
        `"""

# Fallback string if encoding issues occur
target_content_fallback = """content: `
            <h3>Certificado Estǭndar</h3>
            <p>Se emite cuando el historial del prǸstamo hipotecario no ha sufrido modificaciones estructurales complejas a lo largo de su vida. Utiliza la plantilla de cancelacin unificada estǭndar.</p>
            <p><strong>Cdigos de Modelos:</strong> Para este trǭmite usamos el <strong>ME-4329</strong> si es una Solicitud de Certificado de Cancelacin (SCC) y el <strong>ME-4328</strong> si es de Capital Pendiente (SCP).</p>
            <p><strong>Procedimiento segǧn formacin:</strong> Revisamos el Gestor Documental (GD) para encontrar la plantilla, la nota simple y la escritura. En <strong>SIBIS</strong>, comprobamos el nǧmero de prǸstamo (ej. empieza con 807). Validamos el importe principal y la finca registral. Si el cliente firm con <strong>firma electrnica</strong>, debemos validar dicho documento subiǸndolo al portal <strong>VALIDe</strong> de la red SARA antes de darlo por bueno.</p>
            <p>Los trǭmites pueden estar "En Tramitacin/Resolucin" mientras trabajas en ellos. Si te acaba de entrar un trǭmite nuevo estarǭ "Pendiente de resolver".</p>
        `"""

new_content = """content: `
            <h3>Certificado Estándar</h3>
            <p>Este proceso aplica cuando el préstamo no presenta casuísticas complejas y se puede utilizar el modelo oficial sin modificaciones.</p>
            
            <h4>1. Captura y Asignación del Trámite</h4>
            <ul>
                <li><strong>Ruta de búsqueda:</strong> Ingresa a Gestión de trámites > Activo Formalización > Solicitud de certificado cancelación > No finalizados > Trámites sin asignar a ningún agente.</li>
                <li><strong>Acción:</strong> Selecciona el trámite, haz clic en "Resolver", pásalo a estado "En tramitación" y acéptalo.</li>
                <li><strong>Revisión inicial:</strong> Accede al Gestor Documental (GD) desde "Detalle" para descargar la "Plantilla Word" enviada por la oficina, donde indicarán el número de préstamo y solicitantes.</li>
            </ul>
            
            <div class="media-placeholder">
                <div class="icon">🖼️</div>
                <p>Próximamente: Imagen o Video demostrativo de la Captura del Trámite</p>
            </div>
            
            <h4>2. Validaciones Obligatorias (Filtro de Seguridad)</h4>
            <p>Antes de redactar el documento, el analista debe validar el sistema SIBIS:</p>
            <ul>
                <li><strong>Filtro Automático:</strong> Ir a Operatoria Básica > Situación contrato > Certificados. Si el sistema permite emitirlo automáticamente y la oficina no justificó el trámite manual, se rechaza pasándolo a estado "Devolución Directa".</li>
                <li><strong>Estado del Préstamo:</strong> En Gestión Comercial, la situación del contrato debe ser estrictamente "Cancelado por amortización anticipada" o "Cancelado por vencimiento".</li>
                <li><strong>Estado de la Garantía:</strong> La garantía hipotecaria asociada al préstamo también debe figurar como "Cancelada".</li>
            </ul>
            
            <div class="media-placeholder">
                <div class="icon">🖥️</div>
                <p>Próximamente: Video de Validaciones en SIBIS</p>
            </div>
            
            <h4>3. Extracción, Contraste de Datos y Gestión de Faltantes</h4>
            <p>Los datos del sistema siempre deben coincidir con la documentación física.</p>
            <ul>
                <li><strong>Extracción en SIBIS:</strong> Identifica a los titulares, el Capital Inicial, fecha de firma, Banco origen y los datos registrales de la finca.</li>
                <li><strong>Contraste Documental:</strong> Cruza esta información con la Nota Simple, Escritura o Carta de Compraventa.</li>
                <li><strong>Protocolo ante Documentación Faltante:</strong> Si el documento no se encuentra adjunto en el GD:
                    <ul>
                        <li>Envía un mensaje a la oficina a través del Canal BSOS solicitando el documento faltante.</li>
                        <li>Deja el trámite en espera por un máximo de 7 días hábiles.</li>
                        <li><strong>Si no hay respuesta:</strong> Cambia el estado a "Devolución oficina" con la coletilla: <em>"Trámite no finalizado por falta de datos. Por favor, rogamos iniciéis nuevo trámite cuando dispongáis de los datos solicitados."</em></li>
                        <li><strong>Si hay respuesta:</strong> Verifica que los datos concuerden con SIBIS y avanza al siguiente paso.</li>
                    </ul>
                </li>
            </ul>
            
            <div class="media-placeholder">
                <div class="icon">✉️</div>
                <p>Próximamente: Captura de pantalla del Canal BSOS y Coletillas</p>
            </div>
            
            <h4>4. Confección del Documento</h4>
            <ul>
                <li><strong>Subtipo:</strong> Asegúrate de que el trámite esté categorizado como "Hipoteca Estándar (ME-4329 para SCC)".</li>
                <li><strong>Modelo a usar:</strong> Descarga el modelo oficial ME-4329 (Cancelación administrativa de hipoteca sin provisión de fondos).</li>
                <li><strong>Llenado:</strong> Completa los datos requeridos. Al ser un modelo estándar, se ignoran los párrafos opcionales referidos a novaciones, subrogaciones o cambios contractuales.</li>
            </ul>
            
            <div class="media-placeholder">
                <div class="icon">📝</div>
                <p>Próximamente: Tutorial de llenado del Modelo ME-4329</p>
            </div>
            
            <h4>5. Cierre y Entrega Digital en el GD</h4>
            <ul>
                <li><strong>Nomenclatura:</strong> Guarda el documento final exactamente con el nombre "Certificado de cancelación".</li>
                <li><strong>Subida al GD:</strong> Sube el certificado realizado al Gestor Documental (GD). Si la oficina te adjuntó documentos adicionales vía Canal BSOS, debes adjuntar también esos documentos en el GD junto con tu certificado.</li>
                <li><strong>Finalización:</strong> Cambia el estado del trámite a "Finalizado" y pega la siguiente coletilla en Observaciones CAR:<br><em>"Trámite finalizado. El Certificado solicitado se ha digitalizado en el GD de Gestión Comercial del nº del producto. Informad el nombre de los apoderados si fuera necesario..."</em></li>
            </ul>
            
            <div class="media-placeholder">
                <div class="icon">📁</div>
                <p>Próximamente: Video subiendo archivo al GD y cerrando trámite</p>
            </div>
        `"""

if target_content in js:
    js = js.replace(target_content, new_content)
elif target_content_fallback in js:
    js = js.replace(target_content_fallback, new_content)
else:
    # Use regex
    import re
    js = re.sub(r'content:\s*`\s*<h3>Certificado Est.*?Pendiente de resolver".\s*`', new_content, js, flags=re.DOTALL|re.IGNORECASE)

with codecs.open(app_js_path, 'w', 'utf-8') as f:
    f.write(js)

# 2. Update styles.css
styles_path = 'src/css/styles.css'
with codecs.open(styles_path, 'r', 'utf-8') as f:
    css = f.read()

placeholder_css = """
/* Media Placeholder */
.media-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 2px dashed rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-md);
    padding: 2rem;
    margin: 1.5rem 0;
    color: var(--text-muted);
    text-align: center;
    transition: var(--transition);
}
.media-placeholder:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.4);
}
.media-placeholder .icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 0.8;
}
"""

if ".media-placeholder" not in css:
    css += placeholder_css
    with codecs.open(styles_path, 'w', 'utf-8') as f:
        f.write(css)

print("PDF content integrated")
