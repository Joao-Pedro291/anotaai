import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const routes = Router();

routes.get("/usuario", usuarioController.get);
routes.get("/usuario/:id", usuarioController.getById);
routes.post("/usuario/", usuarioController.post);
routes.patch("/usuario/:id", usuarioController.put);
routes.delete("/usuario/:id", usuarioController.remove);

export default routes;
