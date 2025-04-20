import express from "express";
const app = express();

import connection from "./config/sequelize-config.js";
import FilmesController from "./controllers/FilmesControllers.js";

app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.set("view engine", "ejs");

connection.query("CREATE DATABASE IF NOT EXISTS galeriaFilmes").then(() => {
    console.log("Banco de Dados Criado com Sucesso!");
}).catch((error) => {
    console.log(error);
});

connection.authenticate().then(() => {
    console.log("O Banco de Dados foi Conectado com Sucesso!");
}).catch((error) => {
    console.log(error);
});

app.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "Filmes"
    });
});

app.use("/", FilmesController);

const port = 8080;
app.listen(port, (error) => {
    if(error){
        console.log(`Ocorreu um Erro! ${error}`);
    } else{
        console.log(`Servidor Iniciado com Sucesso em: http://localhost:${port}`);
    }
});