import dotenv from 'dotenv';
dotenv.config();
import app from './app';

const { PORT = 4000 } = process.env;

app.listen(PORT);

console.log(`Server available at http://localhost:${PORT}`);
