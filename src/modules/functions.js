import tasks from '../index.js';

const setCheck = (index) => {
  if (!tasks[index - 1].completed) {
    tasks[index - 1].completed = true;
  } else {
    tasks[index - 1].completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default setCheck;