import { Router } from "express"
const router = Router()
import { teste } from "../controllers/controller.js"

router.get("/teste", teste)

export default router