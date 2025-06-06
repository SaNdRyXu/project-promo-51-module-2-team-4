'use strict';


const platformOptions = document.querySelectorAll('input[name="platform"]');
const previewimagePlatform = document.querySelector('.js-imgrightbutton');

function updatePlatform() {
    const selectedPlatform = document.querySelector('input[name="platform"]:checked').value;
    const previewTop = document.getElementById('previewTop');
    const previewimagePlatform = document.getElementById('previewimagePlatform');

    previewTop.className = "preview-top"; 
    previewimagePlatform.src = "/project-promo-51-module-2-team-4/images/ps5.svg";
    previewimagePlatform.alt = "Imagen de PS5";
    

    if (selectedPlatform === "PS5") {
        previewimagePlatform.src = "/project-promo-51-module-2-team-4/images/ps5.svg";
        previewimagePlatform.alt = "Imagen de PS5";

    } else if (selectedPlatform === "PC") {
        previewimagePlatform.src = "/project-promo-51-module-2-team-4/images/pc.svg";
        previewimagePlatform.alt = "Imagen de PC";
        previewTop.className ="preview-pc";
    } else if (selectedPlatform === "Xbox") {
        previewimagePlatform.src = "/project-promo-51-module-2-team-4/images/xbox.svg";
        previewimagePlatform.alt = "Imagen de Xbox";
        previewTop.className ="preview-xbox";
    } else if (selectedPlatform === "Switch") {
        previewimagePlatform.src = "/project-promo-51-module-2-team-4/images/switch.svg";
        previewimagePlatform.alt = "Imagen de Nintendo Switch";
        previewTop.className ="preview-switch";
    }
}

// Eventos
platformOptions.forEach(radio => {
     
    radio.addEventListener('change', updatePlatform);
});

// Inicializar con la opción por defecto
updatePlatform();
