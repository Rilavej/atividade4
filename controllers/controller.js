// const schema = require("../models/schema")
const getTarefas = require("../models/tarefas")



schema()

const controller = {}

controller.teste = (req, res) => {
    res.status(200).send("Hello World!")
}

controller.tarefas = (req, res) => {
    getTarefas()
}

module.exports = controller
