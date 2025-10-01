import { Router } from "express";

import users from "./users.route";
import people from "./people.route";
import words from "./words.route";

const router = Router();

router.get('/', (_req, res) => res.json({ api: 'ok' }));
router.use('/users', users);
router.use('/people', people);
router.use('/profileTests', (_req, res) => res.json({ api: 'Rota not fund' }) );
router.use('/words', words);

export default router;