// Importando e criando uma instancia express
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// Definindo Servidor
const port = 8080;
app.listen(port, (error) => {
    if(error){
        console.log(`Ocorreu um erro: ${error}`);
    } else {
        console.log(`servidor iniciado com sucesso em http://localhost:${port}`);
    }
});

// Criando Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/clientes", (req,res) => {
    const listaClientes = [{nome: "Rodrigo Moraes de Souza", cpf: "123.456.789-01", endereco: "R dos Bobos, 0, Bairro de Ninguem"}, {nome: "Jaqueline Pedroso de Freitas", cpf: "456.789.012-34", endereco: "R Quarenta e Três, 154, Jd Lopez"}, {nome: "Lucas Pereira", cpf: "789.123.456-78", endereco: "R Joaquim Lopez, 12, Jd das Palmeiras"}, {nome: "Gabriel Cardoso Lima", cpf: "192.837.465-01", endereco: "R Venâncio das Flores, 87, Vila São Pedro"}];
    res.render("clientes", {listaClientes: listaClientes});
});

app.get("/produtos", (req,res) => {
    const listaProdutos = [{nomeProduto: "Refrigerante", preco: "6.00", categoria: "Bebida"}, {nomeProduto: "Salgadinho", preco: "3.00", categoria: "Comida"},{nomeProduto: "Arroz", preco: "36.00", categoria: "Comida"},{nomeProduto: "Detergente", preco: "2.00", categoria: "Limpeza"}];
    res.render("produtos", {listaProdutos: listaProdutos});
});

app.get("/pedidos", (req,res) => {
    const listaPedidos = [{numeroPedido: "1", valor: "20.00"}, {numeroPedido: "2", valor: "60.00"}, {numeroPedido: "3", valor: "72.00"}, {numeroPedido: "4", valor: "10.00"}];
    res.render("pedidos", {listaPedidos: listaPedidos});
});