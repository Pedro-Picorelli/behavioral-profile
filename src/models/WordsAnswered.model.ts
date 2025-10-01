import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "./index";


export interface WordsAnsweredAttributes {
    id: number;
    profileTestId: string;
    wordId: number;
    typeTest: 1 | 2;
}
type Creation = Optional<WordsAnsweredAttributes, 'id'>

export class WordsAnswered extends Model<WordsAnsweredAttributes, Creation> implements WordsAnsweredAttributes {
    public id!: number;
    public profileTestId!: string;
    public wordId!: number;
    public typeTest!: 1 | 2;
}

WordsAnswered.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
        typeTest: {
            type: DataTypes.ENUM('1', '2'),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'wordsAnswered',
    }
);