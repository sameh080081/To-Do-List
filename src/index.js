import './style.css';

const taskContainer = document.querySelector('.todo-lists');

const todoTasks = [
  {
    desc: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    desc: 'Complete To Do list project',
    completed: false,
    index: 1,
  },
  {
    desc: 'Fix car',
    completed: false,
    index: 2,
  },
];

todoTasks.forEach((task) => {
  const markup = `<li class="todo-list border-bottom">${task.desc}</li>`;
  taskContainer.insertAdjacentHTML('beforeend', markup);
});