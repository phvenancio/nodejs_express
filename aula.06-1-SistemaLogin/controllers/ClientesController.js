import express from "express";
const router = express.Router();
// IMPORTANDO O MODEL DE CLIENTE
import Cliente from "../models/Cliente.js";
// Importando o Middleware Auth
import Auth from "../middleware/Auth.js";

// ROTA CLIENTES
router.get("/clientes", Auth, (req, res) => {
    Cliente.findAll().then((clientes) => {
        res.render("clientes", {
            clientes: clientes,
        });
    });
});

// Rota de cadastro de clientes
router.post("/clientes/new", Auth, (req, res) => {
    // Recebendo os dados do formulário e gravando nas variáveis
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    Cliente.create({
        nome: nome,
        cpf: cpf,
        endereco: endereco,
    }).then(() => {
        res.redirect("/clientes");
    });
});

// Rota de exclusão de clientes com parametro ID
router.get("/clientes/delete/:id", Auth, (req, res) => {
    // Coletar id que veio da url
    const id = req.params.id;
    // Metdodo para excluir
    Cliente.destroy({
        where: {
            id: id,
        },
    }).then(() => {
        res.redirect("/clientes");
    }).catch((error) => {
        console.log(error);
    });
});

// Rota de edição de dados do cliente
router.get("/clientes/edit/:id", Auth, (req, res) => {
    const id = req.params.id;
    Cliente.findByPk(id).then((cliente) => {
        res.render("clienteEdit", {
            cliente: cliente,
        });
    }).catch((error) => {
        console.log(error);
    });
});

// Rota de Alteração de Cliente
router.post("/clientes/update", Auth, (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    Cliente.update({
        nome: nome,
        cpf: cpf,
        endereco: endereco,
    },{ 
        where: { id: id } 
    }).then(() => {
        res.redirect("/clientes");
    }).catch((error) => {
        console.log(error);
    });
});

export default router;