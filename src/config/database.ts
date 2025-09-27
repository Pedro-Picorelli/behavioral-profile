import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    {
        dialect: "postgres",
        host: process.env.DB_HOST || "db",
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USER || "username" as string,
        password: process.env.DB_PASS || "password" as string,
        database: process.env.DB_NAME || "mybank" as string,
    }
);

export const initSequelize = async () => {
//   await sequelize.authenticate();
//   console.log('✅ Autenticado no Postgres');

  // 2) Registra modelos e associações
  await import('../models/Users.model');

  // 3) Sincroniza
  console.log(process.env.NODE_ENV);
  await sequelize.sync({ alter: process.env.NODE_ENV !== 'production' });
  console.log('✅ DB conectado e modelos sincronizados');
};