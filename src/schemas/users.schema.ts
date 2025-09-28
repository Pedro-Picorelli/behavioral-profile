import { z } from 'zod';

// Define o schema para a entrada de dados do usuário
export const createUserSchema = z.object({
    email: z.string().email('O e-mail fornecido não é válido.').nonempty('O campo de e-mail é obrigatório.'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres.').nonempty('O campo de senha é obrigatório.'),
    typeId: z.number().optional().default(1),
});

// O Zod pode inferir um tipo a partir do schema para tipagem segura
export type CreateUserType = z.infer<typeof createUserSchema>;