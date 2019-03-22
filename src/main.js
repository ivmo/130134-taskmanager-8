import taskData from './data.js';
import renderFilter from './make-filter.js';
import Task from './make-task.js';
import TaskEdit from './task-edit.js';

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

let tasksDataArray;
const getArrayTasks = (taskItem, tasksCount) => {
  tasksDataArray = new Array(tasksCount).fill(taskItem);
  return tasksDataArray;
};

getArrayTasks(taskData, START_CARDS_COUNT);


const tasksContainer = document.querySelector(`.board__tasks`);


const getTask = (taskDataItem) => {
  const taskComponent = new Task(taskDataItem);
  const editTaskComponent = new TaskEdit(taskDataItem);


  taskComponent.onEdit = () => {
    editTaskComponent.render();
    tasksContainer.replaceChild(editTaskComponent.element, taskComponent.element);
    taskComponent.unrender();
  };

  editTaskComponent.onSubmit = () => {
    taskComponent.render();
    tasksContainer.replaceChild(taskComponent.element, editTaskComponent.element);
    editTaskComponent.unrender();
  };

  return taskComponent.render();
};


const makeTasks = (arrayTaskData) => {
  tasksContainer.innerHTML = ``;
  const fragment = document.createDocumentFragment();
  arrayTaskData.forEach((it) => {
    fragment.appendChild(getTask(it));
  });
  tasksContainer.appendChild(fragment);
};

makeTasks(tasksDataArray);


const filterClickHandler = function (evt) {
  if (evt.target.classList.contains(`filter__label`)) {
    getArrayTasks(taskData, getRandomValue(1, 10));
    makeTasks(tasksDataArray);
  }
};

filterListElement.addEventListener(`click`, filterClickHandler);
