import express from "express";
const router = express.Router();

// ROTA DE CLIENTES
router.get("/clientes", (req, res) => {
    const clientes = [
        {nome: "Ana Silva", cpf: "123.456.789-00", endereco: "Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP"},
        {nome: "Marcelo Silva", cpf: "678.456.789-00", endereco: "Rua das Palmeiras, 432 - Bairro Jardim Primavera - Felicidade - SP"},
        {nome: "João Silva", cpf: "345.456.789-00", endereco: "Rua das Samambaias, 23 - Bairro Jardim Primavera - Felicidade - SP"},
        {nome: "Maria Silva", cpf: "897.456.789-00", endereco: "Rua dos Girassois, 123 - Bairro Jardim Primavera - Felicidade - SP"}
    ]
    res.render("clientes", {clientes: clientes});
});
export default router;