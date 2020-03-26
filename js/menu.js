
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const menu= document.querySelector('#menu');

close.addEventListener('click', function() {
  menu.style.display = 'none';
})

open.addEventListener('click', function() {
  menu.style.display = 'flex';
})

