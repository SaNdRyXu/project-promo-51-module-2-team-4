const saveButton = document.querySelector('.js-save-button');
const preLink = document.querySelector('.js-prelink');

function sendData() {
  const title = document.querySelector('#title').value.trim() || 'Sin título';
  const subtitle = document.querySelector('#subtitle').value.trim() || 'Sin subtítulo';
  const ageValue = parseInt(document.querySelector('#age').value, 10) || 7; 
  const platformValue = document.querySelector('input[name="platform"]:checked')?.value;
  const companyValue = document.querySelector('#company')?.value;
  const backgroundChoice = document.querySelector('#background-choice').value || 'preset'; 
  const uploadedImage = document.querySelector('.js-preview-cover').style.backgroundImage; 
  const themeValue = document.querySelector('input[name="theme"]:checked')?.value || 'Fantasía'; 
  

  const formData = {
    field1: parseInt(backgroundChoice === 'custom' ? 1 : 2),                   
    field2: title,                                     
    field3: subtitle,                                 
    field4: themeValue,                               
    field5: ageValue,                                 
    field6: platformValue ? `/project-promo-51-module-2-team-4/images/${platformValue.toLowerCase()}.svg` : '',
    field7: companyValue ? `/project-promo-51-module-2-team-4/images/${companyValue.toLowerCase()}.svg` : '',

  };

 
  if (
    backgroundChoice === 'custom' &&
    uploadedImage &&
    uploadedImage.startsWith('url("data:image')
  ) {
  
    const base64Match = uploadedImage.match(/^url\(["']?(.+?)["']?\)$/);
    formData.photo = base64Match ? base64Match[1] : '';

  } else {
    
    switch (themeValue) {
      case 'Fantasía':
        formData.photo = '/project-promo-51-module-2-team-4/images/fantasy.png';
        break;
      case 'Simulación':
        formData.photo = '/project-promo-51-module-2-team-4/images/simulation_6.png';
        break;
      case 'Acción':
        formData.photo = '/project-promo-51-module-2-team-4/images/action.png';
        break;
      case 'Terror':
        formData.photo = '/project-promo-51-module-2-team-4/images/horror_5.png';
        break;
      default:
        formData.photo = '/project-promo-51-module-2-team-4/images/fantasy.png';
    }
  }

  console.log('Enviando datos:', formData);
  
  localStorage.setItem('formData', JSON.stringify(formData));

  fetch('https://dev.adalab.es/api/info/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log('Respuesta del servidor:', data);
        localStorage.setItem('apiData', JSON.stringify(data));
        
        const resultUrl = `result.html?id=${data.infoID}`;
        
        const resultParagraph = document.querySelector('.js-url-result');
        preLink.classList.remove('hidden');
        resultParagraph.innerHTML = `<a href="${resultUrl}" target="_blank">${resultUrl}</a>`;
      } else {
        console.error('Error en la respuesta del servidor:', data.error);
      }
    })
    .catch((error) => {
      console.error('Error en la petición fetch:', error);
    });
}

saveButton.addEventListener('click', function (event) {
  event.preventDefault(); 
  sendData();
});

