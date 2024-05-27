const conn = require("../db/conn");
const { DataTypes } = require("sequelize");

const Jogo = conn.define("Jogo", {
    titulo: {
      type: DataTypes.STRING,
      required: false,
    },
    descricao: {
      type: DataTypes.STRING,
      required: true,
    },
    precobase: {
        type: DataTypes.DOUBLE,
        required: true,
      },
  });
   

module.exports = Jogo;