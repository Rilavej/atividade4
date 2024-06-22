import tarefa from "../models/tarefas.js"

const controller = {}

controller.teste = (req, res) => {
    res.status(200).send("Hello World!")
}

controller.getTarefas = async (req, res) => {
    const rows = await tarefa.getTarefas()
    res.status(200).send(rows)
}

export default controller