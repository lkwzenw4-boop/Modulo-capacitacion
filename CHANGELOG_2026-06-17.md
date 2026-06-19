# Changelog — Limpieza y estandarización (17 jun 2026)

## 1. Sistema de alerts estandarizado
- Se agregó la clase `.alert-attention` (ámbar) en `styles.css`, que faltaba
  para las cajas de "Importante/Regla de Oro/SLA".
- Se reemplazaron 10 cajas de advertencia en `data.js` que usaban estilos
  inline duplicados o la clase inexistente `alert-info` por las clases reales:
  `.alert-note` (azul/info), `.alert-important` (verde/positivo),
  `.alert-warning` (rojo/crítico), `.alert-attention` (ámbar/atención).
- Se agregaron también `.flow-arrow`, `.banner-start`, `.checklist` y
  `.checklist-item` para los otros patrones que se repetían como estilo
  inline (21, 5 y 9 veces respectivamente). Las instancias viejas de estos
  tres últimos se dejaron como estaban (no estaban rotas, solo duplicadas);
  se puede normalizar después si se quiere.

## 2. Limpieza de scripts y archivos sueltos
- Se eliminaron 24 scripts de un solo uso ya ejecutados (su contenido
  hardcodeado ya está incorporado a `data.js`/`app.js`): `add_banners.py`,
  `add_banners_p2.py`, `add_debounce.py`, `add_module_script.py`,
  `append_modulo3.py`, `apply_carousel.py`, `apply_checkpoints.py`,
  `apply_recs.py`, `extract_data.py`, `fix_checkpoints.py`, `fix_comma.py`,
  `fix_data.py`, `fix_modules.py`, `format_time.py`, `generate.py`,
  `insert_module.py`, `insert_modulo4.py`, `organize.py`,
  `readd_coletillas.py`, `remove_checkpoints.py`, `remove_terms.py`,
  `update_modulo5_3.py`, `update_pdf.py`, `update_search.py`,
  `build_script.js`.
- Se eliminaron archivos sueltos de depuración no referenciados por la app:
  `headers_dump.txt`, `snippet.txt`, `snippet41.txt`, `snippet53.txt`,
  `docs/glosario_temp.txt` (su contenido ya estaba en el módulo "Glosario de
  Términos" de `data.js`).
- Quedaron 6 scripts reutilizables, documentados en `scripts/README.md`:
  `build.py`, `cache_bust.py`, `view_module.py`, `check_groups.py`,
  `check_titles.py`, `check_min_titles.py`.
- Se corrigió `build.py`: tenía una ruta absoluta de Windows quemada
  (`C:\Users\kevin\...`) que rompía el script en cualquier otra máquina.
  Ahora calcula la ruta automáticamente.
- Se corrigió `cache_bust.py`: siempre fijaba `?v=4` sin importar el valor
  anterior, por lo que el cache-busting nunca invalidaba realmente la caché
  del navegador. Ahora usa un timestamp único en cada ejecución.
- Se generalizó `view_module.py`: antes tenía hardcodeado el título de una
  sola lección; ahora acepta el título como argumento.

## 3. Esquema/plantilla para el contenido nuevo
- Se creó `docs/PLANTILLA_LECCION.md` con el esquema exacto de datos, los
  bloques HTML aprobados (usando las clases del punto 1) y una tabla de
  prioridad: 9 de las 20 lecciones existentes son apenas un párrafo (stub) y
  son las que más urge completar con el contenido de los 9 Word.

## Pendiente / sugerido para después
- Las 21 flechas de flujo, 5 banners de inicio y 9 checklists existentes
  siguen con estilo inline (funcionan bien, solo quedaron sin migrar a las
  nuevas clases por alcance de tiempo).
- Inicializar Git en el proyecto — actualmente no hay control de versiones.
