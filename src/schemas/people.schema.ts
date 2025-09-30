import z from "zod";

export const creatPeopleSchema = z.object({
    name: z.string().nonempty('O campo de nome é obrigatório.'),
    cpf: z.string().nonempty('O campo de CPF é obrigatório.'),
});