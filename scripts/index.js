
const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();  //удаляет карточку из DOM
}

// Функция создания одной карточки
function createCard(cardContent, deleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true); //Клонирование шаблона
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardContent.link;
  cardTitle.textContent = cardContent.name;

  //Обработчик события привет для кнопки удаления
  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  return cardElement; // Возвращение карточки 
}

// Добавление всех карточек 
initialCards.forEach((card) => {
  const cardElement = createCard(card, deleteCard);
  cardList.append(cardElement);
});
