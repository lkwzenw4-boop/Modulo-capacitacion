import re
import codecs

with codecs.open('src/js/data.js', 'r', 'utf-8') as f:
    content = f.read()

new_content = """        title: "1.1 Certificado Estándar",
        tag: "Lección 1",
        content: `
            <h3>Certificado estándar</h3>
            <p><strong>Descripción general:</strong> Es el modelo habitual (también llamado "unificado") de uso diario para préstamos hipotecarios (PH) cancelados en su totalidad por motivos regulares (amortización anticipada, vencimiento o quita) y que no han sufrido modificaciones en su vida útil.</p>
            <p><strong>Sistemas involucrados:</strong> CVIS (Gestión Comercial > Contrato Datos Básicos), Gestión de Trámites (GT), Gestor Documental (GD).</p>
            <p><strong>Documentos requeridos:</strong></p>
            <ul>
                <li>Plantilla de solicitud.</li>
                <li>Nota simple o Escritura (original).</li>
            </ul>

            <div style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 2rem; text-align: center; font-weight: 500; letter-spacing: 2px;">[ INICIO DEL TRÁMITE ]</div>
            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin-bottom: 1rem;">↓</div>

            <h4>Fase 1: Triaje y validación en sistema</h4>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 1:</strong> Acceder a Gestión de Trámites (GT) con el centro 3796 (o 3813 en el buscador).</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 2:</strong> Entrar a GD y verificar que estén adjuntos los documentos obligatorios.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 3:</strong> En CVIS (Gestión Comercial), ingresar el número de contrato (empieza por 807).</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 4:</strong> Ir a "Situación" y validar que indique: Cancelado por amortización anticipada, vencimiento o quita.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 5:</strong> Ir a "Garantías" y verificar que la garantía hipotecaria figure como cancelada.</li>
            </ul>

            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>

            <h4>Fase 2: Llenado del certificado</h4>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 1:</strong> Abrir el modelo unificado y eliminar las opciones de la parte inferior (dejando solo el párrafo estándar).</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 2:</strong> Extraer la "fecha firma escritura" desde CVIS o la Escritura.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 3:</strong> Extraer los prestatarios desde CVIS (Vínculos) y confirmarlo con la Escritura.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 4:</strong> Ingresar el importe prestado desde "Garantías" (no usar el importe principal si difiere, siempre el de Garantías).</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 5:</strong> Completar el número de finca, registro de propiedad y fecha de cancelación.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 6:</strong> En la sección "a petición de", colocar al solicitante que figura en GT.</li>
            </ul>

            <div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>

            <h4>Fase 3: Finalización</h4>
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 1:</strong> Guardar y firmar el PDF.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 2:</strong> Subir el documento a GD del trámite.</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 3:</strong> Cambiar el subtipo de operación a "Hipoteca estándar".</li>
                <li style="margin-bottom: 0.5rem;"><input type="checkbox" style="margin-right: 0.5rem;"><strong>Paso 4:</strong> Resolver el trámite con la coletilla correspondiente y estado "Finalizado".</li>
            </ul>

            <div class="alert-info" style="margin: 20px 0; padding: 15px; background-color: rgba(250, 204, 21, 0.1); border-left: 4px solid var(--warning); border-radius: 4px; color: #fde047;">
                <strong>⚠️ Importante / SLA:</strong> Los trámites regulares deben gestionarse en un rango de 10 a 30 minutos. Si el trámite está marcado como "CP" (Cliente Prioritario), debe atenderse con urgencia (en menos de 10 minutos).
            </div>

            <h4>Errores comunes a evitar:</h4>
            <div class="alert-info" style="margin: 10px 0; padding: 12px; background-color: rgba(239, 68, 68, 0.15); border-left: 4px solid var(--danger); border-radius: 4px; color: #fca5a5;">
                <ul style="margin-bottom: 0; padding-left: 1rem;">
                    <li>Incluir la frase "entre otras" cuando el préstamo solo tiene una finca.</li>
                    <li>Omitir los ceros en el importe o número de finca (se debe copiar exactamente como está en la Nota Simple).</li>
                    <li>Poner como solicitante a una empresa en lugar del administrador (siempre debe ser una persona física).</li>
                </ul>
            </div>
        `,"""

match = re.search(r'title:\s*"1\.1 Certificado Estándar",\s*tag:\s*"Lección 1",\s*content:\s*`(.*?)`,', content, flags=re.DOTALL)
if match:
    content = content[:match.start()] + new_content + content[match.end()-1:]
    with codecs.open('src/js/data.js', 'w', 'utf-8') as f:
        f.write(content)
    print("Success")
else:
    print("Not found")
