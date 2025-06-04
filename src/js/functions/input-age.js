

const inputAge = document.querySelector('.js-input-age');
const boxAge = document.querySelector('.js-box');


function pegi() {
  const age = parseInt(inputAge.value);
  boxAge.innerHTML = age;

  boxAge.classList.remove('preview-age-rojo', 'preview-age-naranja', 'preview-age');

  if (isNaN(age) || age < 3 || age > 18) {
    boxAge.innerHTML = '7';
    boxAge.classList.add('preview-age');
  }
  boxAge.classList.remove("preview-age-amarillo","preview-age-rojo","preview-age");
 
  else if (age >= 12 && age < 18) {
    boxAge.classList.add('preview-age-naranja');
  } else if (age===18){boxAge.classList.add('preview-age-rojo');
    
  } else { boxAge.classList.add('preview-age')};
}

  

  inputAge.addEventListener('input',pegi);


  