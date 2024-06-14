import getTarefas from "../models/tarefas.js"

const controller = {}

controller.teste = (req, res) => {
    res.status(200).send("Hello World!")
}

controller.getTarefas = async (req, res) => {
    const results = await getTarefas()
    res.status(200).send(results)
}

export default controller