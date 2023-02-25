import './style.css';
import setCheck from './modules/functions.js';

const Tasks = document.querySelector('.tasks');
const Input = document.querySelector('form input');
const AddBtn = document.querySelector('form button');
const Span = document.querySelector('span');
const clearAll = document.querySelector('#clearAll');

const tasks = JSON.parse(localStorage.getItem('tasks')) === null ? [] : JSON.parse(localStorage.getItem('tasks'));

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
    for (let i = 1; i <= tasks.length; i += 1) {
      tasks[i - 1].index = i;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  }
});

clearAll.addEventListener('click', () => {
  const tasksArr = tasks.filter((elem) => elem.completed === false);
  for (let i = 1; i <= tasksArr.length; i += 1) {
    tasks[i - 1].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasksArr));
  window.location.reload();
});

window.checkBox = (index) => {
  setCheck(index);
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

export default tasks;