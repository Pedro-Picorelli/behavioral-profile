import { tr } from "zod/v4/locales";
import { sequelize } from "../models";
import { Words } from "../models/Words.model";


export const WordsService = {
    async getByText(text: string) {
        try {
            const w = await Words.findOne({
                where: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('word')),
                text.toLowerCase()
            )});
            if (!w) throw new Error('Palavra nao encontrada');
            return w.toJSON();
        } catch (e: any) {
            return new Error(e.message);
        }
    }
}

export default WordsService;