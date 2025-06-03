
const backgroundSelect = document.querySelector('#background-choice');
const customImageUpload = document.querySelector('#custom-image-upload');
const fileInput = document.querySelector('#custom-image');
const previewCoverUser = document.querySelector('.js-preview-cover');


backgroundSelect.addEventListener('change', function () {
  const selectedValue = backgroundSelect.value;

  if (selectedValue === 'custom') {
    customImageUpload.classList.remove('hidden'); // Muestra input uploaded 
  } else {
    customImageUpload.classList.add('hidden'); // Oculta input uploaded 

    fileInput.value = ''; // Limpiar el fichero 

    updateTheme(); // Vuelve a aplicar la temática seleccionada 
  }
});



fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageUrl = event.target.result;
      previewCover.style.backgroundImage = `url('${imageUrl}')`;
    };

    reader.readAsDataURL(file);
  } else {
    alert("Por favor, selecciona una imagen válida.");
  }
});