'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const x = document.querySelector('.close-modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeKey = function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
};
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);
x.addEventListener('click', closeModal);
document.addEventListener('keydown', closeKey);
