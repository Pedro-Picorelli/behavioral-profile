import { Request, Response, NextFunction } from "express";

export const ProfileTestsController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(201).json({ message: 'Rota not fund' });
        } catch (e: any) {
            next(e);
        }
    },
}

/*
{
    peopleId: string;
    startAt: Date;
    finishAt: Date;
    wordsAnswered: [
        {
            wordId: number;
            typeTested: number;

        },
        {
            wordId: number;
            typeTested: number;

        },
        {
            wordId: number;
            typeTested: number;

        },
        {
            wordId: number;
            typeTested: number;

        },
        {
            wordId: number;
            typeTested: number;
        },
    ]
}

*/