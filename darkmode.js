document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggle-mode");
  if (toggleButton) {
    toggleButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  }
}); // <--- ESSA chave E parêntese precisam existir!

