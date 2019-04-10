const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];
export const getRandomValue = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;
export const getRandomArrayItem = (array) => array[Math.floor(Math.random() * array.length)];
export const getRandomDate = (taskDate) => taskDate + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000;


export const getConvertedDate = (dataTask) => new Date(dataTask);

export const getMonthName = (dataTask) => MONTH_NAMES[getConvertedDate(dataTask).getMonth()];

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};
