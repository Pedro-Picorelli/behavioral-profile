import { Request, Response, NextFunction } from "express";
import { Words } from "../models/Words.model";

export const WordsController = {
    async list(_req: Request, res: Response, next: NextFunction) {
        try {
            const allWords = await Words.findAll({
                attributes: ['word']
            });
            const wordsOnly = allWords.map(w => w.get('word'));
            const shuffledWords = shuffle(wordsOnly);

            res.status(201).json(shuffledWords);
        } catch (e: any) {
            next(e);
        }
    }
}

function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i]!;
        arr[i] = arr[j]!;
        arr[j] = temp;
    }
    return arr;
}


export default WordsController