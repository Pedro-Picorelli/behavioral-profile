import app from './app';
import dotenv from 'dotenv';
import { initSequelize, sequelize } from './config/database';

dotenv.config();

const port = process.env.PORT || 3000;

initSequelize();
    
app.listen(port, () => {
    console.log(`✅ API running on http://localhost:${port}`);
});
