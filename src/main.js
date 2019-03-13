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



const parentTasksContainer = document.querySelector(`.board`);
let tasksContainer = parentTasksContainer.querySelector(`.board__tasks`);
let taskComponent;
let editTaskComponent;


const makeTasks = (arrayTaskData) => {
  const template = document.createElement(`div`);
  const templateEdit = document.createElement(`div`);
  template.classList.add(`board__tasks`);
  templateEdit.classList.add(`board__tasks`);
  arrayTaskData.forEach((it) => {
    taskComponent = new Task(it);
    template.appendChild(taskComponent.render());
    editTaskComponent = new TaskEdit(it);
    templateEdit.appendChild(editTaskComponent.render());
  });
  parentTasksContainer.replaceChild(template, tasksContainer);
  tasksContainer = parentTasksContainer.querySelector(`.board__tasks`);
};

makeTasks(tasksDataArray);


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



const filterClickHandler = function (evt) {
  if (evt.target.classList.contains(`filter__label`)) {
    getArrayTasks(taskData, getRandomValue(1, 10));
    makeTasks(tasksDataArray);
  }
};

filterListElement.addEventListener(`click`, filterClickHandler);
