import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./index";

export interface UsersAttributes {
    id: string;
    email: string;
    password: string;
    isActive?: boolean;
    typeId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deleteAt?: Date;
}
type Creation = Optional<UsersAttributes, 'id'>

export class Users extends Model<UsersAttributes, Creation> implements UsersAttributes {
    public id!: string;
    public email!: string;
    public password!: string;
    public isActive?: boolean;
    public typeId?: number;
    public createdAt?: Date;
    public updatedAt?: Date;
    public deleteAt?: Date;
}

Users.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        typeId: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deleteAt: {
            type: DataTypes.DATE
        },
    },
    {
        tableName: 'users',
        sequelize,
        paranoid: true,
        deletedAt: 'deleteAt',
    }
);