# Stopedia

**Version 0.13** — draft in progress. Versions advance as 0.1, 0.2, … while the app is being built and polished; when it is ready, it becomes **version 1.0**.

New in 0.13 (October 31, 2026): the “Your TomTom key” panel shows your key as applied. Once a key is saved, the panel shows a calm “API key applied” line with the key masked — only its last 4 characters visible — and an “Edit API key” button, instead of the bare input; editing opens the field empty, with Save and Cancel. Once entered, the key stays saved on the device until you edit or replace it, so you don't type it again on each visit. And if TomTom ever rejects the saved key (a 401 error), the panel flags it — “The saved key did not work” — and opens in edit mode so you can fix it, instead of showing an “applied” badge that doesn't work.

New in 0.12 (October 31, 2026): the app remembers your work. Everything you type — start, stops (in the order you leave them), destination and country — is autosaved on the phone as you go, and if you close Stopedia and come back, it is all right where you left it, including the last built route and its Google Maps link; restoring it makes no TomTom calls at all. After a route is built, a reminder asks “Do you want to save this route?” — routes you don't save stay only as your current work and are never added to Saved routes. A discreet “New route” button clears the current work when you are done with it; saved routes and your TomTom key are not touched.

New in 0.11 (October 31, 2026): a calmer look. A Claude-like single column (up to 720px), content grouped in rounded cards with hairline borders and very soft shadows, big quiet headings and generous whitespace, in the Huis colors: paper background, navy ink text, and Huis orange used sparingly for accents, chevrons and focus rings. Nothing about how the app works changed.

New in 0.10 (October 31, 2026): worldwide support. A country selector (36 countries) at the top of the route panel drives everything else: address lookup now asks TomTom about the selected country, the sheet reader splits addresses at that country's postal codes — or, in countries whose addresses carry no postal code, one address per blank-line block — the review screen flags a missing postal code using the same patterns, and the photo reader reads in the country's language (English, Spanish, Portuguese, French, German, Italian, Dutch or Japanese).

New in 0.9 (October 31, 2026): the page is organized into two collapsible panels — “Build a route” (addresses, photo and list tools, review screen, results and saved routes) and “Your TomTom key” (the key field, its save/test button and the step-by-step guide). If no key is saved, the key panel is the one that opens first. And if you try to build a route without a key, Stopedia does not call TomTom: it opens the key panel and explains what to do — create the free account, create the API key, copy the key itself from the “Key” column (not the ID), and paste it in the panel.

New in 0.8 (October 31, 2026): privacy fix — the example addresses in the start and destination fields are now generic sample addresses; no personal addresses appear anywhere in the app.

New in 0.7 (released together with 0.6 as version 0.7 on October 31, 2026): full-sheet scanning. Photograph a whole page of addresses; Stopedia reads it on the phone itself, splits it into addresses at each ZIP code, and opens the review screen. From that screen you can also share the photo with your AI app, when the browser supports sharing files.

New in 0.6 (released together with 0.7 as version 0.7 on October 31, 2026): scan one address at a time with the camera — the reading happens on your phone (the Tesseract.js reader loads only when you start a scan), and the result lands in a stop box for you to check. Also new: paste-a-list import, the mandatory review screen for everything read or pasted (editable rows, a ⚠ mark on addresses that look incomplete or badly read, and Apply sends them to the stop boxes), and the "Ask my AI to help with the route" button — it opens ChatGPT, Claude, Perplexity or Grok with the question already written; for Gemini, which does not accept the question in a link, the question is copied so you can paste it.

New in 0.5: drag to reorder by hand. Every stop box and every stop in the ordered route has a ⠿ handle — press and hold it (finger or mouse) and drag. The optimized order is the starting point; the order you leave is the order the Google Maps link and the saved route use.

New in 0.4: the map provider is now TomTom (no credit card required). Address lookup uses TomTom's search service, and the stop order comes from TomTom's own waypoint optimizer, which returns the fastest order directly. The in-app key guide now matches TomTom step by step, including how to copy the full key from the keys list.

New in 0.3: eight individual stop boxes (one address per box, in any order; filled boxes get a check mark, empty boxes are ignored, and pasting a list spreads the addresses across the boxes) — and real optimization with actual road travel times. If road times are unavailable, it falls back to ordering by straight-line closeness and says so.

New in 0.2: a guided setup inside the app — numbered steps, a button that opens the provider to create the free account, and an automatic test that confirms the pasted API key works.

**Your stops, in the right order.**

Stopedia is a small web app (PWA) for people who visit several addresses in one trip — delivery drivers, shoppers, field workers, anyone with a list of stops.

