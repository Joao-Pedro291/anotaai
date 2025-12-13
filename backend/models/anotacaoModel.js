import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db_connection.js";
import Usuario from "./usuarioModel.js";

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
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    finalizada: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    tableName: "tb_anotacao",
    timestamps: false,
  }
);

Usuario.hasMany(Anotacao, { foreignKey: "id_usuario" });
Anotacao.belongsTo(Usuario, { foreignKey: "id_usuario" });

export default Anotacao;
