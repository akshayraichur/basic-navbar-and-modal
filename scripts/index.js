const toggleBtn = document.querySelector('.toggle');
const closeModalBtn = document.querySelector('#close-modal');
const openModalBtn = document.querySelector('#open-modal');
const modal = document.querySelector('#modal');

// toggle navigation

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

openModalBtn.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

// hide modal on outside click
window.addEventListener('click', (e) =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