You paste a start address, a final destination, and your stops (one per box). Stopedia finds each address on the map with the [TomTom](https://my.tomtom.com) search service, asks TomTom for the fastest order of stops, and gives you one button that opens the finished route in Google Maps.

## Saved routes

After building a route you can save it with a name. Saved routes stay in a list on your phone, ready to open in Maps another day. You can also edit a saved route — remove stops, add new ones — and save it again. Routes are stored only on your device (browser local storage), together with their map coordinates, so reopening a saved route costs no geocoding calls.

## What you need

1. A free TomTom account: [my.tomtom.com](https://my.tomtom.com) (free tier, no credit card). Create a key with all products selected, then copy the key itself from the "Key" column of the keys list — not the key's ID.
2. Open Stopedia, paste the key once (step 1 on the page). The key is stored only on your phone.
3. Build routes.

## Limits

- Google Maps links accept up to 10 points in total (start + up to 8 stops + destination).
- Stop order is optimized by TomTom with real road travel times (the fastest order for the given stops). Those are typical road times, not live traffic — Google Maps keeps adjusting each leg with live traffic while you drive.
- An internet connection is required to geocode new addresses.
- Reading addresses from a photo needs an internet connection the first time you scan, while the on-phone reader loads. Photo reading is never perfect — blurry photos and handwriting read poorly — which is why every scanned or pasted address passes through the review screen before it is used.

## Install

Open the published page in your phone browser and choose "Add to Home screen" / "Install app". Stopedia then works like a normal app.

## Privacy

No accounts, no server, no tracking. Your API key, your addresses, and your saved routes never leave your phone, except the requests sent to TomTom and the route you open in Google Maps.

---

# Stopedia (español)

**Versión 0.13** — borrador en avance. Las versiones avanzan como 0.1, 0.2, … mientras la app se construye y se pule; cuando esté lista, pasa a ser la **versión 1.0**.

Nuevo en la 0.13 (31 de octubre de 2026): el panel «Tu clave de TomTom» muestra la clave como aplicada. Cuando hay una clave guardada, el panel enseña una línea tranquila «Clave API aplicada» con la clave enmascarada — solo se ven sus últimos 4 caracteres — y un botón «Editar clave API», en vez del campo desnudo; al editar, el campo se abre vacío, con Guardar y Cancelar. Una vez ingresada, la clave queda guardada en el aparato hasta que la edites o la reemplaces, así que no hay que escribirla en cada visita. Y si TomTom alguna vez rechaza la clave guardada (error 401), el panel lo marca — «La clave guardada no funcionó» — y se abre en modo de edición para que la corrijas, en vez de mostrar una insignia de «aplicada» que no funciona.

Nuevo en la 0.12 (31 de octubre de 2026): la app recuerda tu trabajo. Todo lo que escribes — salida, paradas (en el orden en que las dejas), destino y país — se guarda solo en el teléfono sobre la marcha, y si cierras Stopedia y vuelves, todo está tal como lo dejaste, incluida la última ruta armada y su enlace de Google Maps; restaurarla no hace ninguna llamada a TomTom. Después de armar una ruta, un recordatorio pregunta «¿Quieres guardar esta ruta?»: las rutas que no guardas quedan solo como tu trabajo actual y nunca se agregan a Rutas guardadas. Un botón discreto «Nueva ruta» limpia el trabajo actual cuando ya terminaste con él; las rutas guardadas y tu clave de TomTom no se tocan.

Nuevo en la 0.11 (31 de octubre de 2026): un aspecto más tranquilo. Una sola columna estilo Claude (hasta 720px), el contenido agrupado en tarjetas redondeadas con bordes finos y sombras muy suaves, títulos grandes y serenos y mucho aire, en los colores de Huis: fondo papel, texto tinta azul marino y el naranja Huis usado con medida en acentos, flechas y anillos de foco. No cambió nada de cómo funciona la app.

Nuevo en la 0.10 (31 de octubre de 2026): soporte mundial. Un selector de país (36 países) arriba del panel de la ruta manda en todo lo demás: la búsqueda de direcciones ahora le pregunta a TomTom por el país elegido, el lector de hojas parte las direcciones en los códigos postales de ese país — o, en países cuyas direcciones no llevan código postal, una dirección por cada bloque separado por líneas en blanco —, la pantalla de revisión marca la falta del código postal con esos mismos patrones, y el lector de fotos lee en el idioma del país (inglés, español, portugués, francés, alemán, italiano, neerlandés o japonés).

Nuevo en la 0.9 (31 de octubre de 2026): la página se organiza en dos pestañas desplegables — «Armar una ruta» (direcciones, herramientas de foto y lista, pantalla de revisión, resultados y rutas guardadas) y «Tu clave de TomTom» (el campo de la clave, su botón de guardar y probar, y la guía paso a paso). Si no hay clave guardada, el panel que se abre primero es el de la clave. Y si intentas armar una ruta sin clave, Stopedia no llama a TomTom: abre el panel de la clave y explica qué hacer — crear la cuenta gratuita, crear la clave API, copiar la clave misma desde la columna «Key» (no el ID) y pegarla en el panel.

Nuevo en la 0.8 (31 de octubre de 2026): corrección de privacidad — las direcciones de ejemplo en los campos de salida y destino ahora son direcciones genéricas de muestra; no aparece ninguna dirección personal en la app.

Nuevo en la 0.7 (publicada junto con la 0.6 como versión 0.7 el 31 de octubre de 2026): escaneo de la hoja completa. Fotografías una página entera de direcciones; Stopedia la lee en el propio teléfono, la parte en direcciones en cada código postal y abre la pantalla de revisión. Desde esa pantalla también puedes compartir la foto con tu aplicación de IA, cuando el navegador permite compartir archivos.

Nuevo en la 0.6 (publicada junto con la 0.7 como versión 0.7 el 31 de octubre de 2026): escaneo de una dirección a la vez con la cámara — la lectura ocurre en tu teléfono (el lector Tesseract.js se carga solo cuando empiezas un escaneo) y el resultado cae en una casilla de parada para que lo revises. También nuevo: la importación pegando una lista, la pantalla de revisión obligatoria para todo lo leído o pegado (filas editables, marca ⚠ en las direcciones que se ven incompletas o mal leídas, y Aplicar las manda a las casillas), y el botón «Pedirle a mi IA que me ayude con la ruta» — abre ChatGPT, Claude, Perplexity o Grok con la pregunta ya escrita; para Gemini, que no acepta la pregunta en un enlace, la pregunta se copia para que la pegues.

Nuevo en la 0.5: arrastrar para reordenar a mano. Cada casilla de parada y cada parada de la ruta ordenada tiene un asa ⠿: mantenla pulsada (dedo o mouse) y arrastra. El orden optimizado es el punto de partida; el orden que dejes es el que usan el enlace de Google Maps y la ruta guardada.

Nuevo en la 0.4: el proveedor de mapas ahora es TomTom (no pide tarjeta). La búsqueda de direcciones usa el servicio de búsqueda de TomTom, y el orden de las paradas lo da el optimizador de rutas de TomTom, que devuelve directamente el orden más rápido. La guía de la clave dentro de la app ahora sigue a TomTom paso a paso, incluido cómo copiar la clave completa desde la lista de llaves.

Nuevo en la 0.3: ocho casillas individuales de paradas (una dirección por casilla, en cualquier orden; las llenas se marcan con un check, las vacías se ignoran, y pegar una lista reparte las direcciones entre las casillas) — y optimización real con los tiempos reales por calle. Si los tiempos por calle no están disponibles, ordena por cercanía en línea recta y lo avisa.

Nuevo en la 0.2: una guía de instalación dentro de la app — pasos numerados, un botón que abre el proveedor para crear la cuenta gratuita, y una prueba automática que confirma que la clave API pegada funciona.

**Tus paradas, en el orden correcto.**

Stopedia es una aplicación web pequeña (PWA) para quienes visitan varias direcciones en un mismo recorrido: repartidores, compradores, personal de campo, cualquiera con una lista de paradas.

Pegas una dirección de salida, un destino final y tus paradas (una por casilla). Stopedia busca cada dirección en el mapa con el servicio de búsqueda de [TomTom](https://my.tomtom.com), le pide a TomTom el orden más rápido de paradas, y te da un solo botón que abre la ruta terminada en Google Maps.

## Rutas guardadas

Después de armar una ruta puedes guardarla con un nombre. Las rutas guardadas quedan en una lista en tu teléfono, listas para abrirse en Maps otro día. También puedes editar una ruta guardada — quitar paradas, agregar otras — y guardarla de nuevo. Las rutas se guardan solo en tu aparato (almacenamiento local del navegador), junto con sus coordenadas, así que reabrir una ruta guardada no gasta llamadas de geocodificación.

## Qué necesitas

1. Una cuenta gratuita de TomTom: [my.tomtom.com](https://my.tomtom.com) (nivel gratuito, sin tarjeta). Crea una llave con todos los productos seleccionados y copia la clave misma desde la columna «Key» de la lista de llaves, no el ID de la llave.
2. Abre Stopedia y pega la clave una sola vez (paso 1 de la página). La clave se guarda solo en tu teléfono.
3. A armar rutas.

## Límites

- Los enlaces de Google Maps aceptan hasta 10 puntos en total (salida + hasta 8 paradas + destino).
- El orden de las paradas lo optimiza TomTom con los tiempos reales por calle (el orden más rápido para esas paradas). Son tiempos típicos de calle, no tráfico en vivo: Google Maps sigue ajustando cada tramo con el tráfico mientras manejas.
- Se necesita conexión a internet para geocodificar direcciones nuevas.
- Leer direcciones de una foto necesita conexión a internet la primera vez que escaneas, mientras se carga el lector del teléfono. La lectura de fotos nunca es perfecta — las fotos borrosas y la letra a mano se leen mal — y por eso toda dirección escaneada o pegada pasa por la pantalla de revisión antes de usarse.

## Instalación

Abre la página publicada en el navegador de tu teléfono y elige «Agregar a pantalla principal» / «Instalar app». Stopedia funciona entonces como una app normal.

## Privacidad

Sin cuentas, sin servidor, sin rastreo. Tu clave API, tus direcciones y tus rutas guardadas nunca salen de tu teléfono, salvo las consultas enviadas a TomTom y la ruta que abras en Google Maps.
