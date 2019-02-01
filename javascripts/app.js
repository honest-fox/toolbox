import "./modules";

function bootstrap() {}

((window, document) => {
  if (document.readyState === "complete" || document.readyState !== "loading") {
    bootstrap();
  } else {
    document.addEventListener("DOMContentLoaded", bootstrap);
  }
})(window, document);
