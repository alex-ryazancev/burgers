///////////////// burger menu /////////////////

const openMenu = document.querySelector('.hamburger-menu-link');
closeMenu = document.querySelector('.hamburger-menu__close');
burgerMenu = document.querySelector('.hamburger-menu');
overflowHidden = document.querySelector('.wrapper')

openMenu.addEventListener('click', function (event) {
  event.preventDefault();
});

openMenu.addEventListener('click', function () {
  burgerMenu.style.display = 'flex';
})

closeMenu.addEventListener('click', function () {
  burgerMenu.style.display = 'none';
})

document.addEventListener('keyup', e => {
  let keyName = e.key;

  if (keyName === 'Escape') {
    burgerMenu.style.display = 'none';
  }
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

/////////////// modal window reviews/////////////////

const reviews = document.querySelector('.reviews');
overlay = document.querySelector('.popup');
popupText = document.querySelector('.full-review__content');
popupName = document.querySelector('.full-review__title');
closePopup = document.querySelector('.full-review__close')

reviews.addEventListener('click', e => {
  let element = e.target;

  if (element.tagName === 'A') {

    let modalText = element.previousElementSibling.innerHTML;
    let modalName = modalText.previousElementSibling.innerHTML
    
    popupName.innerHTML = modalName;
    popupText.innerHTML = modalText;
    overlay.style.display = 'flex';
  }

})

document.addEventListener('keyup', e => {
  let keyName = e.key;

  if (keyName === 'Escape') {
    overlay.style.display = 'none';
    success.style.display = 'none';
    errors.style.display = 'none';
  }
})

closePopup.addEventListener('click', function (event) {
  event.preventDefault();
});

closePopup.addEventListener('click', function () {
  overlay.style.display = 'none';
})

/////////////// slider /////////////////

const left = document.querySelector("#left");
right = document.querySelector("#right");
items = document.querySelector("#items")

right.addEventListener('click', function (event) {
  event.preventDefault();
});

right.addEventListener("click", function (e) {
  loop("right", e);
});

left.addEventListener("click", function (e) {
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

/////////////// form send /////////////////

const myForm = document.querySelector('.order__form-tag');
send = document.querySelector('.order__form-button');
errors = document.querySelector('#errors');
success = document.querySelector('#success');
closeBtn = document.querySelector('#close-btn')

send.addEventListener('click', event => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('name', myForm.elements.name.value);
  formData.append('phone', myForm.elements.phone.value);
  formData.append('comment', myForm.elements.comment.value);
  formData.append('to', 'alex-ryazancev@mail.ru');

  if (validateForm(myForm)) {

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.addEventListener('load', () => {

      if (xhr.status < 400) {
        success.style.display = 'flex';
      }
      else {
        errors.style.display = 'flex';
      }

      closeBtn.addEventListener('click', function (event) {
        event.preventDefault();
      });

      closeBtn.addEventListener('click', function () {
        success.style.display = 'none';
        errors.style.display = 'none';
      });
    });
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  if (!validateField(form.elements.street)) {
    valid = false;
  }

  if (!validateField(form.elements.home)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}

