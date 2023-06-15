import express, { Application, urlencoded } from 'express';
import cors from 'cors';

const app:Application = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));




export default app;