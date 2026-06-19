# Scripts del proyecto

Esta carpeta tenía antes más de 25 scripts de un solo uso (cada uno escrito para
una edición puntual de `data.js` o `app.js`, ya aplicada y ahora obsoleta). Se
limpiaron porque generaban confusión y riesgo de ejecutarlos por error.

**Regla a partir de ahora:** para agregar o corregir contenido de una lección,
edita `src/js/data.js` directamente (con str_replace o edición manual). No
crear un script nuevo de un solo uso para una sola edición de texto — eso es
exactamente lo que generó el desorden anterior.

Los scripts que quedan SÍ son utilidades reutilizables, pensadas para usarse
una y otra vez:

- **build.py** — Regenera `styles.min.css`, `data.min.js` y `app.min.js` a
  partir de los archivos fuente, y actualiza `index.html` para que apunte a
  ellos. Correr después de cualquier cambio en `src/`.

- **cache_bust.py** — Actualiza el parámetro `?v=...` de los archivos
  minificados en `index.html` con un timestamp único, para forzar que los
  navegadores descarguen la versión nueva en vez de servir la caché vieja.
  Correr siempre después de `build.py`.

- **view_module.py** — Muestra el HTML crudo de una lección de `data.js`
  buscando por título, sin tener que abrir el archivo completo de 2000+
  líneas. Uso: `python scripts/view_module.py "3.1 Préstamos"`.

- **check_groups.py** — Lista todos los `moduleGroup` de `data.js` en orden,
  útil para confirmar cómo va quedando la estructura de módulos.

- **check_titles.py** / **check_min_titles.py** — Listan todos los títulos de
  lección en `data.js` / `data.min.js` respectivamente, para verificar que no
  falte ni se haya duplicado ninguna lección.

Flujo recomendado después de agregar contenido nuevo:

```
python scripts/check_groups.py      # confirmar que los módulos están bien
python scripts/build.py             # regenerar minificados
python scripts/cache_bust.py        # forzar refresco de caché
```
