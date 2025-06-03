

const inputAge = document.querySelector('.js-input-age');
const boxAge = document.querySelector('.js-box');


function pegi() {
  const age = parseInt(inputAge.value);
  boxAge.innerHTML = age;

  boxAge.classList.remove('preview-age-rojo', 'preview-age-amarillo', 'preview-age');
 
  if (age > 7 && age < 18) {
    boxAge.classList.add('preview-age-amarillo');
  } else if (age===18){boxAge.classList.add('preview-age-rojo');
    
  } else { boxAge.classList.add('preview-age')};
}



inputAge.addEventListener('input',pegi);


  