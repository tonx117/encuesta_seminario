import { checkSchema } from "express-validator";

export const EncuestaSchema = checkSchema({
    edadregistro: {
        in: ["body"],
        notEmpty: true,
        isInt: {
            options: {
                min: 0,
                max: 100
            }
        }
    },
    localidadregistro: {
        in: ["body"],
        notEmpty: true,
        isLength: {
            options: {
                min: 4,
                max: 25
            }
        }
    },
    generomusicalregistro: {
        in: ["body"],
        notEmpty: true,
        isLength: {
            options: {
                min: 3,
                max: 25
            }
        }
    },
    cancionrecenteregistro: {
        in: ["body"],
        notEmpty: true,
        isLength: {
            options: {
                min: 3,
                max: 25
            }
        }
    },
    cancionfavoritaregistro: {
        in: ["body"],
        notEmpty: true,
        isLength: {
            options: {
                min: 3,
                max: 25
            }
        }
    },
    artistamusicalregistro: {
        in: ["body"],
        notEmpty: true,
        isLength: {
            options: {
                min: 3,
                max: 25
            }
        }
    },
    plataformamusicalregistro: {
        in: ["body"],
        notEmpty: true,
        isLength: {
            options: {
                min: 3,
                max: 25
            }
        }
    },
    tiempoescucharegistro: {
        in: ["body"],
        notEmpty: true,
        isInt: {
            options: {
                min: 0,
                max: 960
            }
        }
    }
})