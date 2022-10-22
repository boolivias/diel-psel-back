import { Task_Repository } from "../../../repositories/implementations/controller/Task_Controller"
import { TaskGetAll_Controller } from "./controller"

const task_repository = new Task_Repository()
const task_getAll_controller = new TaskGetAll_Controller(task_repository)

export { task_getAll_controller }
