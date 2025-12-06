import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db_connection.js";

const Anotacao = sequelize.define(
  "Anotacao",
  {
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
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data_finalizacao: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    finalizada: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "tb_anotacao",
    timestamps: false,
  }
);

export default Anotacao;
