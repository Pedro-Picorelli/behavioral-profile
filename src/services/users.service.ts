import { Users } from "../models/Users.model";


export const UsersService = {
    async create(data: { email: string, password: string, typeId?: number }) {
        const user = Users.create(data);
        return user;
    },
    async getById(id: string) {
        const user = await Users.findOne(
            {
                where: {id},
                attributes: [ 'email', 'isActive', 'typeId', 'createdAt' ]
            }
        );
        return user;
    },
};