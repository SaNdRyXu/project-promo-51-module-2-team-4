'use strict';

const previewCover = document.querySelector(".js-preview-cover");
previewCover.style.backgroundImage = "url('/images/fantasy.png')";

const previewTitle = previewCover.querySelector('.js-cover-title');

const themeOptions = document.querySelectorAll('input[name="theme"]');

function updateTheme() {

    const selectedTheme = document.querySelector('input[name="theme"]:checked').value;

    // Eliminamos todas las clases anteriores
    previewTitle.classList.remove('fantasy-title', 'simulation-title', 'action-title', 'horror-title');

    if (selectedTheme === 'Fantasía') {
        previewCover.style.backgroundImage = "url('/images/fantasy.png')";
        previewTitle.classList.add('fantasy-title');
    } else if (selectedTheme === 'Simulación') {
        previewCover.style.backgroundImage = "url('/images/simulation.jpg')"; 
        previewTitle.classList.add('simulation-title');
    } else if (selectedTheme === 'Acción') {
        previewCover.style.backgroundImage = "url('/images/action.png')";
        previewTitle.classList.add('action-title');
    } else if (selectedTheme === 'Terror') {
        previewCover.style.backgroundImage = "url('/images/horror_2.jpg')";
        previewTitle.classList.add('horror-title');
    }
}


// Eventos
themeOptions.forEach(radio => {
  radio.addEventListener('change', updateTheme);
});




