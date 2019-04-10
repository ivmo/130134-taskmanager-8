import {getRandomArrayItem, getRandomValue, getRandomDate, getConvertedDate, getMonthName} from './utils.js';
import taskData from './data.js';
import renderFilter from './make-filter.js';
import Task from './make-task.js';
import TaskEdit from './task-edit.js';

const FILTERS = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];
const START_CARDS_COUNT = 7;
const DEFAULT_ACTIVE_FILTER_INDEX = 0;


const getFiltersHtml = (filtersData) => {
  return filtersData.map((it, i) => {
    return renderFilter(it, getRandomValue(0, 30), i === DEFAULT_ACTIVE_FILTER_INDEX);
  }).join(``);
};

const filterListElement = document.querySelector(`.main__filter`);
filterListElement.innerHTML = getFiltersHtml(FILTERS);


const getHashtags = (hashtagData) => {
  let hashtagItems = [];
  const hashtagCount = getRandomValue(4);
  const arrHashtags = Array.from(hashtagData);

  for (let i = 0; i < hashtagCount; i++) {
    hashtagItems.push(arrHashtags[getRandomValue(arrHashtags.length)]);
  }
  return hashtagItems;
};

const newItem = (dataItem) => {
  const item = new Object();
  item.title = getRandomArrayItem(dataItem.title);
  item.dueDate = getRandomDate(dataItem.dueDate);
  item.tags = getHashtags(dataItem.tags);
  item.color = getRandomArrayItem(dataItem.color);
  item.picture = dataItem.picture;
  item.repeatingDays = dataItem.repeatingDays;
  item.isFavorite = false;
  item.isDone = false;
  return item;
};

let tasksDataArray = [];
const getArrayTasks = (taskItem, tasksCount) => {
  for (let i = 0; i <= tasksCount; i++) {
    tasksDataArray.push(newItem(taskItem));
  }
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
