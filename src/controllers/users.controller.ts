import { Request, Response, NextFunction } from "express";
import { PasswordCrypto } from "../services/PasswordCrypto";
import { UsersAttributes } from "../models/Users.model";
import { UsersService } from "../services/users.service";


export const UsersController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            
            const { email, password, typeId } = req.body;

            if(!email) throw new Error('Email fields are required');
            if(!password) throw new Error('Password fields are required');

            const pass = await PasswordCrypto.hashPassword(password);

            const creat = await UsersService.create({ email, password: pass });
            res.status(201).json(creat);

            // const user = await Users.create({ email, password });
            // res.status(201).json(user);
        } catch (e: any) {
            next(e);
        }
    },
    async get() {},
    async list() {},
    async update() {},
    async delete() {},
};

export default UsersController;