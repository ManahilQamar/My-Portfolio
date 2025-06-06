document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('new-task');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  addTaskBtn.addEventListener('click', addTask);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement('li');
      li.textContent = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }

})