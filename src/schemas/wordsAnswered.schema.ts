import { z} from "zod";

export const wordsAnsweredSchema = z.object({
    id: z.number().int('O ID deve ser número inteiro.').nonnegative('O ID não pode ser negativo.'),
    testId: z.string().uuidv4('O ID do teste fornecido não é válido.').nonempty('O campo testId é obrigatório.'),
    wordId: z.number().int('O ID da palavra deve ser um número inteiro.').nonnegative('O ID da palavra não pode ser negativo.'),
});

export const createWordsAnsweredSchema = wordsAnsweredSchema.omit({
    profileTestId: true,
    wordId: true,
});

export type WordsAnsweredInput = z.infer<typeof createWordsAnsweredSchema>;