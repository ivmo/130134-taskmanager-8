import taskData from './data.js';
import renderFilter from './make-filter.js';
import renderTask from './make-task.js';

const FILTERS = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];
const START_CARDS_COUNT = 7;
const DEFAULT_ACTIVE_FILTER_INDEX = 0;

const getRandomValue = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

const getFiltersHtml = (filtersData) => {
  return filtersData.map((it, i) => {
    return renderFilter(it, getRandomValue(0, 30), i === DEFAULT_ACTIVE_FILTER_INDEX);
  }).join(``);
};

const filterListElement = document.querySelector(`.main__filter`);
filterListElement.innerHTML = getFiltersHtml(FILTERS);

const makeTask = () => renderTask(taskData);

const taskListElement = document.querySelector(`.board__tasks`);
const putCard = (getTask, tasksCount) => {
  const taskItems = new Array(tasksCount).fill().map(getTask);
  taskListElement.innerHTML = taskItems.join(``);
};

putCard(makeTask, START_CARDS_COUNT);

const filterClickHandler = function (evt) {
  if (evt.target.classList.contains(`filter__label`)) {
    putCard(makeTask, getRandomValue(1, 10));
  }
};

filterListElement.addEventListener(`click`, filterClickHandler);
