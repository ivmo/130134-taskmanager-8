const taskData = {
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ],
  dueDate: Date.now(),
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
    `purchases`,
    `work`
  ]),
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ],
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  repeatingDays: {
    'mo': true,
    'tu': false,
    'we': true,
    'th': false,
    'fr': false,
    'sa': true,
    'su': false,
  },
  isFavorite: false,
  isDone: false
};

export default taskData;
