import express, { Application, urlencoded } from 'express';
import cors from 'cors';
import router from './app/routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/api/v1/', router);
export default app;
