# Portfolio (estático) — Mauro Neopensi

Portfolio simple y claro (fondo blanco) hecho con **HTML + CSS + JS** (sin dependencias), listo para desplegar como sitio estático en **Vercel** o **Netlify**.

## Estructura

- `index.html`: estructura y secciones
- `styles.css`: estilos (tema claro)
- `script.js`: datos de ejemplo + render (experiencia, proyectos, skills, estudios)

## Editar tu contenido

La forma más rápida es editar el objeto `portfolio` en `script.js`:

- `person.email` y `person.links.*`
- `experience[]`
- `projects[]`
- `skills.primary / skills.secondary`
- `education[]`

También puedes cambiar textos fijos en `index.html` (por ejemplo el “Sobre mí”).

## Verlo localmente

Como es estático, puedes abrir `index.html` con doble click, pero lo ideal es servirlo con un server local.

### Opción A (Python)

En la carpeta del proyecto:

```bash
python -m http.server 5173
```

Luego abre `http://localhost:5173`.

En Windows también suele funcionar:

```bash
py -m http.server 5173
```

### Opción B (VS Code / Cursor)

Si usas una extensión tipo “Live Server”, también sirve.

## Deploy en Vercel

- Crea un repo (GitHub) con estos archivos
- En Vercel: **New Project** → importas el repo
- Framework preset: **Other**
- Build command: **(vacío)**
- Output: **(vacío)** (Vercel detecta estático)

## Deploy en Netlify

- Opción rápida: “Deploy manually” y arrastras la carpeta
- O con Git: conectas el repo
- Build command: **(vacío)**
- Publish directory: **`/`** (raíz del repo)
