import 'reflect-metadata';
import express from 'express';
import { initialize as MonDataSource } from "./database/connections/MonConnection";
import routes from './routes'
import cors from 'cors';

  MonDataSource()
  .then(() => {
    console.log("📦 Data Source Mon has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source Mon initialization:", err);
  });

const app = express();
app.use(cors({
  origin: [
    'http://10.1.47.4:3000',
    'http://localhost:3000',
  ],
  methods: ['POST'],
  credentials: true
}))

app.use(express.json());
app.use(routes);


app.listen(8080, () => console.log('🔥 Server started at http://localhost:8080'));
