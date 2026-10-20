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

El flujo de [publicación de Pages](./.github/workflows/pages.yml) despliega la página y los videos opcionales al hacer push a `main`; también puede ejecutarse manualmente.

1. En el repositorio de GitHub, abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **GitHub Actions** como origen.
3. Haz push de los cambios a `main` o ejecuta **Deploy to GitHub Pages** desde la pestaña **Actions**.
4. Espera a que finalice el flujo y abre la URL que aparece en **Settings → Pages**.

## Video opcional

El reproductor admite una ruta relativa a un MP4 o un enlace de YouTube. En `js/main.js`, configura `localVideoSource` **o** `youtubeVideoUrl` y deja la otra variable vacía. Para YouTube se aceptan enlaces `youtube.com/watch`, `youtube.com/embed` y `youtu.be`. El flujo de Pages publica `index.html`, las carpetas `css/`, `js/` y `video/`.

No añadas archivos de video grandes al repositorio: GitHub rechaza archivos individuales de más de 100 MB y pueden hacer que el despliegue sea innecesariamente pesado. El MP4 que está en el entorno de desarrollo no se incluye por defecto. Para publicar un video local, usa una exportación optimizada en MP4 (H.264/AAC), comprueba que pese menos de 100 MB y colócala en `video/`.
