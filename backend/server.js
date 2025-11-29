import express from "express";

import { sequelize } from "./config/db_connection.js";

const app = express();

sequelize
  .authenticate()
  .then(() => console.log("Banco autenticado com sucesso"))
  .catch((error) => console.log("Falha na autenticação: " + error));

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
