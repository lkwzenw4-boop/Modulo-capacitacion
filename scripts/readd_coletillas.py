import codecs

coletillas_html = """    },
    {
        moduleGroup: "Módulo 6: Plantillas de Resolución",
        title: "6.1 Coletillas de Finalización",
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
        `,
        checkpoint: {
            question: "¿Qué coletilla usarías si detectas que la oficina te pide un certificado de un Préstamo Leasing?",
            options: [
                { text: "Versión 1 (Finalizado) SCC.", correct: false },
                { text: "Devolución Directa, indicando que se dirijan al buzón 0901LeasingAdmon@bancsabadell.com.", correct: true },
                { text: "Tramites erróneos de ruta, y se lo envío a SAOC.", correct: false },
                { text: "Ninguna de las anteriores, lo tramito normalmente.", correct: false }
            ]
        }
    },
    {
        moduleGroup: "Módulo 7: Glosario de Términos",
        title: "7.1 Diccionario Hipotecario","""

with codecs.open('app.js', 'r', 'utf-8') as f:
    content = f.read()

target = """    },
    {
        moduleGroup: "Módulo 6: Glosario de Términos",
        title: "6.1 Diccionario Hipotecario","""

new_content = content.replace(target, coletillas_html)

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(new_content)

print("Coletillas re-added successfully")
