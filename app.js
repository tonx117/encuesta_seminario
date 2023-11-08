import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import routes from "./routes/router.encuesta.js";
import sequelize from "./database/sequelize.js";

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

sequelize.sync()
  .then(() => {
    console.log('Tabla Encuesta sincronizada correctamente');
  })
  .catch((error) => {
    console.error('Error al sincronizar la tabla:', error);
  });

app.listen(port, () =>
  console.log("Server on port: omaiga " + port)
);
