import { z} from "zod";

export const wordsAnsweredSchema = z.object({
    id: z.number().int('O ID deve ser número inteiro.').nonnegative('O ID não pode ser negativo.'),
    testId: z.string().uuidv4('O ID do teste fornecido não é válido.').nonempty('O campo testId é obrigatório.'),
    wordId: z.number().int('O ID da palavra deve ser um número inteiro.').nonnegative('O ID da palavra não pode ser negativo.'),
    typeTest: z.enum(['1', '2'], { message: 'O campo typeTest é obrigatório e deve ser 1 ou 2.' }),
});

export const createWordsAnsweredSchema = wordsAnsweredSchema.omit({
    profileTestId: true,
    wordId: true,
    typeTest: true,
});

export type WordsAnsweredInput = z.infer<typeof createWordsAnsweredSchema>;