import codecs
import re

html_addition = """
            <hr style="border-color: rgba(255,255,255,0.1); margin: 2rem 0;">

            <h3>Certificados "Saldo Cero" (Modelos 2006)</h3>

            <h4>Fase 1: Triaje de Documentos Obligatorios</h4>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Validar Plantilla:</strong> Confirmar que la oficina adjuntó la plantilla de solicitud (puede estar en blanco o solo con el nombre del titular).</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Validar Nota Simple:</strong> Confirmar que la Nota Simple oficial está adjunta al trámite.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Validar Correo de Certipress:</strong> Confirmar que se incluye la respuesta o el correo de Certipress.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Gestión de Ausencias:</strong> Si falta alguno de los 3 documentos anteriores, paralizar la revisión y enviar un requerimiento a la oficina mediante BSOS.</li>
            </ul>

            <h4>Fase 2: Cruce de Datos (Certipress vs. Nota Simple)</h4>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Confirmación de Estado:</strong> Validar que el correo de Certipress indique claramente que el titular no mantiene carga activa y que fue cancelada con anterioridad al año 2006.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Verificación de Finca:</strong> Comprobar que el número de finca indicado por Certipress sea idéntico al número que encabeza la Nota Simple. (<em>Nota para el analista: Certipress puede cometer errores de tipeo; la Nota Simple siempre tiene la razón</em>).</li>
            </ul>

            <h4>Fase 3: Extracción de Datos para la Plantilla</h4>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Número de Finca:</strong> Extraer el número de finca ubicado al inicio de la Nota Simple.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Registro de Propiedad:</strong> Identificar el municipio y el número de registro en el encabezado de la Nota Simple (ej. Orihuela 1).</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Importe Principal:</strong> Ubicar el importe prestado original dentro del apartado "Cargas" > "Hipoteca" de la Nota Simple.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Fecha de Formalización:</strong> Buscar rigurosamente la frase "formalizado en escritura" en la sección de la hipoteca de la Nota Simple y extraer la fecha que le sigue. (Ignorar fechas de inscripción o vencimiento).</li>
            </ul>

            <h4>Fase 4: Cierre y Emisión Manual</h4>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Firma del Documento:</strong> Insertar la firma digital en el certificado PDF generado.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Subida Manual:</strong> Adjuntar el PDF firmado directamente en el trámite actual (Al no tener número de contrato 807, no se puede subir al GD general del préstamo).</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Aplicación de Coletilla:</strong> Cerrar el caso en el sistema utilizando la coletilla específica de "2006 finalizado noviembre de 2006".</li>
            </ul>
"""

with codecs.open('src/js/data.js', 'r', 'utf-8') as f:
    content = f.read()

def replacer(match):
    return match.group(1) + match.group(2) + html_addition + match.group(3)

content = re.sub(r'(title:\s*"3\.1 Préstamos anteriores a 2006".*?content:\s*`)(.*?)(\s*`,\s*checkpoints:)', replacer, content, flags=re.DOTALL)

with codecs.open('src/js/data.js', 'w', 'utf-8') as f:
    f.write(content)

print("Checklist added.")
