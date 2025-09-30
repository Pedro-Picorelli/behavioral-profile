import { Router } from "express";

import users from "./users.routes";
import people from "./people.routes";

const router = Router();

router.get('/', (_req, res) => res.json({ api: 'ok' }));
router.use('/users', users);
router.use('/people', people);
router.use('/profileTests', (_req, res) => res.json({ api: 'Rota not fund' }) );

export default router;