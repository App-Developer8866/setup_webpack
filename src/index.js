/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const Tasks = document.querySelector('.tasks');
const Input = document.querySelector('form input');
const AddBtn = document.querySelector('form button');
const Span = document.querySelector('span');

// eslint-disable-next-line import/prefer-default-export, prefer-const
let tasks = [
  { index: 0, completed: false, description: 'Wash dishes' },
  { index: 0, completed: false, description: 'Wash dishes' },
];

function listTasks() {
  tasks.forEach((i) => {
    Tasks.innerHTML += `<li>
    <input type="checkbox"/>
    <div class="task">
      <p>${i.description}</p>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </li>`;
  });
}

listTasks();