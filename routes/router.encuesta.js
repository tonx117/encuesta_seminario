import express from "express";
import encuestactrl from "../controllers/encuesta.controllers.js";

const routes = express.Router();

routes.post("/encuesta", encuestactrl.store);

export default routes;
