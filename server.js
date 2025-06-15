import express from "express";
import pkg from '@prisma/client';
import routesApi from "./src/routes/routesAPI.js";
const { PrismaClient } = pkg;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use('/', routesApi);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});