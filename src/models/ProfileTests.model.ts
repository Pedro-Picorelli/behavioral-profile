import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./index";


export interface ProfileTestsAttributes {
    id: string;
    peopleId: string;
    startAt: Date;
    finishAt: Date;
    deleteAt?: Date;
}
type Creation = Optional<ProfileTestsAttributes, 'id'>

export class ProfileTests extends Model<ProfileTestsAttributes, Creation> implements ProfileTestsAttributes {
    public id!: string;
    public peopleId!: string;
    public startAt!: Date;
    public finishAt!: Date;
    public deleteAt?: Date;
}

ProfileTests.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        peopleId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        startAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        finishAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deleteAt: {
            type: DataTypes.DATE
        }
    },
    {
        sequelize,
        tableName: "profileTests",
        timestamps: true,
        paranoid: true,
        deletedAt: 'deleteAt'
    }
);