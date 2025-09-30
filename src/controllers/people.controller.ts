import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { createPeopleSchema } from "../schemas/people.schema";
import PeopleService from "../services/people.service";

export const PeopleController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = createPeopleSchema.parse(req.body);
            const person = await PeopleService.create(data);

            res.status(201).json(person);
        } catch (e: any) {
            res.status(404).json(e);
            // next(e);
        }
    },
    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            if(!id) throw new Error('Id fields are required');
            const person = await PeopleService.getById(id);
            res.status(200).json(person);
        } catch (e: any) {
            next(e);
        }
    }
}

export default PeopleController;