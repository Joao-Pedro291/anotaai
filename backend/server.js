import express from "express";
import { sequelize } from "./config/db_connection.js";
import routes from "./routes/anotacaoRoute.js";

const app = express(); //1

app.use(express.json()); //2

app.use("/", routes);

sequelize
  .authenticate()
  .then(() => console.log("Banco autenticado com sucesso"))
  .catch((error) => console.log("Falha na autenticação: " + error));

app.listen(3001, () => {
  console.log("servidor rodando na porta 3000");
});
