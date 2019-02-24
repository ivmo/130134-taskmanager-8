import renderFilter from './make-filter.js';
import renderTask from './make-task.js';

const FILTERS = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];
const START_CARDS_COUNT = 7;

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getFiltersHtml = (filtersData) => filtersData.map((it) => renderFilter(it, getRandomValue(0, 30))).join(``);

let filterListElement = document.querySelector(`.main__filter`);
filterListElement.innerHTML = getFiltersHtml(FILTERS);

const taskListElement = document.querySelector(`.board__tasks`);
const putCard = (cardsCount) => {
  const fragment = document.createDocumentFragment();
  taskListElement.innerHTML = ``;
  for (let i = 0; i < cardsCount; i++) {
    fragment.appendChild(renderTask());
  }
  taskListElement.appendChild(fragment);
};

putCard(START_CARDS_COUNT);

const filterClickHandler = function (evt) {
  if (evt.target.classList.contains(`filter__label`)) {
    taskListElement.innerHTML = ``;
    putCard(getRandomValue(1, 10));
  }
};

filterListElement.addEventListener(`click`, filterClickHandler);
