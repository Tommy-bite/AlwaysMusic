import express from 'express';

// Importación de rutas
import estudianteRoutes from './routes/estudiantes.route.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Rutas
app.use('/estudiantes', estudianteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor andando http://localhost' + PORT))