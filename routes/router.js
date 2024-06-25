import { Router } from "express"
const router = Router()
import controller from "../controllers/controller.js"

router.get("/teste", controller.teste)

router.get("/", controller.getAll)
router.get("/tarefa", controller.getAll)
router.get("/tarefa/:id", controller.getRow)
router.post("/tarefa", controller.setRow)
router.put("/tarefa/:id", controller.updateRow)
router.delete("/tarefa/:id", controller.deleteRow)


export default router