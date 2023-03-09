import dotenv from "dotenv";
import express from 'express';
import App from "./src/app.js";
import { data } from "../desafiofinal-frontend/src/components/apiFake/apiFake.jsx"

import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}...`);
});

const app = express();

app.get('/productcontent', (req, res) => {
    res.send(data.ecommerce)
});

app.get('/productcontent/:produto_id', (req, res) => {
    const product = data.ecommerce.find((x) => x.produto_id == req.params.produto_id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Produto não encontrado'});
    } res.send(data.ecommerce);
});
