import express from "express";
import encuestactrl from "../controllers/encuesta.controllers.js";
import EncuestaSchema from "../validator/EncuestaSchema.js";
import { validateSchema } from "../middlewares/Encuesta-validacion.js";

const routes = express.Router();

routes.post("/encuesta", EncuestaSchema, validateSchema, encuestactrl.store);

export default routes;
