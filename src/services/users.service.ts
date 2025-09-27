import { Users } from "../models/Users.model";


export const UsersService = {
    async create(data: { email: string, password: string }) {
        const user = Users.create(data);
        return user;
    },
};