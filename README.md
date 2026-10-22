# MONOLITH · Arquitectura monolítica

Sitio educativo en español sobre arquitectura monolítica. Explica sus componentes, estructura, ventajas y límites con diagramas, ejemplos y una comparación con microservicios.

## Desarrollo en GitHub Codespaces

1. Abre este repositorio en GitHub y selecciona **Code → Codespaces → Create codespace on main**.
2. Usa **GitHub Copilot Chat** como apoyo para explorar los conceptos, revisar el código y proponer mejoras; contrasta las respuestas y comprende los cambios antes de incorporarlos.
3. En la terminal del Codespace, inicia un servidor local:

   ```bash
   python3 -m http.server 8000
   ```

4. Abre el puerto `8000` desde la pestaña **Ports** para revisar la página. Bootstrap 5.3 se obtiene del CDN oficial, por lo que esa parte requiere conexión a internet.

La página está hecha con HTML5, CSS3 y JavaScript, sin proceso de compilación. Los estilos personalizados están en `css/styles.css` y la lógica de la página en `js/main.js`.

## Publicación en GitHub Pages

El flujo de [publicación de Pages](./.github/workflows/pages.yml) despliega la página al hacer push a `main`; también puede ejecutarse manualmente.

1. En el repositorio de GitHub, abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **GitHub Actions** como origen.
3. Haz push de los cambios a `main` o ejecuta **Deploy to GitHub Pages** desde la pestaña **Actions**.
4. Espera a que finalice el flujo y abre la URL que aparece en **Settings → Pages**.

## Video de TikTok

El video se muestra mediante el reproductor integrado de TikTok en `index.html`, por lo que no es necesario guardar el archivo de video en el repositorio. Para cambiarlo, actualiza el identificador en la URL de inserción `https://www.tiktok.com/embed/v2/` y el enlace original de TikTok.
