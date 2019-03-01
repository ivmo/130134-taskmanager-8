const taskData = {
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
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
  ][Math.floor(Math.random() * 5)],
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
