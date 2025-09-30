import { Request, Response, Router } from "express";

import  PeopleController  from "../controllers/people.controller";

const r = Router();

r.get('/', (_req: Request, res: Response) => res.status(404).json({ message: 'Rota not fund' }));
r.get('/:id', PeopleController.get);
r.post('/', PeopleController.create);
r.put('/', (_req: Request, res: Response) => res.status(404).json({ message: 'Rota not fund' }));
r.delete('/', (_req: Request, res: Response) => res.status(404).json({ message: 'Rota not fund' }));

export default r;