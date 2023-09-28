const express = require('express')
const JefeBitacoraControllers = require('../controllers/bitacoraJefe_controllers')
const {body,param} = require('express-validator')
const { AutenticacionJefe } = require('../middlewares/verifyRolJefe')
const routerBitacorasJefe = express.Router()


routerBitacorasJefe.post("/getAll",AutenticacionJefe, JefeBitacoraControllers.mostrar_bitacorasJefe)
routerBitacorasJefe.get("/show/:id",AutenticacionJefe, JefeBitacoraControllers.mostrar_bitacoraJefe);


routerBitacorasJefe.post("/create", [
    AutenticacionJefe, 
    body('titulo').notEmpty().withMessage('El campo título es requerido').isString().withMessage('El campo título debe ser un string').isLength({ max: 200 }),
    body('descripcion').notEmpty().withMessage('El campo descripción es requerido').isString().withMessage('El campo descripción debe ser un string').isLength({ max: 1300 }),
    body('fecha_creacion').notEmpty().withMessage('El campo fecha de creación es requerido').isDate().withMessage('El campo debe ser una fecha'),
    body('hora_inicio').notEmpty().withMessage('El campo hora de inicio es requerido').isString().withMessage('El campo hora de inicio debe ser un string').isLength({ max: 10 }),
    body('hora_fin').notEmpty().withMessage('El campo hora de fin es requerido').isString().withMessage('El campo hora de fin debe ser un string').isLength({ max: 10 }),
    body('id_tipo_bitacora').notEmpty().withMessage('El campo ID de tipo de bitácora es requerido').isNumeric().withMessage('El campo ID de tipo de bitácora debe ser numérico'),
    body('id_estado_bitacora').notEmpty().withMessage('El campo ID de estado de bitácora es requerido').isNumeric().withMessage('El campo ID de estado de bitácora debe ser numérico'),
    body('id_usuario').notEmpty().withMessage('El campo ID de usuario es requerido').isNumeric().withMessage('El campo ID de usuario debe ser numérico')
], JefeBitacoraControllers.crear_bitacoraJefe);

routerBitacorasJefe.get("/tipobitacoras",[AutenticacionJefe],JefeBitacoraControllers.obtener_tipo_bitacoras);
routerBitacorasJefe.get("/estados",JefeBitacoraControllers.mostrar_estados);

routerBitacorasJefe.delete("/delete/:id",
[
    AutenticacionJefe,
    param("id").notEmpty().withMessage("El campo id es requerido").isInt().withMessage("El campo id debe ser entero")
], JefeBitacoraControllers.eliminar_bitacoraJefe)

routerBitacorasJefe.put("/update/:id",
[
    AutenticacionJefe, 
    body('titulo').notEmpty().withMessage('El campo título es requerido').isString().withMessage('El campo título debe ser un string').isLength({ max: 50 }),
    body('descripcion').notEmpty().withMessage('El campo descripción es requerido').isString().withMessage('El campo descripción debe ser un string').isLength({ max: 1300 }),
    body('fecha_creacion').notEmpty().withMessage('El campo fecha de creación es requerido').isDate().withMessage('El campo debe ser una fecha'),
    body('hora_inicio').notEmpty().withMessage('El campo hora de inicio es requerido').isString().withMessage('El campo hora de inicio debe ser un string').isLength({ max: 10 }),
    body('hora_fin').notEmpty().withMessage('El campo hora de fin es requerido').isString().withMessage('El campo hora de fin debe ser un string').isLength({ max: 10 }),
    body('id_tipo_bitacora').notEmpty().withMessage('El campo ID de tipo de bitácora es requerido').isNumeric().withMessage('El campo ID de tipo de bitácora debe ser numérico'),
    body('id_estado_bitacora').notEmpty().withMessage('El campo ID de estado de bitácora es requerido').isNumeric().withMessage('El campo ID de estado de bitácora debe ser numérico'),
    body('id_usuario').notEmpty().withMessage('El campo ID de usuario es requerido').isNumeric().withMessage('El campo ID de usuario debe ser numérico')
],
JefeBitacoraControllers.actualizar_bitacoraJefe);

module.exports = routerBitacorasJefe;