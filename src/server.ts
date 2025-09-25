import app from './app';
import dotenv from 'dotenv';
import { sequelize } from './config/database';
import { initSequelize } from './models/index';

dotenv.config();

const port = process.env.PORT || 3000;

async function bootstrap() {
  try {
    await initSequelize();

    app.listen(port, () => {
      console.log(`✅ API running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ Startup error:', err);
    process.exit(1);
  }
}

bootstrap();
// sequelize.sync()
//     .then(() => {
//         console.log('Database connected');
//     })
//     .catch((err) => {
//         console.error('Unable to connect to the database:', err);
//     });
    
// app.listen(port, () => {
//     console.log(`✅ API running on http://localhost:${port}`);
// });
