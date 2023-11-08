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
    validate: {
      isAlpha: true,
    },
  },
  localidad: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      len: [4, 25],
    },
  },
  nivel_estudio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero_musical: {
    type: DataTypes.STRING,
    validate: {
      isAlpha: true,
      len: [3, 25],
    },
  },
  cancion_reciente: {
    type: DataTypes.STRING,
    validate: {
      len: [3, 25],
    },
  },
  cancion_favorita: {
    type: DataTypes.STRING,
    validate: {
      len: [3, 25],
    },
  },
  artista_musical: {
    type: DataTypes.STRING,
    validate: {
      len: [3, 25],
    },
  },
  plataforma_musical: {
    type: DataTypes.STRING,
    validate: {
      isAlpha: true,
      len: [3, 25],
    },
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
});

Encuesta.sync();

export default Encuesta;
