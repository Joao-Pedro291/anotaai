import express from "express";
import { sequelize } from "./config/db_connection.js";
import routes from "./routes/anotacaoRoute.js";
import routesUsuario from "./routes/usuarioRoute.js";
import cors from "cors";

const app = express(); //1

app.use(cors());

app.use(express.json()); //2

app.use("/", routes);
app.use("/", routesUsuario);

sequelize
  .authenticate()
  .then(() => console.log("Banco autenticado com sucesso"))
  .catch((error) => console.log("Falha na autenticação: " + error));

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
