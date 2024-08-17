import express from 'express';
import { DataSource } from "typeorm";
import * as fs from 'fs';
import { UserEntity } from './entity/user';

const app = express();

const port = 3300;

app.use(express.json());

const config = JSON.parse(fs.readFileSync('nodetype.config.json', 'utf-8'));


const AppDataSource = new DataSource({
    ...config,
    entities: [UserEntity],
});

AppDataSource.initialize().then(() => {
  console.log("User DB Connection Success");
}).catch((error) => console.log("User DB Connection Error", error));


app.listen(port, () => {
  console.log(`User Service http://localhost:${port} adresinde çalışıyor`);
});
