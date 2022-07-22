import './style.css';

const mymodule = require('./methods.js');

const list = document.querySelector('.list');
const enter = document.querySelector('.enter');
const input = document.querySelector('.task_input');
const clear = document.querySelector('.clear');
let array = JSON.parse(localStorage.getItem('array')) || [];

function display() {
  list.innerHTML = '';
  array.forEach((task) => {
    let checked = '';
    if (task.completed) { checked = 'checked'; }
    const item = `<li class="item"><div class ="check-cont"><input class="checkbox" type="checkbox" ${checked}>
    <input class="edit" id="${array.indexOf(task)}" type="text" value = "${task.description}"></div>
    <a class="delete hide" href="#"><img alt= "delete" src="../icons/bin.png"></a>
    <a class="move" href="#"><img alt= "move" src="../icons/vector3.png"></a></li>`;
    list.insertAdjacentHTML('beforeend', item);
    task.index = array.indexOf(task);
  });
  document.querySelectorAll('.edit').forEach((task) => {
    const remove = task.parentElement.nextElementSibling;
    task.onfocus = () => {
      remove.classList.remove('hide');
    };

    remove.addEventListener('click', (e) => {
      const index = e.target.parentElement.previousElementSibling.firstChild.nextElementSibling.getAttribute(('id'), 10);
      array = mymodule.removeTask(array, index);
      display();
      localStorage.setItem('array', JSON.stringify(array));
    });

    task.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const index = parseInt(e.target.getAttribute('id'), 10);
        array = mymodule.update(array, index, task.value);
        display();
      }
    });
  });

  document.querySelectorAll('.checkbox').forEach((check) => {
    check.addEventListener('change', () => {
      array[check.nextElementSibling.getAttribute('id')].completed = check.checked;
      localStorage.setItem('array', JSON.stringify(array));
    });
  });
}

clear.addEventListener('click', () => {
  array = array.filter((task) => task.completed !== true);
  localStorage.setItem('array', JSON.stringify(array));
  display();
});

enter.addEventListener('click', () => {
  array = mymodule.add(array, input.value);
  localStorage.setItem('array', JSON.stringify(array));
  display();
  input.value = '';
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    array = mymodule.add(array, input.value);
    localStorage.setItem('array', JSON.stringify(array));
    display();
    input.value = '';
  }
});

document.addEventListener('DOMContentLoaded', display());