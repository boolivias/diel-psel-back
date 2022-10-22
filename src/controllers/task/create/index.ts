import { Task_Repository } from "../../../repositories/implementations/controller/Task_Controller"
import { TaskCreate_Controller } from "./controller"

const task_repository = new Task_Repository()
const task_create_controller = new TaskCreate_Controller(task_repository)

export { task_create_controller }
