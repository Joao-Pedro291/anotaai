import { Sequelize } from "sequelize";
import "dotenv/config.js";

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.PORT_DB;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
  port: dbPort,
});

sequelize
  .query("SELECT * FROM tb_anotacao")
  .then(([resultados]) => {
    console.log(resultados);
  })
  .catch((error) => console.log("Erro na consulta" + error));

export { sequelize }; // export nomeado
//export default sequelize;
