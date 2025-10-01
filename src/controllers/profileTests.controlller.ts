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

export default ProfileTestsController
/*
fullTest: {
    person: Person
    startAt: Date;
    finishAt: Date;
    personalTest: Test
    professionalTest: Test
}

Person: {
    id: string | undefined;
    cpf: string;
    name: string;
    birthDate: Date;
    sex: "M" | "F" | "O";
    userId: string | undefined;
}

Test: {
    type: "1" | "2";
    wordsAnswered: [
        {
            wordId: number;
        },
        {
            wordId: number;
        },
        {
            wordId: number;
        },
        {
            wordId: number;
        },
        {
            wordId: number;
        },
    ]
}

{
    peopleId: string; || people: People
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