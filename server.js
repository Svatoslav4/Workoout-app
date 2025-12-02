import express from "express";
import authRoutes from './app/auth/Auth.route.js';
import 'colors';
import dotenv from "dotenv"
import morgan from 'morgan'

dotenv.config()

function startServer() { 

    const app = express();

    if (process.env.NODE_ENV=='development') {
    app.use(morgan('dev'))
    }
    app.use(express.json());
    app.use('/login', authRoutes);  

    const port = process.env.Port || 8000

    app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${port}`.green.bold); 
    });

}

startServer()