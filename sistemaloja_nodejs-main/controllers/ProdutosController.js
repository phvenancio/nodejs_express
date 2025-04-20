import express from 'express'
const router = express.Router()

import Produto from '../models/Produto.js'

router.get("/produtos",function(req,res){
    Produto.findAll().then(produtos => {
    res.render("produtos", {
        produtos: produtos
    })
   })
})

router.post("/produtos/new", (req, res) =>{
    const nome = req.body.nome
    const preco = req.body.preco
    const categoria = req.body.categoria
    Produto.create({
        nome : nome,
        preco : preco,
        categoria : categoria
    }).then(() => {
        res.redirect("/produtos")
    })
})

router.get("/produtos/delete/:id", (req, res) =>{
    const id = req.params.id
    Produto.destroy({
        where: {
            id : id
        }
    }).then(() => {
        res.redirect("/produtos")
    }).catch(error => {
        console.log(error)
    })
})

router.get("/produtos/edit/:id", (req, res) => {
    const id = req.params.id;
    Produto.findByPk(id)
    .then((produtos) => {
        res.render("produtoEdit", {
            produtos: produtos,
        });
    })
    .catch((error) => {
        console.log(error);
    });
});

// Rota de Alteração de Cliente
router.post("/produtos/update", (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;
    Produto.update(
        {
            nome: nome,
            preco: preco,
            categoria: categoria,
        },
        { where: { id: id } }
    )
    .then(() => {
        res.redirect("/produtos");
    })
    .catch((error) => {
        console.log(error);
    });
});

export default router