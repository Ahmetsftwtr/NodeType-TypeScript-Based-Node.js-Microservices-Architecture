import express from 'express';
import { DataSource } from "typeorm";
import * as fs from 'fs';
import { Payment } from './entity/payment';

const app = express();

const port = 3100;

app.use(express.json());

const config = JSON.parse(fs.readFileSync('nodetype.config.json', 'utf-8'));


const AppDataSource = new DataSource({
    ...config,
    entities: [Payment],
});

AppDataSource.initialize().then(() => {
  console.log("Payment DB Connection Success");
}).catch((error) => console.log("Payment DB Connection Error", error));


app.listen(port, () => {
  console.log(`Payment Service http://localhost:${port} adresinde çalışıyor`);
});
