'use strict';


const platformOptions = document.querySelectorAll('input[name="platform"]');
const previewimagePlatform = document.querySelector('.js-imgrightbutton');

function updatePlatform() {
    const selectedPlatform = document.querySelector('input[name="platform"]:checked').value;

    if (selectedPlatform === "PS5") {
        previewimagePlatform.src = "images/ps5.png";
        previewimagePlatform.alt = "Imagen de la plataforma PS5";
    } else if (selectedPlatform === "PC") {
        previewimagePlatform.src = "images/pc.png";
        previewimagePlatform.alt = "Imagen de la plataforma PC";
    } else if (selectedPlatform === "Xbox") {
        previewimagePlatform.src = "images/xbox.png";
        previewimagePlatform.alt = "Imagen de la plataforma Xbox";
    } else if (selectedPlatform === "Switch") {
        previewimagePlatform.src = "images/switch.png";
        previewimagePlatform.alt = "Imagen de la plataforma Nintendo Switch";
    }
}

// Eventos
platformOptions.forEach(radio => {
     
    radio.addEventListener('change', updatePlatform);
});

// Inicializar con la opción por defecto
updatePlatform();
