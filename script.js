const visibilidade = {};
let editMode = false;

function toggleActivities(colIndex) {
  if (editMode) return;
  visibilidade[colIndex] = !visibilidade[colIndex];
  const cells = document.querySelectorAll(`td.activity[data-col="${colIndex}"]`);
  const iconSpan = document.querySelector(`#person-${colIndex} .toggle-icon`);

  cells.forEach(cell => {
    if (visibilidade[colIndex]) {
      cell.classList.remove("hidden");
    } else {
      cell.classList.add("hidden");
    }
  });

  if (iconSpan) {
    iconSpan.textContent = visibilidade[colIndex] ? "➖" : "➕";
  }
}

function updateName(index) {
  const editable = document.querySelector(`#person-${index} .editable`);
  const name = editable.textContent.trim();
  if (!name) {
    editable.textContent = `Pessoa ${index + 1}`;
  }
}

function toggleEditMode() {
  editMode = !editMode;
  document.body.classList.toggle('edit-mode', editMode);

  document.querySelectorAll('.editable, .editable-atividade').forEach(el => {
    el.setAttribute('contenteditable', editMode);
  });

  document.querySelectorAll('.delete-person, .delete-activity, .add-person, .add-activity, .delete-pillar, .add-pillar').forEach(btn => {
    btn.style.display = editMode ? 'inline-block' : 'none';
  });

  const editBtn = document.getElementById('edit-mode-btn');
  if (editBtn) {
    editBtn.textContent = editMode ? 'Salvar' : 'Editar';
  }

  if (!editMode) {
    saveData();
  }
}

function saveData() {
  const tableHTML = document.getElementById('organograma-container').innerHTML;
  localStorage.setItem('organograma', tableHTML);
}

function loadData() {
  const saved = localStorage.getItem('organograma');
  if (saved) {
    document.getElementById('organograma-container').innerHTML = saved;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-mode");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  loadData();
});

// ➕ Salvar automaticamente ao sair da página
window.addEventListener("beforeunload", () => {
  saveData();
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-mode");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      // Se quiser salvar a preferência do usuário:
      if(document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
    // Para carregar a preferência do usuário ao abrir a página:
    if(localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  }
});
