import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
// import { v7 as uuidv7 } from "uuid";

export interface WordAnswerAttributes {
  id: string;
  testId: string;
  word: string;
}

type WordAnswerCreation = Optional<WordAnswerAttributes, "id">;

export class WordAnswer extends Model<WordAnswerAttributes, WordAnswerCreation> implements WordAnswerAttributes {
  public id!: string;
  public testId!: string;
  public word!: string;
}

WordAnswer.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    testId: { type: DataTypes.UUID, allowNull: false },
    word: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: "word_answers",
    timestamps: true,
    paranoid: true,
    deletedAt: "deletedAt",
  }
);
