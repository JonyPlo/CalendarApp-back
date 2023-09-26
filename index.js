import express from 'express';
import { PORT } from './src/config';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Public directory path
app.use(express.static(path.join(__dirname, 'public')));

// Auth routes
app.get('/', (req, res) => {
  res.json({ ok: 'Hello World' });
});

// Calendar events routes
