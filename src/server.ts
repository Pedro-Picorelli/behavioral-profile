import app from './app';
import dotenv from 'dotenv';
import { sequelize } from './config/database';

dotenv.config();

const port = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
    
app.listen(port, () => {
    console.log(`✅ API running on http://localhost:${port}`);
});
