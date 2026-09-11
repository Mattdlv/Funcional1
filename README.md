# Flor & Mati — Web de la boda (04.12.2026)

Web de invitación de boda, mobile-first, construida con React + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Cómo correrla en local

```bash
npm install
npm run dev
```

## Cómo compilarla

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para desplegar (por ejemplo en Vercel: "Import Project" → framework Vite → build command `npm run build` → output `dist`).

## ⚠️ Datos que faltan completar

Todos los datos reales que aún no fueron provistos están marcados como `"[COMPLETAR]"` dentro de:

```
src/config/weddingConfig.ts
```

Antes de publicar la web, completá ahí:

- `venue.name`, `venue.address`, `venue.cityProvince`, `venue.mapUrl` — lugar y link de Google Maps.
- `menus` — nombre, precio, descripción e ítems incluidos de cada menú (podés agregar tantos objetos como menús tengas).
- `payment.alias`, `payment.holder`, `payment.cuit`, `payment.bank`, `payment.cbu` — datos bancarios reales.
- `gifts.alias`, `gifts.whatsappUrl` — alias de regalos y link de WhatsApp (formato `https://wa.me/549XXXXXXXXXX`).
- `eventDurationHours` — si la duración estimada del evento (usada en el calendario) es distinta a 7 horas.

También reemplazá `public/og-image.svg` por una foto real de la pareja (formato recomendado: 1200×630px, JPG o PNG) si querés una vista previa con foto al compartir el link por WhatsApp — el archivo actual es una imagen de marca de agua ilustrativa, no fue inventada como dato de la boda sino como imagen de reemplazo temporal.

## ⚠️ Advertencia "allow-scripts" al instalar (Vercel / npm reciente)

Versiones nuevas de npm (11.16+) bloquean por defecto los scripts de instalación (`postinstall`) de las dependencias, y vas a ver una advertencia como:

```
npm warn allow-scripts 1 package has install scripts not yet covered by allowScripts:
npm warn allow-scripts   esbuild@0.21.5 (postinstall: node install.js)
```

Es el script que descarga el binario nativo de `esbuild` (una dependencia de Vite). Ya dejamos configurado `vercel.json` con:

```json
"installCommand": "npm install --allow-scripts=esbuild"
```

para que Vercel lo apruebe automáticamente en cada deploy. Si corrés `npm install` en tu máquina y ves la misma advertencia, podés ignorarla (por ahora sigue siendo solo un warning) o correr una vez:

```bash
npm install --allow-scripts=esbuild
```

## Estructura

```
src/
  config/weddingConfig.ts   → toda la información editable
  components/               → una sección por componente
  hooks/                    → useCountdown, usePrefersReducedMotion
  utils/                    → calendario (.ics + Google Calendar), clipboard, formato, fechas
```

## Verificado

- Revisión manual de tipos con TypeScript (sin errores de lógica; los únicos avisos detectados se debían a la falta de `@types/react`/tipos de Vite en el entorno de verificación, que se resuelven solos al instalar las dependencias reales con `npm install`).
- Countdown correcto en horario de Argentina (UTC-3, sin horario de verano).
- Calculadora de menú con validación de enteros positivos.
- Botones "copiar" con feedback visual y fallback para WebViews (WhatsApp in-app browser).
- Google Calendar y archivo `.ics` generados dinámicamente a partir de la config.
- Sin scroll horizontal, probado en anchos desde 360px hasta 1440px+.
- Animaciones respetan `prefers-reduced-motion`.
