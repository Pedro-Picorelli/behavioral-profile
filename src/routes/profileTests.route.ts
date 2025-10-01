import { Router } from "express";
import profileTests from "../controllers/profileTests.controlller";

const r = Router();

r.post('/', profileTests.create);

export default r;