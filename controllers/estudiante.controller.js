import { estudianteModel } from "../models/estudiantes.model.js";

const getEstudiantes = async (req, res) => {

    try {
        const estudiantes = await estudianteModel.allEstudiantes()
        return res.json(estudiantes)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok : false})
    }

}

const createTodo = (req, res) => {
    return res.json({ok:true})
}

const updateTodo = (req, res) => {
    return res.json({ok:true})
}

const deleteTodo = (req, res) => {
    return res.json({ok:true})
}


export const estudianteController = {
    getEstudiantes,
    createTodo,
    updateTodo,
    deleteTodo
}