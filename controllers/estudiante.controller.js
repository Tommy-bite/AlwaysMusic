import { estudianteModel } from "../models/estudiantes.model.js";

const getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await estudianteModel.allEstudiantes();
    return res.json(estudiantes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const createEstudiante = async (req, res) => {
  try {
    const { nombre, rut, curso, nivel } = req.body;

    if (!nombre || !rut || !curso || !nivel) {
      return res
        .status(400)
        .send({ message: "Todos los campos son obligatorios" });
    }

    const estudianteObj = {
      nombre,
      rut,
      curso,
      nivel,
    };

    const estudiante = await estudianteModel.insertEstudiante(estudianteObj);
    return res.json(estudiante);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

const deleteEstudiante = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({ message: "ID es obligatorio" });
    }

    const result = await estudianteModel.deleteEstudiante(id);
    if (result.rowCount === 0) {
      return res.status(404).send({ message: "Estudiante no encontrado" });
    }

    return res
      .status(200)
      .send({ message: "Estudiante eliminado correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, error: error.message });
  }
};

const updateTodo = (req, res) => {
  return res.json({ ok: true });
};

export const estudianteController = {
  getEstudiantes,
  createEstudiante,
  updateTodo,
  deleteEstudiante,
};
