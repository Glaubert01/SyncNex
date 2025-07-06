// Dark Mode Persistente para qualquer página que tenha o botão #toggle-mode
// Troca o src da logo dinamicamente

function setDarkMode(active) {
  if (active) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "on");
    switchLogoDark(true);
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "off");
    switchLogoDark(false);
  }
}

// Troca o src da logo para dark ou light
function switchLogoDark(isDark) {
  // Seleciona todas as imagens da logo
  const logos = document.querySelectorAll("img.logo-csn");
  logos.forEach(img => {
    img.src = isDark
      ? "./assets/logo-csn-darkmode.webp"
      : "./assets/logo-csn.png";
  });
}

function setupDarkMode() {
  const toggleButton = document.getElementById("toggle-mode");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const isDark = !document.body.classList.contains("dark-mode");
      setDarkMode(isDark);
    });
  }

  // Aplica o modo salvo ao carregar
  const savedMode = localStorage.getItem("darkMode");
  setDarkMode(savedMode === "on");
}

// Garante que o script será executado após o DOM estar pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupDarkMode);
} else {
  setupDarkMode();
}

