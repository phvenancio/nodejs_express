import express from "express";
const router = express.Router();
import Filme from "../models/Filme.js";
import upload from "../middlewares/upload.js";

router.get("/cadastroFilme", (req, res) => {
    res.render("cadastroFilme", {
        pageTitle: "Cadastro de Filmes"
    });
});

router.post("/cadastroFilme/new", upload.single("imagem"), (req, res) => {
    const imagem = req.file.filename;
    const titulo = req.body.titulo;
    const anoLancamento = req.body.anoLancamento; 
    const duracao = req.body.duracao; 
    Filme.create({
        imagem: imagem,
        titulo: titulo,
        anoLancamento: anoLancamento,
        duracao: duracao
    }).then(() => {
        res.redirect("/cadastroFilme");
    }).catch((error) => {
        console.log(error);
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/galeriaFilme", (req, res) => {
    Filme.findAll().then((filmes) => {
        res.render("galeriaFilme", {
            filmes: filmes,
            pageTitle: "Galeria de Filmes"
        });
    });
});

router.get("/galeriaFilme/delete/:id", (req, res) => {
    const id = req.params.id;
    Filme.destroy({
        where: { id: id }
    }).then(() => {
        res.redirect("/galeriaFilme");
    });
});

export default router;