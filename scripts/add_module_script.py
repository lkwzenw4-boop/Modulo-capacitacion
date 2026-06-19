import codecs
import re

new_module = """    ,
    {
        moduleGroup: "Guía Transversal: Auditoría y Mejores Prácticas",
        title: "Auditoría y Emisión",
        tag: "Procesos",
        content: `
            <h3>Auditoría y Emisión de Certificados Bancarios</h3>
            <p>El objetivo de este apartado transversal es capacitarte en el flujo de revisión, validación y emisión, garantizando el cumplimiento de los SLA y la confidencialidad.</p>

            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h4>Triaje y Clasificación del Trámite</h4>
            <ul>
                <li><strong>Asignación Inteligente:</strong> Toma los casos estrictamente de uno en uno para evitar que los tiempos de SLA se venzan al cruzarte con expedientes complejos.</li>
                <li><strong>Identificación (Regla de Oro):</strong> Si en SIBIS la pestaña de garantías está en blanco y el documento en GD es una póliza, estás frente a un <strong>préstamo no hipotecario</strong>.</li>
                <li><strong>Control de Plazos:</strong> Si el trámite lleva esperando documentación por <strong>7 días hábiles</strong>, procede a cerrarlo o devolverlo <strong>empezando el día</strong> (en la mañana del día 8).</li>
                <li><strong>Gestión de Comunicación:</strong> Si faltan documentos, utiliza el canal <strong>BSOS</strong> para solicitarlos.</li>
            </ul>

            <h4>Reglas de Confidencialidad</h4>
            <ul>
                <li><strong>Validación de Vínculos Legales:</strong> Rastrea en SIBIS y en la escritura si el cliente tiene préstamos origen relacionados.</li>
                <li><strong>Protección de Datos:</strong> Si por una compraventa ya no existe vínculo legal con un titular anterior, <strong>esquiva informar los datos de esa persona</strong> en el nuevo certificado.</li>
            </ul>

            <h4>Lectura Estratégica de Escrituras (La Prueba de Fuego)</h4>
            <ul>
                <li><strong>El Salto Estratégico:</strong> En escrituras extensas, no leas página por página. Salta directamente hacia la séptima u octava cláusula (usualmente entre páginas 15 y 18).</li>
                <li><strong>Búsqueda de Palabras Clave:</strong> Escanea el texto buscando "hipoteca", "carga" o "responsabilidad hipotecaria".</li>
                <li><strong>El Límite de Búsqueda:</strong> Detente al encontrar la "cláusula de amortización". El importe oficial validado siempre se encuentra justo antes de esta sección.</li>
            </ul>

            <h4>Cierre, Formato y Emisión</h4>
            <ul>
                <li><strong>Corrección de Ceros a la Izquierda:</strong> Si debes tipear datos, elimina siempre los ceros a la izquierda en las cantidades numéricas (ej. cambiar 010.01 a 10.01) para reflejar idénticamente la nota simple.</li>
                <li><strong>Estética Profesional:</strong> Asegúrate de que la firma digital mantenga el mismo tamaño y ancho que el nombre del banco para no restar formalidad al certificado.</li>
            </ul>
        `,
        checkpoints: [
            {
                question: "¿Qué acción se debe tomar en escrituras extensas para encontrar la información clave rápidamente?",
                options: [
                    { text: "Leer desde la primera página detalladamente.", correct: false },
                    { text: "Buscar la firma del notario al final.", correct: false },
                    { text: "Saltar a la séptima u octava cláusula y buscar 'hipoteca' o 'carga'.", correct: true },
                    { text: "Pedir un resumen a la oficina.", correct: false }
                ]
            },
            {
                question: "¿Qué debes hacer si por una compraventa ya no existe vínculo legal con un titular anterior?",
                options: [
                    { text: "Omitir sus datos en el nuevo certificado por protección de datos.", correct: true },
                    { text: "Incluir sus datos pero marcados con asterisco.", correct: false },
                    { text: "Pedir autorización a la oficina para incluirlos.", correct: false },
                    { text: "Informar todos los titulares históricos siempre.", correct: false }
                ]
            }
        ]
    }
];

const examQuestions = ["""

with codecs.open('src/js/data.js', 'r', 'utf-8') as f:
    content = f.read()

content = re.sub(r'\];\s*const examQuestions = \[', new_module, content)

with codecs.open('src/js/data.js', 'w', 'utf-8') as f:
    f.write(content)

print("Module appended successfully")
