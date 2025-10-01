import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
// import { v7 as uuidv7 } from "uuid";

export interface PeopleAttributes {
  id: string;
  name: string;
  cpf: string;
  email: string;
  birthDate?: Date;
  sex?: string;
  userId?: string;
}

type PeopleCreation = Optional<PeopleAttributes, "id">;

export class People extends Model<PeopleAttributes, PeopleCreation> implements PeopleAttributes {
  public id!: string;
  public name!: string;
  public cpf!: string;
  public email!: string;
  public birthDate!: Date;
  public sex!: string;
  public userId!: string;
}

People.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    birthDate: { type: DataTypes.DATE },
    sex: { type: DataTypes.CHAR },
    userId: { type: DataTypes.UUID, unique: true },
  },
  {
    sequelize,
    tableName: "people",
    timestamps: true,
    paranoid: true,
    deletedAt: "deletedAt",
  }
);
