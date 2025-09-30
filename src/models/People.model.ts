import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

export interface PeopleAttributes {
    id: string;
    name: string;
    cpf: string;
    birthDate: Date;
    sex: string;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleteAt?: Date;
}
type Creation = Optional<PeopleAttributes, 'id'>;

export class People extends Model<PeopleAttributes, Creation> implements PeopleAttributes {
    public id!: string;
    public name!: string;
    public cpf!: string;
    public birthDate!: Date;
    public sex!: string;
    public userId?: string;
    public createdAt?: Date;
    public updatedAt?: Date;
    public deleteAt?: Date;
}

People.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        deleteAt: {
            type: DataTypes.DATE,
        }
    },{
        tableName: 'people',
        sequelize,
        paranoid: true,
        deletedAt: 'deleteAt'
    }
);