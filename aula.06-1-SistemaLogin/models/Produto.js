import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Produto = connection.define('produtos',{
    nome: {
        type: Sequelize.STRING,
        aLLowNuLL: false,
    },
    preco: {
        type: Sequelize.INTEGER,
        aLLowNuLL: false,
    },
    categoria: {
        type: Sequelize.STRING,
        aLLowNuLL: false,
    }
});

Produto.sync({force: false})
export default Produto