import './style.css';

const list = document.querySelector('.list');

const array = [
  {
    description: 'clean house',
    completed: false,
    index: 0,
  },
  {
    description: 'feed animals',
    completed: false,
    index: 1,
  },
  {
    description: 'go shopping',
    completed: false,
    index: 2,
  },
];

array.forEach((task) => {
  const item = `<li class="item"><div><input type="checkbox">${task.description}</div><a class="refresh" href="#"><img alt= "move" src="./icons/vector-3.png"></a></li>`;
  list.insertAdjacentHTML('beforeend', item);
});