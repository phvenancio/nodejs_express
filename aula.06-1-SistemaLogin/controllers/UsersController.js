import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";

// ROTA DE LOGIN
router.get("/login", (req, res) => {
    res.render("login", {
        loggedOut: true,
        messages: req.flash()
    });
});

// ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
        where: { email: email }
    }).then((user) => {
        if(user != undefined){
            const correct = bcrypt.compareSync(password, user.password);
            // SE A SENHA FOR VÁLIDA
            if(correct){
                // AUTORIZA O LOGIN
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                req.flash("success", "Login efetuado com sucesso!");
                res.redirect("/");
                // SE A SENHA NÃO FOR VÁLIDA
            } else{
                req.flash("danger", "A Senha Informada está Incorreta! Tente Novamente.");
                res.redirect("/login");
            }
        } else{
            req.flash("danger", "O Usuário Informado Não Existe! Verifique os Dados Digitados.");
            res.redirect("/login");
        }
    });
});

router.get("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect("/login");
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
    res.render("cadastro", {
        loggedOut: true,
        messages: req.flash()
    });
});

// ROTA DE CRIAÇÃO DE USUÁRIO
router.post("/createUser", (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
        where: { email: email }
    }).then((user) => {
        // SE NÃO HOUVER O USUÁRIO CADASTRADO
        if(user == undefined){
            // AQUI É FEITO O CADASTRO E O HASH(EMBARALHAMENTO) DE SENHA
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            User.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect("/login");
            });
        // CASO O USUÁRIO JÁ ESTEJA CADASTRADO
        } else{
            req.flash("danger", "O Usuário já está Cadastrado. Faça o Login.");
            res.redirect("/cadastro");
        }
    });
});

export default router;