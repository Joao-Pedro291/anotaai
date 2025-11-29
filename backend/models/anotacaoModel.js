import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db_connection";

const Anotacao = sequelize.define("Anotacao", {
  id_anotacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_criacao,
  data_finalizacao,
  id_usuario,
  finalizada,
});
