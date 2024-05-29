import { Router } from "express";
import {estudianteController} from "../controllers/estudiante.controller.js"

const router = Router();

// PATH /todos

router.get('/' , estudianteController.getEstudiantes)
router.post('/agregar' , estudianteController.createTodo)
router.delete('/eliminar/:id' , estudianteController.deleteTodo)
router.put('/modificar' , estudianteController.updateTodo)

export default router;