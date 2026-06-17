# Portfolio — Alex Pérez Álvarez

Portfolio personal de **Alex Pérez Álvarez**, desarrollador backend (Java · Spring Boot · microservicios).

Sitio de una sola página: hero con diagrama de arquitectura animado, experiencia, caso de estudio (MiArbitro), stack y contacto.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** (animaciones)
- Diagramas en **SVG** propios (sin librerías de gráficos)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Scripts:

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo (hot reload) |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | ESLint |

## Estructura

```
src/
  app/
    page.tsx        # la página entera (hero, experiencia, MiArbitro, stack, contacto)
    layout.tsx      # metadata + fuentes
    globals.css     # tema, animaciones
    icon.svg        # favicon (wordmark "AP.")
  components/
    HeroMesh.tsx    # diagrama de arquitectura del hero (SVG animado)
    Logo.tsx        # wordmark "AP."
    SmartImg.tsx    # <img> con fallback si la imagen no existe
  data/
    cv.ts           # TODO el contenido del CV (single source of truth)
public/
  profile.jpg                 # foto de perfil (circular)
  images/logos/               # logos de empresas
  images/miarbitro/           # capturas: web.png, mobile.png, watch.png
```

## Editar contenido

Casi todo el texto vive en **`src/data/cv.ts`**: perfil, stats, experiencia, stack, proyecto MiArbitro, contacto y certificaciones. Edita ahí, no en los componentes.

**Imágenes** (en `public/`):
- `profile.jpg` — foto de perfil.
- `images/miarbitro/web.png · mobile.png · watch.png` — capturas del proyecto.
- `images/logos/*.png` — logos de empresas (referenciados desde `cv.ts`).

> El diagrama del hero (nodos, capas, flujo) se edita en `src/components/HeroMesh.tsx`.

## Deploy — Cloudflare Pages

El sitio es 100% estático (sin SSR ni rutas de API), así que se exporta como estático:

1. Añade a `next.config.*`:
   ```js
   const nextConfig = { output: "export" };
   ```
2. `npm run build` → genera la carpeta `out/`.
3. En Cloudflare Pages, conecta el repo con:
   - **Build command:** `npm run build`
   - **Output directory:** `out`
4. Configura el dominio propio en *Pages → Custom domains*.

---

© 2026 Alex Pérez Álvarez
