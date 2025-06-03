

 const inputAge = document.querySelector('.js-input-age');
  const boxAge = document.querySelector('.js-box-age');

document.addEventListener('age', () => {
 

  inputAge.addEventListener('input', () => {
    const edad = inputAge.value;
    boxAge.textContent = edad ? `Edad mínima: ${edad}` : 'Aquí va la edad mínima siempre requerida';
  });
});