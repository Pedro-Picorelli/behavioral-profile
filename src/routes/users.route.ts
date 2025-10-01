import { Request, Response, Router } from "express";

import UsersController from "../controllers/users.controller";

const r = Router();

r.get('/', UsersController.list);
r.get('/:id', UsersController.get);
r.post('/', UsersController.create);
r.put('/', UsersController.update);
r.delete('/', UsersController.delete);

export default r;