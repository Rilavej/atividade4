import { Router } from "express"
const router = Router()
import controller from "../controllers/controller.js"

router.get("/teste", controller.teste)
router.get("/", controller.getTarefas)
router.get("/tarefas", controller.getTarefas)


export default router