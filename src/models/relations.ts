import { User } from "./User";
import { People } from "./People";
import { Test } from "./Test";
import { WordAnswer } from "./WordAnswer";

export const setupAssociations = () => {
  // People -> User
  People.belongsTo(User, { foreignKey: "userId", as: "user" });
  User.hasOne(People, { foreignKey: "userId", as: "people" });

  // Test -> People
  Test.belongsTo(People, { foreignKey: "peopleId", as: "people" });
  People.hasMany(Test, { foreignKey: "peopleId", as: "tests" });

  // WordAnswer -> Test
  WordAnswer.belongsTo(Test, { foreignKey: "testId", as: "test" });
  Test.hasMany(WordAnswer, { foreignKey: "testId", as: "wordAnswers" });
}
