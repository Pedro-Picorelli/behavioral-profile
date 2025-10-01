import { Users } from "./Users.model";
import { People } from "./People.model";
import { ProfileTests } from "./ProfileTests.model";
import { WordsAnswered } from "./WordsAnswered.model";

export const setupAssociations = () => {
  // People -> User
  People.belongsTo(Users, { foreignKey: "userId", as: "user" });
  Users.hasOne(People, { foreignKey: "userId", as: "people" });

  // Test -> People
  ProfileTests.belongsTo(People, { foreignKey: "peopleId", as: "people" });
  People.hasMany(ProfileTests, { foreignKey: "peopleId", as: "profileTests" });

  // WordAnswer -> Test
  WordsAnswered.belongsTo(ProfileTests, { foreignKey: "profileTestId", as: "profileTests" });
  ProfileTests.hasMany(WordsAnswered, { foreignKey: "profileTestId", as: "wordsAnswered" });
}