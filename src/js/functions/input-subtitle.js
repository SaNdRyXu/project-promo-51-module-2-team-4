'use strict';

const previewCoverSub = document.querySelector(".js-preview-cover");
const previewSubtitleSub = previewCoverSub.querySelector('.js-cover-subtitle');

const themeOptionsSub = document.querySelectorAll('input[name="theme"]');
const subtitleInput = document.querySelector('.js-input-subtitle');

function updateSubtitle() {
  const text = subtitleInput.value.trim();
  previewSubtitleSub.textContent = text;

  // Eliminar classes de subtítol
  previewSubtitleSub.classList.remove('fantasy-subtitle', 'action-subtitle', 'simulation-subtitle', 'horror-subtitle');

  if (!text) return; // si no hi ha text, no afegim cap classe

  // Obtenim el tema seleccionat
  const selectedTheme = document.querySelector('input[name="theme"]:checked').value;

  if (selectedTheme === 'Fantasía') {
    previewSubtitleSub.classList.add('fantasy-subtitle');
  } else if (selectedTheme === 'Simulación') {
    previewSubtitleSub.classList.add('simulation-subtitle');
  } else if (selectedTheme === 'Acción') {
    previewSubtitleSub.classList.add('action-subtitle');
  } else if (selectedTheme === 'Terror') {
    previewSubtitleSub.classList.add('horror-subtitle');
  }
}

// Afegim els event listeners
subtitleInput.addEventListener('input', updateSubtitle);
themeOptionsSub.forEach(radio => {
  radio.addEventListener('change', updateSubtitle);
});



