import express from "express";
import authRoutes from './auth/Auth.route.js';
import 'colors';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/login', authRoutes);  // шлях: http://localhost:8000/login

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${port}`.green.bold);
});
