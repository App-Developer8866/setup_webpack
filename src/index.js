import _ from 'lodash';
import './style.css';

const Tasks = document.querySelector('.tasks');

const tasks = [
  { index: 1, completed: false, description: 'Wash dishes' },
  { index: 2, completed: false, description: 'Best wishes' },
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