const complete = document.querySelector(".complete");
const completedNumbers = document.querySelector(".completed-numbers");
const task = document.querySelector(".task");
const addButton = document.querySelector(".add-button");
const writeTask = document.querySelector(".write-task");
const deleteLogo = document.querySelector(".delete-logo");
let taskCount = 0;
let todos = [];

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(writeTask.value);
  const todo = {
    taskName: writeTask.value,
    id: Date.now(),
    status: "unchecked",
  };
  writeTask.value = "";
  console.log(todo);
  todos.push(todo);

  /*
`<div class="task">
<div class="task-left">
  <div class="name"><input type="checkbox" name="complete" class='tick-complete' id="complete" ><p>${todo.taskName}</p></div>
</div>
<div class="task-right">
  <div class="edit-logo"><ion-icon class='task-icon edit-icon' name="create-outline"></ion-icon></div>
  <div class="delete-logo"><ion-icon class='task-icon trash-icon' name="trash-outline"></ion-icon></div>
</div>
</div>`
*/
  //Creating above elements

  const task = document.querySelector(".task");
  const taskContainer = document.querySelector(".task-container");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskLeftDiv = document.createElement("div");
  taskLeftDiv.classList.add("task-left");

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name");

  const inputDiv = document.createElement("input");
  inputDiv.classList.add("tick-complete");
  inputDiv.type = "checkbox";
  inputDiv.name = "complete";
  inputDiv.id = "complete";

  const inputDivPara = document.createElement("p");
  inputDivPara.innerText = `${todo.taskName}`;

  inputDiv.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputDiv.checked) {
      inputDivPara.classList.add("strike-task");
    }
  });
  const taskRightDiv = document.createElement("div");
  taskRightDiv.classList.add("task-right");

  const editLogoDiv = document.createElement("div");
  editLogoDiv.classList.add("edit-logo");

  const ionIconEdit = document.createElement("ion-icon");
  ionIconEdit.classList.add("task-icon", "edit-icon");
  ionIconEdit.name = "create-outline";

  const deleteLogoDiv = document.createElement("div");
  deleteLogoDiv.classList.add("delete-logo");

  //Adding event listeneer for deleting the todo
  deleteLogoDiv.addEventListener("click", (e) => {
    console.log(todo.id);
    taskDiv.classList.add("hide");
    todos = todos.filter((singleTodo) => {
      return todo.id != singleTodo.id;
    });
    console.log(todos);
  });

  const ionIconDelete = document.createElement("ion-icon");
  ionIconDelete.classList.add("task-icon", "trash-icon");
  ionIconDelete.name = "trash-outline";

  //Appending elements
  deleteLogoDiv.appendChild(ionIconDelete);
  editLogoDiv.appendChild(ionIconEdit);
  taskRightDiv.appendChild(editLogoDiv);
  taskRightDiv.appendChild(deleteLogoDiv);

  nameDiv.appendChild(inputDiv);
  nameDiv.appendChild(inputDivPara);

  taskLeftDiv.appendChild(nameDiv);

  taskDiv.appendChild(taskLeftDiv);
  taskDiv.appendChild(taskRightDiv);
  console.log(taskDiv);

  taskContainer.appendChild(taskDiv);
  taskCount++;
  complete.innerText = `0/${taskCount}`;
  completedNumbers.classList.remove("hide");
});
