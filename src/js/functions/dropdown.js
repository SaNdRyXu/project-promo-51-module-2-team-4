// dropdown.js

const designToggleBtn = document.querySelector('.js-toggle-design');
const fillToggleBtn = document.querySelector('.js-toggle-fill');

const backgroundSection = document.querySelector('.background-choice');
const fillSection = document.querySelector('.fill_options');

function toggleSection(activeBtn, activeSection, otherBtn, otherSection) {
  const isVisible = !activeSection.classList.contains('hidden');

  // Toggle current section
  activeSection.classList.toggle('hidden');
  activeBtn.textContent = isVisible ? '➕' : '➖';

  // Hide the other section
  otherSection.classList.add('hidden');
  otherBtn.textContent = '➕';
}


// Inicio
// backgroundSection.classList.remove('hidden');
// fillSection.classList.add('hidden');
// designToggleBtn.textContent = '➖';
// fillToggleBtn.textContent = '➕';

// Event listeners
designToggleBtn.addEventListener('click', () => {
  toggleSection(designToggleBtn, backgroundSection, fillToggleBtn, fillSection);
});

fillToggleBtn.addEventListener('click', () => {
  toggleSection(fillToggleBtn, fillSection, designToggleBtn, backgroundSection);
});



