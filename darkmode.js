// Dark Mode Persistente para qualquer página que tenha o botão #toggle-mode

function setDarkMode(active) {
  if (active) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "on");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "off");
  }
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
