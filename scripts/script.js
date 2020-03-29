///////////////// burger menu /////////////////

const openMenu = document.querySelector('.hamburger-menu-link'),
  closeMenu = document.querySelector('.hamburger-menu__close'),
  burgerMenu = document.querySelector('.hamburger-menu');

openMenu.addEventListener('click', function (event) {
  event.preventDefault();
});

openMenu.addEventListener('click', function () {
  burgerMenu.style.display = 'flex';
})

closeMenu.addEventListener('click', function () {
  burgerMenu.style.display = 'none';
})

///////////////// horizontal accordion /////////////////

const menu = document.querySelector('.menu'),
  accoItem = document.querySelectorAll('.menu-acco__item'),
  accoItemLength = accoItem.length;

menu.addEventListener('click', e => {
  for (let i = 0; i < accoItemLength; i++) {
    accoItem[i].classList.remove('menu-acco__item--active');
  }
});

for (let i = 0; i < accoItemLength; i++) {
  accoItem[i].addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();

    if (accoItem[i].classList.contains('menu-acco__item--active')) {
      accoItem[i].classList.remove('menu-acco__item--active');
    }
    else {
      for (let i = 0; i < accoItemLength; i++) {
        accoItem[i].classList.remove('menu-acco__item--active');
      }
      accoItem[i].classList.add('menu-acco__item--active');
    }
  })
}

/////////////// vertical accordion /////////////////

const team = document.querySelector('.team'),
  teamAccoItem = document.querySelectorAll('.team-acco__item'),
  teamAccoItemLength = teamAccoItem.length;

team.addEventListener('click', e => {
  for (let i = 0; i < teamAccoItemLength; i++) {
    teamAccoItem[i].classList.remove('team-acco__item--active');
  }
});

for (let i = 0; i < teamAccoItemLength; i++) {
  teamAccoItem[i].addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();

    if (teamAccoItem[i].classList.contains('team-acco__item--active')) {
      teamAccoItem[i].classList.remove('team-acco__item--active');
    }
    else {
      for (let i = 0; i < teamAccoItemLength; i++) {
        teamAccoItem[i].classList.remove('team-acco__item--active');
      }
      teamAccoItem[i].classList.add('team-acco__item--active');
    }
  })
}

/////////////// modal window /////////////////

const reviews = document.querySelector('.reviews'), 
overlay = document.querySelector('.overlay'), 
popupText = document.querySelector('.popup__text');

reviews.addEventListener('click', e => {
  let element = e.target;

  if (element.tagName = 'BUTTON') {
    let modalText = element.previousElementsibling.innerHTML

    popupText.innerHTML = modalText; 
    overlay.style.display = 'block';
  }
})

document.addEventListener('keyup', e => {
  let keyName = e.key;
  if (keyName === 'Escape') {
    overlay.style.dispLay = 'none';
  }
})

/////////////// slider /////////////////

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener('click', function (event) {
  event.preventDefault();
});

right.addEventListener("click", function(e) {
  loop("right", e);
});
 
left.addEventListener("click", function(e) {
  loop("left", e);
});

function loop(direction, e) {
  e.preventDefault();
  if (direction === "right") {
    items.appendChild(items.firstElementChild);

  } else {
    items.insertBefore(items.lastElementChild, 
      items.firstElementChild);
  }
}
