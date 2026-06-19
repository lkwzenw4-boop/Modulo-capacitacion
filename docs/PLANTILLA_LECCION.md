# Plantilla estándar para lecciones de data.js

Este documento define el formato exacto que debe tener cada lección antes de
integrarla a `src/js/data.js`. Úsalo de dos formas: (1) pégalo junto con tu
prompt de clasificación en Gemini para que el contenido salga ya compatible,
y (2) dáselo a Antigravity como referencia cuando le pidas insertar contenido
nuevo, para que no improvise un formato distinto.

## 1. Esquema del objeto de lección

Cada lección es un objeto dentro del array `modules` en `data.js`:

```js
{
    moduleGroup: "Módulo 5: RESTO DE MODELOS",   // debe coincidir EXACTO con el grupo existente
    title: "5.4 Hipoteca de máximos",             // debe coincidir EXACTO con el título existente
    tag: "Lección 12",                             // etiqueta corta que ya tiene la lección
    content: `
        ... HTML según las reglas de la sección 2 ...
    `,
    checkpoints: [
        {
            question: "Pregunta de opción múltiple sobre el procedimiento",
            options: [
                { text: "Opción incorrecta 1", correct: false },
                { text: "Opción correcta",      correct: true  },
                { text: "Opción incorrecta 2", correct: false },
                { text: "Opción incorrecta 3", correct: false }
            ]
        }
        // 1 a 3 preguntas por lección, según cuánto haya para evaluar
    ]
}
```

Importante: **no inventes un `moduleGroup` o `title` nuevo.** Todos los
submódulos de tu lista ya existen como lecciones (ver sección 3). La tarea es
reemplazar el `content` (y completar `checkpoints`) de la lección que ya
existe con ese título exacto, no crear una lección paralela.

## 2. Bloques HTML aprobados

Usa **únicamente** estos bloques para dar formato. Todos usan clases CSS ya
definidas en `styles.css` — no inventes estilos inline nuevos.

**Encabezados:** `<h3>` para el título de la lección, `<h4>` para cada
fase/parte dentro de ella.

**Caja de nota informativa (azul):**
```html
<div class="alert-note">
    <div class="alert-title">Nombre de la nota</div>
    <p>Texto de la nota.</p>
</div>
```

**Caja de confirmación positiva (verde) — para tiempos, validaciones OK, etc.:**
```html
<div class="alert-important">
    <div class="alert-title">Nombre</div>
    <p>Texto.</p>
</div>
```

**Caja de advertencia crítica (roja) — para "alto ahí", riesgos legales, errores graves:**
```html
<div class="alert-warning">
    <div class="alert-title">Nombre</div>
    <p>Texto.</p>
</div>
```

**Caja de atención / regla de oro / SLA (ámbar) — para reglas de prioridad y plazos:**
```html
<div class="alert-attention">
    <div class="alert-title">⚠ Nombre</div>
    <p>Texto.</p>
</div>
```

**Flecha entre fases del procedimiento:**
```html
<div class="flow-arrow">↓</div>
```

**Banner de inicio de trámite:**
```html
<div class="banner-start">[ INICIO DEL TRÁMITE ]</div>
```

**Checklist de puntos de control (triaje):**
```html
<ul class="checklist">
    <li class="checklist-item"><input type="checkbox"><strong>Punto de control:</strong> Texto de la pregunta de validación.</li>
</ul>
```

**Procedimiento paso a paso:**
```html
<ol start="1">
    <li><strong>Nombre del paso:</strong> Descripción del paso.</li>
</ol>
```

**Video (si el documento original menciona un minuto exacto de la grabación, usa el fragmento de tiempo; si no, omite el video):**
```html
<video controls preload="metadata" width="100%" style="border-radius:8px; margin: 1rem 0; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"><source src="src/assets/videos/Formacion_certificados_SCC_1.mp4#t=INICIO,FIN" type="video/mp4"></source></video>
```

## 3. Estado actual de las lecciones (prioriza por aquí)

De las 20 lecciones que ya existen, estas 9 son apenas un párrafo (stub) y
son las que más urge reemplazar con el contenido real de los 9 documentos:

| Lección | Caracteres actuales |
|---|---|
| 5.4 Hipoteca de máximos | 476 |
| 5.9 Subrogación de Deudor | 479 |
| 5.6 Solicitud de herederos | 498 |
| 5.8 Subrogación de Acreedor | 547 |
| 5.5 Préstamos en divisas | 552 |
| 5.2 Cancelación de una sola finca | 561 |
| 5.10 Fondo de comercio | 623 |
| 5.7 Contencioso (Consulta a SAOC) | 641 |
| 2.1 Certificados Automáticos | 791 |
| 1.2 Certificado NO Estándar | 909 |

Estas otras ya tienen desarrollo real (pasos, alertas, en algunos casos
video) y probablemente solo necesiten revisión o algún detalle adicional que
aparezca en los documentos, no un reemplazo completo: Introducción General,
Auditoría y Emisión, 1.1 Certificado Estándar, 1.3 Entidades Absorbidas, 3.1
Préstamos anteriores a 2006, 4.1 Pólizas, 5.3 Solicitud de Actual Propietario,
Coletillas de Finalización, Diccionario Hipotecario.

## 4. Cómo combinarlo con el prompt de Gemini

Al prompt de clasificación que ya armamos, agrégale al final:

> Para cada submódulo, entrega el contenido ya formateado según la plantilla
> de bloques HTML que te adjunto (PLANTILLA_LECCION.md), usando exactamente
> esas clases CSS y esa estructura de `checkpoints`. No agregues estilos
> inline nuevos ni inventes clases distintas a las definidas aquí.

Y adjunta este archivo junto con los 9 Word.
