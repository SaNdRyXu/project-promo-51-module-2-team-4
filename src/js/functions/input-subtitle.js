'use strict';

const previewSubtitleSub = document.querySelector('.js-cover-subtitle');

const themeOptionsSub = document.querySelectorAll('input[name="theme"]');
const subtitleInput = document.querySelector('.js-input-subtitle');

function updateSubtitle() {
  const text = subtitleInput.value.trim();
  previewSubtitleSub.textContent = text;

 
  previewSubtitleSub.classList.remove('fantasy-subtitle', 'action-subtitle', 'simulation-subtitle', 'horror-subtitle');

  if (!text) return; 

 
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

subtitleInput.addEventListener('input', updateSubtitle);
themeOptionsSub.forEach(radio => {
  radio.addEventListener('change', updateSubtitle);
});



