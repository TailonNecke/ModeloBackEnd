import 'reflect-metadata';
import express from 'express';
import MonDataSource from './database/data_sources/MonDatasource';
import routes from './routes'
import cors from 'cors';

  MonDataSource.initialize()
  .then(() => {
    console.log("📦 Data Source SFM has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source SFM initialization:", err);
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
