
document.addEventListener('DOMContentLoaded', () => {
    // Recuperar los datos guardados
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData) {
        // Obtener los elementos del DOM donde quieres pintar la info
        document.querySelector('.js-resultitle').textContent = storedData.field2;
        document.querySelector('.js-resultsubtitle').textContent = storedData.field3;
        document.querySelector('.js-resultheme').textContent = storedData.field4;
        document.querySelector('.js-resultage').textContent = `Edad recomendada: ${storedData.field5}`;
        
        // Pintar imágenes de plataforma y empresa
        document.querySelector('.js-resultplatform-logo').src = storedData.field6;
        document.querySelector('.js-resultcompany-logo').src = storedData.field7;

        // Mostrar la imagen de fondo
        document.querySelector('.js-resultpreview-image').src = storedData.photo;
    } else {
        console.error("No se encontraron datos en el localStorage.");
    }
});