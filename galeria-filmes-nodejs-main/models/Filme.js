import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Filme = connection.define('filmes' ,{
  imagem: {
    type: Sequelize.STRING,
    allowNull: false
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  anoLancamento: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1900,
      max: new Date().getFullYear()
    }
  },
  duracao: {
    type: Sequelize.TIME,
    allowNull: false
  }
});

Filme.sync({force: false})
export default Filme