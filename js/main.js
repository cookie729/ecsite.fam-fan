'use strict'

document.getElementById('search-form').onsubmit = function(event) {
  event.preventDefault();
  const search = document.getElementById('search-form').word.value;
  document.getElementById('search-output').textContent =`「${search}」の検索中・・・`;
};

const btn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.main-nav');
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === '<i class="fa-solid fa-bars"></i>') {
    btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});