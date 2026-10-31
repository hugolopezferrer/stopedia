# Stopedia

**Version 0.4** — draft in progress. Versions advance as 0.1, 0.2, … while the app is being built and polished; when it is ready, it becomes **version 1.0**.

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

## Install

Open the published page in your phone browser and choose "Add to Home screen" / "Install app". Stopedia then works like a normal app.

## Privacy

No accounts, no server, no tracking. Your API key, your addresses, and your saved routes never leave your phone, except the requests sent to TomTom and the route you open in Google Maps.

---

# Stopedia (español)

**Versión 0.4** — borrador en avance. Las versiones avanzan como 0.1, 0.2, … mientras la app se construye y se pule; cuando esté lista, pasa a ser la **versión 1.0**.

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

## Instalación

Abre la página publicada en el navegador de tu teléfono y elige «Agregar a pantalla principal» / «Instalar app». Stopedia funciona entonces como una app normal.

## Privacidad

Sin cuentas, sin servidor, sin rastreo. Tu clave API, tus direcciones y tus rutas guardadas nunca salen de tu teléfono, salvo las consultas enviadas a TomTom y la ruta que abras en Google Maps.
