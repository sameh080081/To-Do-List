import './style.css';

const list = document.querySelector('.list');
const enter = document.querySelector('.enter');
const input = document.querySelector('.task_input');
const array = JSON.parse(localStorage.getItem('array')) || [];

function update(index, value) {
  if (value !== '') {
    array[index] = { description: value, completed: false };
    localStorage.setItem('array', JSON.stringify(array));
  }
}

function remove_task(index) {
  array.splice(index, 1);
  localStorage.setItem('array', JSON.stringify(array));
}

function display() {
  list.innerHTML = '';
  array.forEach((task) => {
    const item = `<li class="item"><div class ="check-cont"><input class="checkbox" type="checkbox">
    <input class="edit" id="${array.indexOf(task)}" type="text" value = "${task.description}"></div>
    <a class="delete hide" href="#"><img alt= "delete" src="../../../icons/bin.png"></a>
    <a class="move" href="#"><img alt= "move" src="../../../icons/vector3.png"></a></li>`;
    list.insertAdjacentHTML('beforeend', item);
  });
  document.querySelectorAll('.edit').forEach((task) => {
    const remove = task.parentElement.nextElementSibling;
    task.onfocus = function () {
      remove.classList.remove('hide');
    };

    remove.addEventListener('click', (e) => {
      const index = e.target.parentElement.previousElementSibling.firstChild.nextElementSibling.getAttribute(('id'), 10);
      remove_task(index);
      display();
    });

    task.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const index = parseInt(e.target.getAttribute('id'), 10);
        update(index, task.value);
        display();
      }
    });
  });
}

function add() {
  if (input.value !== '') {
    array.push({
      description: input.value,
      completed: false,
    });
    localStorage.setItem('array', JSON.stringify(array));
    input.value = '';
    display();
  }
}

enter.addEventListener('click', () => {
  add();
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    add();
  }
});

document.addEventListener('DOMContentLoaded', display());