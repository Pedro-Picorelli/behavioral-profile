import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./index";

export interface WordsAttributes {
    id: number;
    word: string;
    type: 'E'| 'C'| 'P'| 'A'
}
type Creation = Optional<WordsAttributes, 'id'>

export class Words extends Model<WordsAttributes, Creation> {
    public id!: number;
    public word!: string;
    public type!: 'E'| 'C'| 'P'| 'A';
}

Words.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        word: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('E', 'C', 'P', 'A'),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'words',
        timestamps: false
    }
)