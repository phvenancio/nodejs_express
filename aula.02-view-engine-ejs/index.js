// Importando o Express na aplicação
const express = require("express"); // CommonJS Modules
// Criando uma instância do Express
const app = express();

// Definindo o EJS como renderizador de páginas
app.set(`view engine`, `ejs`);

// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  // Será renderizada a página index.ejs que está na pasta `views`
  res.render("index");
});

//ROTA PERFIL
// :nome é um parâmetro obrigatório
// :nome? é um parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  // Verificando se o parâmetro nome existe
  res.render("perfil", {nome: nome});
});

//ROTA DE VÍDEOS
// :playlist? e :video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  res.render("videos", {playlist: playlist, video: video});
});

//ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  const produto = req.params.produto;
  res.render("produtos", {produto: produto, listaProdutos: listaProdutos
    // Na pagina produtos.ejs haverá uma testagem de condição
  });
});

//ROTA DE PEDIDOS
app.get("/pedidos", (req, res) => {
  // ARRAY DE OBJETOS COM OS PEDIDOS
  const pedidos = [{produto: "Celular", valor: 3000}, {produto: "Computador", valor: 4000}, {produto: "Tablet", valor: 2000}, {produto: "Notebook", valor: 3800}];
  // Enviando o array de objetos para a página
  res.render("pedidos", {pedidos: pedidos});
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
