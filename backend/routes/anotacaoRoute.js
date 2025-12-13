import { Router } from "express";
import anotacaoController from "../controllers/anotacaoController.js";

const routes = Router();

routes.get("/anotacao", anotacaoController.get);
routes.get("/anotacao/:id", anotacaoController.getById);
routes.post("/anotacao/", anotacaoController.post);
routes.patch("/anotacao/:id", anotacaoController.put);
routes.delete("/anotacao/:id", anotacaoController.remove);

export default routes;
