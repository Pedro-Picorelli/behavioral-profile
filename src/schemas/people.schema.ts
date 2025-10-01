import { cpf } from "cpf-cnpj-validator";
import z from "zod";

export const peopleSchema = z.object({
    id: z.string().uuidv4(),
    name: z.string().nonempty('O campo de nome é obrigatório.').min(3, 'O nome deve ter no mínimo 3 caracteres.').max(100, 'O nome deve ter no máximo 100 caracteres.').trim(),
    cpf: z.string().refine((val) => cpf.isValid(val), {message: 'O CPF informado não é válido'}).nonempty('O campo de CPF é obrigatório.').trim(),
    birthDate: z.coerce.date({ message: 'O campo de data de nascimento é obrigatório e deve estar no formato ISO 8601.' }),
    sex: z.enum(['M', 'F', 'O'], { message: 'O campo de sexo é obrigatório e deve ser "M", "F" ou "O".' }),
    userId: z.string().uuidv4().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    deleteAt: z.coerce.date().optional(),
});

export const createPeopleSchema = peopleSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deleteAt: true,
});

export type PeopleInput = z.infer<typeof createPeopleSchema>;