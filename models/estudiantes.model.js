import { pool } from "../database/connection.js"

const allEstudiantes = async() => {
    const {rows} = await pool.query(" SELECT * FROM estudiantes ")
    return rows;
}

const insertEstudiante = async(req, res) => {
    const { title } = req.body;
    const {rows} = await pool.query(` INSERT INTO estudiantes ('title') VALUES (${title}) `)
    return rows;
}

export const estudianteModel = {
    allEstudiantes,
    insertEstudiante
}