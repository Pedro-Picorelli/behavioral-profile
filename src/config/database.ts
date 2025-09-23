import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    {
        host: process.env.DB_HOST || "db",
        port: Number(process.env.DB_PORT) || 5432,
        dialect: (process.env.DB_DIALECT as any) || "postgres",
        logging: false,
        username: process.env.DB_USER || "postgres" as string,
        password: process.env.DB_PASS || "password" as string,
        database: process.env.DB_NAME || "mybank" as string,
    }
);

