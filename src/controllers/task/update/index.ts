import { Task_Repository } from "../../../repositories/implementations/controller/Task_Controller"
import { TaskUpdate_Controller } from "./controller"

const task_repository = new Task_Repository()
const task_update_controller = new TaskUpdate_Controller(task_repository)

export { task_update_controller }
