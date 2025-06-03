

 const inputTitle = document.querySelector('.js-input-tittle');
  const coverTitle = document.querySelector('.js-cover-title');


document.addEventListener('DOMContentLoaded', function () {
 
  inputTitle.addEventListener('input', function () {
    const valor = inputTitle.value.trim();
    coverTitle.textContent = valor || "Sin título";
  });
});