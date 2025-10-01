import { z } from 'zod';
import { createWordsAnsweredSchema } from './wordsAnswered.schema';

export const profileTestSchema = z.object({
    id: z.string().uuidv4('O ID fornecido não é válido.'),
    peopleId: z.string().uuidv4('O ID da pessoa fornecido não é válido.').nonempty('O campo peopleId é obrigatório.'),
    startAt: z.coerce.date({ message: 'O campo startAt é obrigatório e deve estar no formato ISO 8601.' }),
    finishAt: z.coerce.date({ message: 'O campo finishAt é obrigatório e deve estar no formato ISO 8601.' }),
    deleteAt: z.coerce.date().optional(),
    wordsAnswewd: createWordsAnsweredSchema.array(),
});

export const createProfileTestSchema = profileTestSchema.omit({
  peopleId: true,
  startAt: true,
  finishAt: true,
  wordsAnswewd: true,
});