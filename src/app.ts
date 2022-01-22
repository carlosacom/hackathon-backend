import express from 'express';
import morgan from 'morgan';
import { userRoutes } from './routes/user.routes';
export const app = express();

// cargar rutas 


// midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rutas
app.use('/users', userRoutes);

