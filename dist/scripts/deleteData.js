import { renderTasks } from "./renderer.js";
import { setItem } from "./storage.js";
import { deleteTask, getTasksList } from "./tasksGateway.js";
export var onDeleteTask = function onDeleteTask(e) {
  var taskId = e.target.closest(".list-item").dataset.id;
  deleteTask(taskId).then(function () {
    return getTasksList();
  }).then(function (updatedTasksList) {
    return setItem("tasksList", updatedTasksList);
  });
  renderTasks();
};