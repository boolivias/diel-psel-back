import { Router } from 'express';
import Task from '../controllers/task';

const router = Router();

router.post('/', (request, response) => { Task.create.handle(request, response).catch(() => response.status(400).send()); });
router.get('/', (request, response) => { Task.getAll.handle(request, response).catch(() => response.status(400).send()); });
router.put('/:id', (request, response) => { Task.update.handle(request, response).catch(() => response.status(400).send()); });
router.delete('/:id', (request, response) => { Task.delete.handle(request, response).catch(() => response.status(400).send()); });

const task_router = {
  path: '/tasks',
  router,
};

export default task_router;
