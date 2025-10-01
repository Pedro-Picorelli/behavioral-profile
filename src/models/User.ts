import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
// import { v7 as uuidv7 } from "uuid";

export interface UserAttributes {
  id: string;
  email: string;
  isActive: boolean;
  type: number;
}

type UserCreation = Optional<UserAttributes, "id">;

export class User extends Model<UserAttributes, UserCreation> implements UserAttributes {
  public id!: string;
  public email!: string;
  public isActive!: boolean;
  public type!: number;
}

User.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false },
    type: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
    paranoid: true,
    deletedAt: "deletedAt",
  }
);
