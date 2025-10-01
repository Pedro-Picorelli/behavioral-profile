import { People } from "../models/People.model";


export const PeopleService = {
    async create(data: { name: string; cpf: string; birthDate: Date, sex: "M" | "F" | "O", userId?: string | undefined }) {
        const people = await People.create(data);
        return people;
    },
    async getById(id: string) {
        const people = await People.findByPk(id);
        if(!people) throw new Error('Person not found');
        return people;
    }
}

export default PeopleService;