# Stopedia

**Your stops, in the right order.**

Stopedia is a small web app (PWA) for people who visit several addresses in one trip — delivery drivers, shoppers, field workers, anyone with a list of stops.

You paste a start address, a final destination, and your stops (one per line). Stopedia finds each address on the map with the [HERE](https://platform.here.com) geocoding service, orders the stops from nearest to nearest, and gives you one button that opens the finished route in Google Maps.

## Saved routes

After building a route you can save it with a name. Saved routes stay in a list on your phone, ready to open in Maps another day. You can also edit a saved route — remove stops, add new ones — and save it again. Routes are stored only on your device (browser local storage), together with their map coordinates, so reopening a saved route costs no geocoding calls.

## What you need

1. A free HERE account: [platform.here.com](https://platform.here.com) (free tier, no credit card). Create a project and copy your API key.
2. Open Stopedia, paste the key once (step 1 on the page). The key is stored only on your phone.
3. Build routes.

## Limits

- Google Maps links accept up to 10 points in total (start + up to 8 stops + destination).
- Stop order is nearest-neighbour (a good, simple heuristic), not a full traffic-aware optimization.
- An internet connection is required to geocode new addresses.

## Install

Open the published page in your phone browser and choose "Add to Home screen" / "Install app". Stopedia then works like a normal app.

## Privacy

No accounts, no server, no tracking. Your API key, your addresses, and your saved routes never leave your phone, except the geocoding requests sent to HERE and the route you open in Google Maps.

---

# Stopedia (español)

**Tus paradas, en el orden correcto.**

Stopedia es una aplicación web pequeña (PWA) para quienes visitan varias direcciones en un mismo recorrido: repartidores, compradores, personal de campo, cualquiera con una lista de paradas.

Pegas una dirección de salida, un destino final y tus paradas (una por línea). Stopedia busca cada dirección en el mapa con el servicio de geocodificación de [HERE](https://platform.here.com), ordena las paradas de la más cercana a la siguiente, y te da un solo botón que abre la ruta terminada en Google Maps.

## Rutas guardadas

Después de armar una ruta puedes guardarla con un nombre. Las rutas guardadas quedan en una lista en tu teléfono, listas para abrirse en Maps otro día. También puedes editar una ruta guardada — quitar paradas, agregar otras — y guardarla de nuevo. Las rutas se guardan solo en tu aparato (almacenamiento local del navegador), junto con sus coordenadas, así que reabrir una ruta guardada no gasta llamadas de geocodificación.

## Qué necesitas

1. Una cuenta gratuita de HERE: [platform.here.com](https://platform.here.com) (nivel gratuito, sin tarjeta). Crea un proyecto y copia tu clave API.
2. Abre Stopedia y pega la clave una sola vez (paso 1 de la página). La clave se guarda solo en tu teléfono.
3. A armar rutas.

## Límites

- Los enlaces de Google Maps aceptan hasta 10 puntos en total (salida + hasta 8 paradas + destino).
- El orden de las paradas es por cercanía (vecino más cercano, una heurística buena y sencilla), no una optimización completa con tráfico.
- Se necesita conexión a internet para geocodificar direcciones nuevas.

## Instalación

Abre la página publicada en el navegador de tu teléfono y elige «Agregar a pantalla principal» / «Instalar app». Stopedia funciona entonces como una app normal.

## Privacidad

Sin cuentas, sin servidor, sin rastreo. Tu clave API, tus direcciones y tus rutas guardadas nunca salen de tu teléfono, salvo las consultas de geocodificación a HERE y la ruta que abras en Google Maps.
