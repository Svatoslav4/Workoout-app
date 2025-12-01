import express from "express";
import { AuthUser } from "./auth.controller.js";  // іменований import

const router = express.Router();

router.route('/').post(AuthUser);  // маршрут /auth/ буде працювати
export default router;
