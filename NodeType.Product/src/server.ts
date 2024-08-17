import express from 'express';
import { DataSource } from "typeorm";
import * as fs from 'fs';
import { Product } from './entity/product';

const app = express();

const port = 3200;

app.use(express.json());

const config = JSON.parse(fs.readFileSync('nodetype.config.json', 'utf-8'));

const AppDataSource = new DataSource({
    ...config,
    entities: [Product],
});
AppDataSource.initialize().then(() => {
  console.log("Product DB Connection Success");
}).catch((error) => console.log("Product DB Connection Error", error));


app.listen(port, () => {
  console.log(`Product Service http://localhost:${port} adresinde çalışıyor`);
});
