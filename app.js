import express from "express";
import dotenv from "dotenv";
import Encuesta from "./model/EncuestaModel.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import routes from "./routes/router.encuesta.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.static("public"));

app.use("/api", routes);

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT, () =>
  console.log("Server on port: omaiga " + port)
);
