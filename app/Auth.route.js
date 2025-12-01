import {express} from "express"
import { AuthUser } from "./auth.controller.js"

const router = express.Router()


router.route('/login').post(AuthUser)

export default router