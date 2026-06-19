import codecs

terms = [
    ('Amortización', 'También llamado reembolso. Es la devolución anticipada de una parte del préstamo hipotecario. Puede ser total o parcial.'),
    ('Avalista', 'Es una persona o entidad que se compromete a pagar una deuda si la persona a quien avala no puede hacerlo.'),
    ('Bastanteo de poderes', 'Es un documento que verifica que una persona o entidad tiene la capacidad de actuar en nombre de otra.'),
    ('Capital', 'El monto de dinero que se presta.'),
    ('Carga', 'Una limitación o deuda que afecta a una propiedad (ej. hipotecas, embargos).'),
    ('Carta parcial de pago', 'Documento que reconoce que se ha hecho un pago parcial de una deuda.'),
    ('Certificado de saldo cero', 'Documento que acredita que no se tienen deudas con un banco.'),
    ('Certificado de últimas voluntades', 'Documento que acredita si una persona fallecida dejó testamento y ante qué notario.'),
    ('Dación en pago', 'Acto jurídico donde el deudor entrega un bien al acreedor para saldar una deuda.'),
    ('Declaración de herederos abintestato', 'Documento que establece quiénes son los herederos de una persona que falleció sin testamento.'),
    ('División horizontal', 'Acto jurídico que permite dividir un edificio en varias unidades independientes. La matriz desaparece.'),
    ('Escritura de préstamo hipotecario', 'Documento oficial donde se exponen las cláusulas y condiciones pactadas.'),
    ('Euribor', 'Índice de referencia del mercado interbancario de Europa.'),
    ('Expediente de riesgos (ER)', 'Información financiera y personal analizada para aprobar una solicitud.'),
    ('Extinción de condominio', 'Procedimiento legal que finaliza la copropiedad de un bien inmueble.'),
    ('FEIN', 'Ficha Europea de Información Normalizada. Contiene toda la información de la hipoteca.'),
    ('Finca registral', 'Unidad de suelo o edificación inscrita en el Registro de la Propiedad.'),
    ('Hipoteca', 'Acuerdo entre un prestamista y un deudor con derecho sobre una propiedad en caso de impago.'),
    ('Hipotecante no deudor', 'Persona que garantiza la deuda de un tercero con su inmueble, sin recibir el dinero.'),
    ('Hipoteca unilateral', 'Hipoteca voluntaria constituida por el propietario sin acuerdo previo con el acreedor.'),
    ('LCCI', 'Ley de Contratos de Crédito Inmobiliario.'),
    ('Leasing', 'Contrato de arrendamiento financiero con opción a compra.'),
    ('LOPD', 'Ley Orgánica de Protección de Datos.'),
    ('Nota simple', 'Documento que contiene información básica sobre un inmueble (titularidad, cargas).'),
    ('Novación de préstamo', 'Acuerdo para modificar las condiciones de un préstamo ya contratado.'),
    ('Nuda propiedad', 'Derecho real sobre una cosa sin el derecho a usar o disfrutar de ella (usufructo).'),
    ('Oferta vinculante', 'Acuerdo por escrito que establece las condiciones inmodificables de un préstamo.'),
    ('Préstamo a tipo variable', 'Préstamo donde el tipo de interés puede variar.'),
    ('Préstamo a tipo fijo', 'Préstamo donde el tipo de interés no varía.'),
    ('Préstamo mixto', 'Combina un tipo de interés fijo y otro variable.'),
    ('Préstamo en divisas', 'Financiamiento en una moneda distinta al euro.'),
    ('Préstamo promotor', 'Otorgado a promotores para proyectos de construcción.'),
    ('Prestatario', 'Persona o entidad que solicita un préstamo.'),
    ('Provisión de fondos', 'Dinero entregado por adelantado para cubrir gastos futuros.'),
    ('Registro de la Propiedad', 'Servicio público que registra los actos y contratos sobre inmuebles.'),
    ('Responsabilidad hipotecaria', 'Cantidad máxima (capital, intereses, costas) a pagar por un préstamo.'),
    ('Segregación de fincas', 'Divide una propiedad en fincas independientes. La finca matriz continúa existiendo.'),
    ('Subrogación', 'Sustitución de una de las partes (Acreedor o Deudor) en un préstamo.'),
    ('Tasación', 'Valoración económica de un inmueble realizada por empresa homologada.'),
    ('Tipo de interés', 'Porcentaje que se cobra por pedir un préstamo.')
]

html = '\n    },\n    {\n        moduleGroup: "Módulo 7: Glosario de Términos",\n        title: "7.1 Diccionario Hipotecario",\n        tag: "Anexo",\n        content: `\n            <h3>Glosario de Términos - Certificados</h3>\n            <p>A continuación se detallan los conceptos clave que encontrarás habitualmente en las solicitudes y escrituras hipotecarias:</p>\n            <div style="column-count: 2; column-gap: 20px; font-size: 0.85em;">\n'
for t, d in terms:
    html += f'                <div style="break-inside: avoid; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">\n'
    html += f'                    <strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">{t}</strong>\n'
    html += f'                    <span style="color: var(--text-muted);">{d}</span>\n'
    html += f'                </div>\n'
html += '            </div>\n        `,\n        checkpoint: {\n            question: "¿Qué es una Finca Registral?",\n            options: [\n                { text: "Un impuesto municipal sobre la vivienda.", correct: false },\n                { text: "Una unidad de suelo o edificación inscrita en el Registro de la Propiedad.", correct: true },\n                { text: "El contrato de arras firmado ante notario.", correct: false },\n                { text: "El documento que acredita que no se tienen deudas con un banco.", correct: false }\n            ]\n        }\n    }\n];'

with codecs.open('app.js', 'r', 'utf-8') as f:
    content = f.read()

target = '            ]\n        }\n    }\n];'
new_content = content.replace(target, html)

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(new_content)

print("Done inserting module 7")
