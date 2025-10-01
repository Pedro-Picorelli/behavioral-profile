import { Router } from "express";
import WordsController from "../controllers/words.controller";

const r = Router();

r.get('/', WordsController.list);

export default r;