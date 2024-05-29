import { pool } from "../database/connection.js";

const allEstudiantes = async () => {
  const { rows } = await pool.query(" SELECT * FROM estudiantes ");
  return rows;
};

const insertEstudiante = async (estudianteObj) => {
  const { nombre, rut, curso, nivel } = estudianteObj;

  const query = `
      INSERT INTO estudiantes (nombre, rut, curso, nivel)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

  const values = [nombre, rut, curso, nivel];

  try {
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteEstudiante = async (id) => {
  const query = `DELETE FROM estudiantes WHERE id = $1`;

  try {
    const result = await pool.query(query, [id]);
    return result; // Devuelve el resultado para verificar si se eliminó alguna fila
  } catch (error) {
    throw new Error(error.message);
  }
};

export const estudianteModel = {
  allEstudiantes,
  insertEstudiante,
  deleteEstudiante,
};
