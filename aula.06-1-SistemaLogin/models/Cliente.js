// ORM - Sequelize
import Sequelize from "sequelize";
// Configuração do Sequelize
import connection from "../config/sequelize-config.js";

const Cliente = connection.define('clientes', {
    nome: {
        type: Sequelize.STRING,
        aLLowNuLL: false,
    },
    cpf: {
        type: Sequelize.STRING, //number
        aLLowNuLL: false,
    },
    endereco: {
        type: Sequelize.STRING,
        aLLowNuLL: false
    }   
});

// NÃO FORÇA A CRIAÇÃO DA TABELA CASO JÁ EXISTA
Cliente.sync({force: false})
export default Cliente