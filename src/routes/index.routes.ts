import { Router } from 'express';
import fs from 'fs';
import path from 'path';

interface IRouter {
  path: string,
  router: Router,
}

const routes: IRouter[] = []

fs
  .readdirSync(__dirname)
  .filter(file => file !== 'index.routes.ts')
  .forEach(file => {
    const router = require(path.join(__dirname, file));
    routes.push(router.default)
  });

export default routes