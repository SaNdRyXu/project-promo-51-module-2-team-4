const saveButton = document.querySelector('.js-save-button');

function sendData() {
  const title = document.querySelector('#title').value.trim() || 'Sin título';
  const subtitle = document.querySelector('#subtitle').value.trim() || 'Sin subtítulo';
  const ageValue = parseInt(document.querySelector('#age').value, 10) || 7; // fallback edad
  const platformValue = document.querySelector('input[name="platform"]:checked')?.value;
  const companyValue = document.querySelector('#company')?.value;
  const backgroundChoice = document.querySelector('#background-choice').value || 'preset'; // 'custom' o 'preset'
  const uploadedImage = document.querySelector('.js-preview-cover').style.backgroundImage; // background-image: url("data:image/...")
  const themeValue = document.querySelector('input[name="theme"]:checked')?.value || 'Fantasía'; // Valor de la temática seleccionada

  const formData = {
    field1: parseInt(backgroundChoice === 'custom' ? 1 : 2),                   
    field2: title,                                     // Título
    field3: subtitle,                                  // Subtítulo
    field4: themeValue,                                // Temática
    field5: ageValue,                                  // Edad recomendada
    field6: platformValue ? `images/${platformValue.toLowerCase()}.svg` : '',
    field7: companyValue ? `images/${companyValue.toLowerCase()}.svg` : '',

  };

  // Comprobar si la imagen subida es custom y está en base64 (data:image)
  if (
    backgroundChoice === 'custom' &&
    uploadedImage &&
    uploadedImage.startsWith('url("data:image')
  ) {
    // Extraemos la base64 eliminando url(" y ")
    // formData.photo = uploadedImage.slice(5, -2);
    const base64Match = uploadedImage.match(/^url\(["']?(.+?)["']?\)$/);
    formData.photo = base64Match ? base64Match[1] : '';

  } else {
    // Imagen preset según temática
    switch (themeValue) {
      case 'Fantasía':
        formData.photo = 'images/fantasy.png';
        break;
      case 'Simulación':
        formData.photo = 'images/simulation_6.png';
        break;
      case 'Acción':
        formData.photo = 'images/action.png';
        break;
      case 'Terror':
        formData.photo = 'images/horror_5.png';
        break;
      default:
        formData.photo = 'images/fantasy.png';
    }
  }

  console.log('Enviando datos:', formData);
  // Guardar formData en localStorage
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
        // Crear URL con el ID
        const resultUrl = `result.html?id=${data.infoID}`;
        // Pintar la URL en el <p> final
        const resultParagraph = document.querySelector('.js-url-result');
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
  event.preventDefault(); // Evita recarga formulario
  sendData();
});