import { task_create_controller } from "./create";
import { task_delete_controller } from "./delete";
import { task_getAll_controller } from "./getAll";
import { task_update_controller } from "./update";

const TaskController = {
  create: task_create_controller,
  delete: task_delete_controller,
  getAll: task_getAll_controller,
  update: task_update_controller,
};

export default TaskController
