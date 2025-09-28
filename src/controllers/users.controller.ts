import { Request, Response, NextFunction } from "express";

import { PasswordCrypto } from "../services/PasswordCrypto";
import { UsersService } from "../services/users.service";
import { createUserSchema } from "../schemas/users.schema";
import z from "zod";

export const UsersController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const validatedData = createUserSchema.parse(req.body);

            const { email, password, typeId } = validatedData;

            const pass = await PasswordCrypto.hashPassword(password);

            const newUserData = await UsersService.create({
                email: email,
                password: pass,
                typeId: typeId
            });

            const newUser = newUserData.dataValues;

            // Responda com o novo usuário (sem a senha)
            return res.status(201).json({
                message: "Cadastro realizado com sucesso.",
                id: newUser.id,
                email: newUser.email,
                isActive: newUser.isActive,
                typeId: newUser.typeId,
                createdAt: newUser.createdAt,
            });

        } catch (error: any) {
            // Se o erro for uma instância de ZodError, ele veio da validação
            if (error instanceof z.ZodError) {
                return res.status(400).json({ errors: error.issues[0]?.message });
            }
            
            // Se o erro for do Sequelize por e-mail duplicado
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(409).json({
                    message: "Falha no cadastro. Este e-mail já está em uso."
                });
            }

            // Para qualquer outro tipo de erro, passe para o próximo middleware
            next(error);
        }
    },
    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            if(!id) throw new Error('Id fields are required');
            const user = await UsersService.getById(id);
            res.status(200).json(user);
        } catch (e: any) {
            next(e);
        }
    },
    async list() {},
    async update() {},
    async delete() {},
};

export default UsersController;