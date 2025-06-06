

const designToggleBtn = document.querySelector('.js-toggle-design');
const fillToggleBtn = document.querySelector('.js-toggle-fill');

const backgroundSection = document.querySelector('.background-choice');
const fillSection = document.querySelector('.fill_options');

function toggleSection(activeBtn, activeSection, otherBtn, otherSection) {
  const isVisible = !activeSection.classList.contains('hidden');

  
  activeSection.classList.toggle('hidden');
  activeBtn.textContent = isVisible ? '➕' : '➖';

 
  otherSection.classList.add('hidden');
  otherBtn.textContent = '➕';
}






designToggleBtn.addEventListener('click', () => {
  toggleSection(designToggleBtn, backgroundSection, fillToggleBtn, fillSection);
});

fillToggleBtn.addEventListener('click', () => {
  toggleSection(fillToggleBtn, fillSection, designToggleBtn, backgroundSection);
});



