import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
// import { v7 as uuidv7 } from "uuid";

export interface TestAttributes {
  id: string;
  peopleId: string;
  startedAt: Date;
  finishedAt?: Date;
}

type TestCreation = Optional<TestAttributes, "id">;

export class Test extends Model<TestAttributes, TestCreation> implements TestAttributes {
  public id!: string;
  public peopleId!: string;
  public startedAt!: Date;
  public finishedAt?: Date;
}

Test.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    peopleId: { type: DataTypes.UUID, allowNull: false },
    startedAt: { type: DataTypes.DATE, allowNull: false },
    finishedAt: { type: DataTypes.DATE },
  },
  {
    sequelize,
    tableName: "tests",
    timestamps: true,
    paranoid: true,
    deletedAt: "deletedAt",
  }
);
