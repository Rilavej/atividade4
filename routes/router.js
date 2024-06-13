const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller.js")

router.get("/teste", controller.teste)

module.exports = router