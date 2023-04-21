const task = [];
let time = 0;
let time = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener('submit', e => {
  e.preventDefault();
  // Si esta vacion ejecutamos función
  if(itTask.value !== '') {
    createTask(itTask.value);
    itTask.value = '';
    renderTasks();
  }
});

function createTask(value) {

  const newTask = {
    // Generar id aleatorio, trasnformado a a base 36 y eliminar los últimos 3 caracteres raros
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    completed: false,
  }

  // Agregarmos al arreglo
  task.unshift(newTask);
}

function renderTasks() {
  const html = tasks.map(task => {
    return `
      <div class="task">
        <div class="completed">
          ${task.completed 
            ? `<span class"done">Done</span>` 
            : `<button class="start-button" data-id="${task.id}">Start</button>`}
        </div>
        <div class="title">${task.title}</div>
      </div>
    `;
  });

  const tasksContainer = document.querySelector("#tasks");
  tasksContainer.innerHTML = html.join("");

}