const buttonEdit = document.querySelector('#open__popup-edit');
const popup = document.querySelector('.popup__edit');
const buttonClose = document.querySelector('.popup__close-edit');
const inputs = document.querySelectorAll('#popup__input-edit');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');
const popupForm = document.querySelector('.popup__form-edit');
const popupSubmit = document.querySelector('.popup__submit-edit');

// buttonEdit

buttonEdit.addEventListener('click', () => {
    popup__edit.classList.add('popup__open');
    inputs[0].value = profileName.textContent;
    inputs[1].value = profileWork.textContent;
});

buttonClose.addEventListener('click', () => {
    popup__edit.classList.remove('popup__open');
    inputs[0].value = '';
    inputs[1].value = '';
});

popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    profileName.textContent = inputs[0].value;
    profileWork.textContent = inputs[1].value;
});

popupSubmit.addEventListener('click', () => {
    popup__edit.classList.remove('popup__open');
});

// buttonAdd

const buttonAdd = document.querySelector('#open__popup-add');
const popupAdd = document.querySelector('.popup__add');
const buttonCloseAdd = document.querySelector('.popup__close-add');
const inputsAdd = document.querySelectorAll('.popup__input-add');
const popupFormAdd = document.querySelector('.popup__form-add');
const popupSubmitAdd = document.querySelector('.popup__submit-add');

buttonAdd.addEventListener('click', () => {
  popup__add.classList.add('popup__open');
});

buttonCloseAdd.addEventListener('click', () => {
  popup__add.classList.remove('popup__open');
});

popupSubmitAdd.addEventListener('click', () => {
  popup__add.classList.remove('popup__open');
});


// Добавляем карточки на страницу

const initialCards = [
    {
      name: "Архыз",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
    },
    {
      name: "Челябинск",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
    },
    {
      name: "Иваново",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
    },
    {
      name: "Камчатка",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
    },
    {
      name: "Холмогоры",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
    },
    {
      name: "Байкал",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
    }
  ];
  
  const placeTemplate = document.querySelector("#place__template").content;
  const galleryList = document.querySelector(".gallery__column");

  
  initialCards.reverse().map(function (item) {
    addCard(item)
});


function addCard (item) {
  const placeElement = placeTemplate.querySelector(".gallery__element").cloneNode(true);
    const placeLink = placeElement.querySelector(".gallery__link");
    const placeTitle = placeElement.querySelector(".gallery__title");
    placeTitle.textContent = item.name;
    placeLink.src = item.link;
    
    // Лайки
    const like = placeElement.querySelector('.like');
    const likesNumber = placeElement.querySelector('.likes__number');

    like.addEventListener('click', () => {
      like.classList.toggle('like__active');
      likesNumber.textContent === '0' ? likesNumber.textContent = '1' : likesNumber.textContent = '0'; 
    });

    galleryList.prepend(placeElement);

    // Находим кнопку удаления и делаем на нее обработчик, чтобы карточка удалялась
    // На самом элементе карточки используется метод .remove
};

// Добавление новой карточки

popupFormAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(inputsAdd);
  const values = {
    name: inputsAdd[0].value,
    link: inputsAdd[1].value,
  }

  addCard(values);
});

  

// При загрузке на странице должно быть 6 карточек, которые добавит JavaScript. Их названия и фотографии выберите сами или возьмите готовый массив:

// Фотографии можно взять с сайта Unsplash — коллекции бесплатных изображений. Тогда не придётся думать об авторских правах.
// 2. Форма добавления карточки
// Добавьте в проект форму добавления новой карточки. Макет найдёте в «Фигме».
// Сделайте так, чтобы форма открывалась нажатием на кнопку «+» и закрывалась кликом на крестик:
// Так открывается и закрывается форма добавления карточек.
// 3. Добавление карточки
// Дайте пользователю возможность добавлять карточки:
// Можно написать имя карточки и дать ссылку на картинку.
// Сделайте так, чтобы при клике на «сохранить» новая карточка попадала в начало контейнера с ними. А диалоговое окно после добавления автоматически закрывалось.
// Чтобы создавать новые карточки, добавьте обработчик событий submit. Сделайте это аналогично прошлому спринту, в котором вы настраивали редактирование информации о пользователе.
// 4. Лайк карточки
// Сделайте так, чтобы карточки можно было лайкать:
// Если лайкнуть карточку, сердечко поменяет цвет.

  



  
