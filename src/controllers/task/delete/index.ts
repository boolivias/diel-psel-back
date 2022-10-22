import { Task_Repository } from "../../../repositories/implementations/controller/Task_Controller"
import { TaskDelete_Controller } from "./controller"

const task_repository = new Task_Repository()
const task_delete_controller = new TaskDelete_Controller(task_repository)

export { task_delete_controller }
