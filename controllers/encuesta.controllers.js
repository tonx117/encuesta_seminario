import Encuesta from "../model/EncuestaModel.js";

const encuestactrl = {};

encuestactrl.store = async (req, res) => {
  try {
    const nuevaEncuesta = await Encuesta.create(req.body);

    return res.json(nuevaEncuesta);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

export default encuestactrl;
