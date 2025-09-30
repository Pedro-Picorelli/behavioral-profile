import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "../config/database";


export interface WordsAnsweredAttributes {
    id: number;
    profileTestId: string;
    wordId: number;
}
type Creation = Optional<WordsAnsweredAttributes, 'id'>

export class WordsAnswered extends Model<WordsAnsweredAttributes, Creation> implements WordsAnsweredAttributes {
    public id!: number;
    public profileTestId!: string;
    public wordId!: number;
}

WordsAnswered.init(
    {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        profileTestId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        wordId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'wordsAnswered',
    }
);