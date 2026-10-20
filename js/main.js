const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();

const localVideoSource = "video/tick%20tocks12.mp4";
const youtubeVideoUrl = "";
const videoFrame = document.getElementById("videoFrame");
const placeholder = document.getElementById("videoPlaceholder");
const localVideo = document.getElementById("localVideo");
const youtubeVideo = document.getElementById("youtubeVideo");
const videoMeta = document.getElementById("videoMeta");

function getYouTubeEmbedUrl(value) {
  try {
    const url = new URL(value);
    let videoId = "";

    if (url.hostname === "youtu.be") {
      videoId = url.pathname.slice(1);
    } else if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com" || url.hostname === "m.youtube.com") {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v") || "";
      } else if (url.pathname.startsWith("/embed/")) {
        videoId = url.pathname.split("/")[2] || "";
      }
    }

    return /^[\w-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : "";
  } catch {
    return "";
  }
}

if (localVideoSource.trim()) {
  localVideo.addEventListener("loadedmetadata", () => {
    videoFrame.classList.add("video-frame--native");
  }, { once: true });
  localVideo.addEventListener("error", () => {
    const mediaErrorCode = localVideo.error?.code;
    const errorMessage = mediaErrorCode === 2
      ? "No se pudo descargar el video. Comprueba la conexión y que el archivo esté disponible."
      : mediaErrorCode === 3
        ? "El archivo llegó, pero está incompleto, dañado o no se pudo decodificar. Vuelve a exportarlo como MP4 con video H.264 y audio AAC, y súbelo de nuevo."
        : mediaErrorCode === 4
          ? "El navegador no puede reproducir este archivo. Puede estar incompleto o dañado, o usar un códec no compatible. Vuelve a exportarlo como MP4 con video H.264 y audio AAC, y súbelo completo."
          : "No se pudo reproducir el video. Comprueba que el archivo esté completo y codificado en un formato compatible.";
    placeholder.querySelector("h3").textContent = "No se pudo cargar el video";
    placeholder.querySelector("p").textContent = errorMessage;
    placeholder.hidden = false;
    localVideo.hidden = true;
    videoMeta.textContent = "El archivo existe, pero el navegador no pudo reproducirlo.";
    console.error(`No se pudo reproducir el video local (código de error ${mediaErrorCode ?? "desconocido"}): ${localVideoSource}`);
  }, { once: true });
  localVideo.hidden = false;
  placeholder.hidden = true;
  localVideo.src = localVideoSource.trim();
} else if (youtubeVideoUrl.trim()) {
  const embedUrl = getYouTubeEmbedUrl(youtubeVideoUrl.trim());
  if (embedUrl) {
    youtubeVideo.src = embedUrl;
    youtubeVideo.hidden = false;
    placeholder.hidden = true;
  } else {
    console.error("La URL de YouTube configurada no es válida. Usa un enlace de video de youtube.com o youtu.be.");
  }
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
}
