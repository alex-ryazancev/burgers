///////////////// burger menu /////////////////

let open = document.querySelector('#open');
let close = document.querySelector('#close');
let burger = document.querySelector('#burger');

open.addEventListener('click', function (event) {
  event.preventDefault();
});

open.addEventListener('click', function () {
  burger.style.display = 'flex';
})

close.addEventListener('click', function () {
  burger.style.display = 'none';
})

///////////////// horizontal accordion /////////////////

const menu = document.querySelector('.menu'),
  accoItem = document.querySelectorAll('.menu-acco__item'),
  accoItemLength = accoItem.length;

menu.addEventListener('click', e => {
  for (let i = 0; i < accoItemLength; i++) {
    accoItem[i].classList.remove('menu-acco__item—active');
  }
});

for (let i = 0; i < accoItemLength; i++) {
  accoItem[i].addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();

    if (accoItem[i].classList.contains('menu-acco__item—active')) 
    {
      accoItem[i].classList.remove('menu-acco__item—active');
    }
    else {
      for (let i = 0; i < accoItemLength; i++) {
        accoItem[i].classList.remove('menu-acco__item—active');
      }
      accoItem[i].classList.add('menu-acco__item—active');
    }
})
}

///////////////// vertical accordion /////////////////

