import { z} from "zod";

export const wordsAnsweredSchema = z.object({
    id: z.number().int('O ID deve ser número inteiro.').nonnegative('O ID não pode ser negativo.'),
    testprofileTestId: z.string().uuidv4('O ID do teste fornecido não é válido.').nonempty('O campo testId é obrigatório.'),
    wordId: z.number().int('O ID da palavra deve ser um número inteiro.').nonnegative('O ID da palavra não pode ser negativo.'),
    typeTest: z.enum(['1', '2'], { message: 'O campo typeTest é obrigatório e deve ser 1 ou 2.' }),
    text: z.string().nonempty('O campo text é obrigatório.').min(3, 'O text deve ter no mínimo 3 caracteres.').max(100, 'O text deve ter no máximo 100 caracteres.').trim(),
});

export const createWordsAnsweredSchema = wordsAnsweredSchema.omit({
    profileTestId: true,
    wordId: true,
    typeTest: true,
});

export const textWord = z.string()
  .min(3, 'A palavra deve ter no mínimo 3 caracteres.')
  .max(100, 'A palavra deve ter no máximo 100 caracteres.')
  .nonempty('A palavra não pode estar vazia.');

export type WordsAnsweredInput = z.infer<typeof createWordsAnsweredSchema>;