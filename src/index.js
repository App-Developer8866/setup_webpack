/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import './style.css';
import * as allFun from './modules/functions.js';

const Tasks = document.querySelector('.tasks');
const Input = document.querySelector('form input');
const AddBtn = document.querySelector('form button');
const Span = document.querySelector('span');
const clearAll = document.querySelector('#clearAll');

export let tasks = JSON.parse(localStorage.getItem('tasks')) === null ? [] : JSON.parse(localStorage.getItem('tasks'));

AddBtn.addEventListener('click', () => {
  if (Input.value === '') {
    Span.innerHTML = 'Input field is required!';
  } else {
    const obj = {
      description: Input.value,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(obj);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  }
});

clearAll.addEventListener('click', () => {
  tasks = tasks.filter((elem) => elem.completed === false);
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= tasks.length; i++) {
    tasks[i - 1].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
});

window.checkBox = (index) => {
  allFun.setCheck(index);
};

function listTasks() {
  tasks.forEach((i) => {
    if (i.completed) {
      Tasks.innerHTML += `<li>
    <input type="checkbox" onclick="checkBox(${i.index})" checked/>
    <div class="checkTask">
    <input type="text" value="${i.description}" />
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </li>`;
    } else {
      Tasks.innerHTML += `<li>
    <input type="checkbox" onclick="checkBox(${i.index})"/>
    <div class="task">
      <input type="text" value="${i.description}" />
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </li>`;
    }
  });
}

listTasks();