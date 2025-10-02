import { z } from 'zod';
import { createWordsAnsweredSchema, textWord } from './wordsAnswered.schema';

export const profileTestSchema = z.object({
    id: z.string().uuidv4('O ID fornecido não é válido.'),
    peopleId: z.string().uuidv4('O ID da pessoa fornecido não é válido.').nonempty('O campo peopleId é obrigatório.'),
    startAt: z.coerce.date({ message: 'O campo startAt é obrigatório e deve estar no formato ISO 8601.' }),
    finishAt: z.coerce.date({ message: 'O campo finishAt é obrigatório e deve estar no formato ISO 8601.' }),
    deleteAt: z.coerce.date().optional(),
    wordsAnswewd: createWordsAnsweredSchema.array(),
});

export const createProfileTestSchema = profileTestSchema.pick({
  peopleId: true,
  startAt: true,
  finishAt: true,
});

export const testDone = z.object({
    peopleId: z.string().uuidv4('O ID da pessoa fornecido não é válido.').nonempty('O campo peopleId é obrigatório.'),
    startAt: z.coerce.date({ message: 'O campo startAt é obrigatório e deve estar no formato ISO 8601.' })
      .max(new Date(), { message: 'O campo startAt deve ser menor que a data atual.' }),
    finishAt: z.coerce.date({ message: 'O campo finishAt é obrigatório e deve estar no formato ISO 8601.' })
      .max(new Date(), { message: 'O campo finishAt deve ser menor que a data atual.' }),
    personalTest: z.array(textWord).min(5, 'O campo personalTest deve ter no mínimo 5 elementos.'),
    professionalTest: z.array(textWord).min(5, 'O campo professionalTest deve ter no mínimo 5 elementos.'),
}).refine((data) => data.finishAt > data.startAt, {
  path: ['finishAt'],
  message: 'O campo finishAt deve ser maior que startAt.',
});

export type ProfileTest = z.infer<typeof profileTestSchema>;
export type CreateProfileTest = z.infer<typeof createProfileTestSchema>;