const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// Функция создания одной карточки
function createCard(cardContent, deleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardContent.link;
  cardImage.alt = cardContent.name;
  cardTitle.textContent = cardContent.name;

  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
}

// Добавление всех карточек из initialCards
initialCards.forEach((card) => {
  const cardElement = createCard(card, deleteCard);
  cardList.append(cardElement);
});

