import express from 'express';

// Importación de rutas
import estudianteRoutes from './routes/estudiantes.route.js';

const app = express();

// Rutas
app.use('/estudiantes', estudianteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor andando http://localhost' + PORT))