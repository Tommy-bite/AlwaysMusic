import { pool } from "../database/connection.js";

const allEstudiantes = async () => {

  const query = {
    text : "SELECT * FROM estudiantes"
  }

  const { rows } = await pool.query(query);
  return rows;
};

const insertEstudiante = async (estudianteObj) => {
  const { nombre, rut, curso, nivel } = estudianteObj;

  const query = {
    text : `
    INSERT INTO estudiantes (nombre, rut, curso, nivel)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
   values : [nombre, rut, curso, nivel]
  }

  try {
    const { rows } = await pool.query(query);
    return rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteEstudiante = async (id) => {
  const query = {
    text : `DELETE FROM estudiantes WHERE id = $1`,
    values : [id],
  } 

  try {
    const result = await pool.query(query);
    return result; // Devuelve el resultado para verificar si se eliminó alguna fila
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateEstudiante = async (id, updatedData) => {
  const { nombre, rut, curso, nivel } = updatedData;

  const query = {
    text: `
    UPDATE estudiantes
    SET nombre = $1, rut = $2, curso = $3, nivel = $4
    WHERE id = $5
    RETURNING *;
  `,
  values : [nombre, rut, curso, nivel, id]
  }

  try {
    const { rows } = await pool.query(query);
    return rows[0]; 
  } catch (error) {
    throw new Error(error.message);
  }
};

const getEstudiante = async (rut) => {
    const query = {
      text : `SELECT * FROM estudiantes WHERE rut = '${rut}'`,
    }
    try {
      const { rows } = await pool.query(query);
      return rows[0]; 
    } catch (error) {
      throw new Error(error.message);
    }
};
  

export const estudianteModel = {
  allEstudiantes,
  insertEstudiante,
  deleteEstudiante,
  updateEstudiante,
  getEstudiante
};
