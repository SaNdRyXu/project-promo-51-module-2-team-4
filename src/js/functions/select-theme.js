'use strict';

const previewCover = document.querySelector(".js-preview-cover");
previewCover.style.backgroundImage = "url('/project-promo-51-module-2-team-4/images/fantasy.png')";

const previewTitle = previewCover.querySelector('.js-cover-title');

const themeOptions = document.querySelectorAll('input[name="theme"]');

function updateTheme() {
  const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
  const backgroundChoice = document.querySelector('#background-choice').value;

  // Només canviem l’estil del títol
  previewTitle.classList.remove('fantasy-title', 'simulation-title', 'action-title', 'horror-title');

  if (selectedTheme === 'Fantasía') {
    if (backgroundChoice !== 'custom') {
      previewCover.style.backgroundImage = "url('/project-promo-51-module-2-team-4/images/fantasy.png')";
    }
    previewTitle.classList.add('fantasy-title');

  } else if (selectedTheme === 'Simulación') {
    if (backgroundChoice !== 'custom') {
      previewCover.style.backgroundImage = "url('/project-promo-51-module-2-team-4/images/simulation_6.png')";
    }
    previewTitle.classList.add('simulation-title');

  } else if (selectedTheme === 'Acción') {
    if (backgroundChoice !== 'custom') {
      previewCover.style.backgroundImage = "url('/project-promo-51-module-2-team-4/images/action.png')";
    }
    previewTitle.classList.add('action-title');

  } else if (selectedTheme === 'Terror') {
    if (backgroundChoice !== 'custom') {
      previewCover.style.backgroundImage = "url('/project-promo-51-module-2-team-4/images/horror_5.png')";
    }
    previewTitle.classList.add('horror-title');
  }
}

// Eventos
themeOptions.forEach(radio => {
  radio.addEventListener('change', updateTheme);
});





