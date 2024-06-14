import getTarefas from "../models/tarefas.js"

const controller = {}

controller.teste = (req, res) => {
    res.status(200).send("Hello World!")
}

controller.getTarefas = async (req, res) => {
    const rows = await getTarefas()
    res.status(200).send(rows)
}

export default controller