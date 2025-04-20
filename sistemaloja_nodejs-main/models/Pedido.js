import Sequelize from "sequelize";

import connection from "../config/sequelize-config.js";

const Pedido = connection.define('pedidos',{
    numero: {
        type: Sequelize.INTEGER,
        aLLowNuLL: false,
    },
    valor: {
        type: Sequelize.FLOAT,
        aLLowNuLL: false,
    },
   
});
Pedido.sync({force: false})
export default Pedido