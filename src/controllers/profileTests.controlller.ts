import { Request, Response, NextFunction } from "express";
import { createProfileTestSchema, testDone } from "../schemas/profileTests.schema";
import WordsController from "./words.controller";

export const ProfileTestsController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            // Diserealizando o obj para salvar o preenchime to es suas respectivas tabelas...
            const test = await testDone.parseAsync(req.body);
            const testDB = await createProfileTestSchema.parseAsync(test);
            const wordsPerson = await Promise.all(test.personalTest.map(async (w) => await WordsController.getByText(w)));
            const wordsProfessional = await Promise.all(test.professionalTest.map(async (w) => await WordsController.getByText(w)));

            

            res.status(201).json({test, testDB, wordsPerson, wordsProfessional});
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
    personalTest[]: Word
    professionalTest[]: Word
}

Person: {
    id: string | undefined;
    cpf: string;
    name: string;
    birthDate: Date;
    sex: "M" | "F" | "O";
    userId: string | undefined;
}

Word: string;

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