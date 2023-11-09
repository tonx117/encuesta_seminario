import { DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

const Encuesta = sequelize.define("Encuesta", {
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 10,
      max: 100,
    },
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nivel_estudio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero_musical: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cancion_reciente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cancion_favorita: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artista_musical: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plataforma_musical: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tiempo_escucha_diario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 0,
      max: 1440,
    },
  },
  horario_favorito_escucha: {
    type: DataTypes.STRING,
  },
});

Encuesta.sync();

export default Encuesta;
