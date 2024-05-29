import { estudianteModel } from "../models/estudiantes.model.js";

const getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await estudianteModel.allEstudiantes();

    if(!estudiantes) {
      return res.status(200).send({message : "No hay estudiantes para mostrar"})
    }

    return res.json(estudiantes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const getEstudiante = async (req, res) => {
  try {
    const { rut } = req.params;

    if (!rut) {
      return res.status(400).send({ message: "Rut es obligatorio" });
    }

    const estudiante = await estudianteModel.getEstudiante(rut);

    if (!estudiante) {
      return res.status(404).send({ message: "Estudiante no encontrado" });
    }

    return res.status(200).send({ estudiante });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, error: error.message });
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

const updateEstudiante = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, rut, curso, nivel } = req.body;

    if (!id) {
      return res.status(400).send({ message: "ID es obligatorio" });
    }

    if (!nombre || !rut || !curso || !nivel) {
      return res
        .status(400)
        .send({ message: "Todos los campos son obligatorios" });
    }

    const updatedEstudiante = await estudianteModel.updateEstudiante(id, {
      nombre,
      rut,
      curso,
      nivel,
    });

    if (!updatedEstudiante) {
      return res.status(404).send({ message: "Estudiante no encontrado" });
    }

    return res.status(200).send({
      message: "Estudiante actualizado correctamente",
      updatedEstudiante,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, error: error.message });
  }
};

export const estudianteController = {
  getEstudiantes,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante,
  getEstudiante,
};
