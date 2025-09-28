import { Router } from "express";

import users from "./users.routes";

const router = Router();

router.get('/', (_req, res) => res.json({ api: 'ok' }));
router.use('/users', users);
router.use('people', (_req, res) => res.json({ people: 'ok' }));

export default router;