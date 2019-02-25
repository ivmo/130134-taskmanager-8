import renderFilter from './make-filter.js';
import renderTask from './make-task.js';

const FILTERS = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];
const START_CARDS_COUNT = 7;
const DEFAULT_ACTIVE_FILTER_INDEX = 0;

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getFiltersHtml = (filtersData) => {
  return filtersData.map((it, i) => {
    if (i === DEFAULT_ACTIVE_FILTER_INDEX) {
      return renderFilter(it, getRandomValue(0, 30), true);
    }
    return renderFilter(it, getRandomValue(0, 30));
  }).join(``);
};

const filterListElement = document.querySelector(`.main__filter`);
filterListElement.innerHTML = getFiltersHtml(FILTERS);

const taskListElement = document.querySelector(`.board__tasks`);
const putCard = (getTask, tasksCount) => {
  const taskItems = new Array(tasksCount).fill().map(getTask);
  taskListElement.innerHTML = taskItems.join(``);
};

putCard(renderTask, START_CARDS_COUNT);

const filterClickHandler = function (evt) {
  if (evt.target.classList.contains(`filter__label`)) {
    putCard(renderTask, getRandomValue(1, 10));
  }
};

filterListElement.addEventListener(`click`, filterClickHandler);
