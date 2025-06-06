import '../scss/main.scss';

'use strict';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
  fetch(`https://dev.adalab.es/api/info/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        const card = data.data;

        console.log('Datos recibidos:', card);

        
        const titleElement = document.querySelector('.js-cover-title');
        const subtitleElement = document.querySelector('.js-cover-subtitle');
        const cover = document.querySelector('.js-preview-cover');
        const platformImg = document.querySelector('.js-imgrightbutton');
        const companyImg = document.querySelector('.js-cover-company');
        const boxAge = document.querySelector('.js-box');

       
        const title = card.field2;
        titleElement.textContent = title && title.toLowerCase() !== 'sin título' ? title : '';

        
        const subtitle = card.field3.toUpperCase();
        subtitleElement.textContent = subtitle && subtitle.toLowerCase() !== 'sin subtítulo' ? subtitle : '';

        
        const theme = card.field4?.toLowerCase(); 

     
        titleElement.classList.remove('fantasy-title', 'simulation-title', 'action-title', 'horror-title');
        if (theme === 'fantasía') {
          titleElement.classList.add('fantasy-title');
        } else if (theme === 'simulación') {
          titleElement.classList.add('simulation-title');
        } else if (theme === 'acción') {
          titleElement.classList.add('action-title');
        } else if (theme === 'terror') {
          titleElement.classList.add('horror-title');
        }

       
        subtitleElement.classList.remove('fantasy-subtitle', 'simulation-subtitle', 'action-subtitle', 'horror-subtitle');
        if (subtitle && subtitle.toLowerCase() !== 'sin subtítulo') {
          if (theme === 'fantasía') {
            subtitleElement.classList.add('fantasy-subtitle');
          } else if (theme === 'simulación') {
            subtitleElement.classList.add('simulation-subtitle');
          } else if (theme === 'acción') {
            subtitleElement.classList.add('action-subtitle');
          } else if (theme === 'terror') {
            subtitleElement.classList.add('horror-subtitle');
          }
        }

        
       
        boxAge.textContent = card.field5 || '7';
        const age = parseInt(card.field5);

        boxAge.classList.remove('preview-age-rojo', 'preview-age-naranja', 'preview-age-amarillo', 'preview-age');

        if (isNaN(age) || age < 3 || age > 18) {
          boxAge.textContent = '7';
          boxAge.classList.add('preview-age');
        } else {
          boxAge.textContent = age;
        
          if (age >= 12 && age < 18) {
            boxAge.classList.add('preview-age-naranja');
          } else if (age === 18) {
            boxAge.classList.add('preview-age-rojo');
          } else {
            boxAge.classList.add('preview-age');
          }
        }


       
        if (platformImg && card.field6) {
          platformImg.src = card.field6;
        
          const previewTop = document.getElementById('previewTop');
        
          previewTop.classList.remove('preview-pc', 'preview-xbox', 'preview-switch');
        
          const platformUrl = card.field6.toLowerCase();
        
          if (platformUrl.includes('pc')) {
            previewTop.classList.add('preview-pc');
          } else if (platformUrl.includes('xbox')) {
            previewTop.classList.add('preview-xbox');
          } else if (platformUrl.includes('switch')) {
            previewTop.classList.add('preview-switch');
          }
        }


       
        if (companyImg && card.field7) {
          companyImg.src = card.field7;
        }

        
        if (cover && card.photo) {
          cover.style.backgroundImage = `url("${card.photo}")`;
        }

      } else {
        console.error('Error del servidor:', data.error);
      }
    })
    .catch((err) => {
      console.error('Error en el fetch GET:', err);
    });
} else {
  console.log('No se ha encontrado ningún id en la URL.');
}


