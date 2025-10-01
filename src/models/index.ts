import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ override: true });

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


export const initSequelize = async () => {
  await sequelize.authenticate();
  console.log('✅ Autenticado no Postgres');

  // 2) Registra modelos e associações
  await import('./Users.model');
  await import('./People.model');
  await import('./ProfileTests.model');
  await import('./WordsAnswered.model');
  await import('./Words.model');
  const { setupAssociations } = await import('./relations');
  setupAssociations();

  // 3) Sincroniza
  await sequelize.sync({ alter: true });
  console.log('✅ DB conectado e modelos sincronizados');
};
