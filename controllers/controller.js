import tarefa from "../models/tarefas.js"

const controller = {}

controller.teste = (req, res) => {
    res.status(200).send("Hello World!")
}

controller.getAll = async (req, res) => {
    const rows = await tarefa.getAll()
    res.status(200).send(rows)
}

controller.getRow = async (req, res) => {
    // const id = Number(req.params.id)
    const row = await tarefa.getRow(req.params.id)
    res.status(200).send(row)
}

controller.setRow = async (req,res) => {
    const values = Object.values(req.body)
    const row = await tarefa.setRow(values)
    res.status(200).send(row)
}

controller.updateRow = async (req,res) => {
    var values = Object.values(req.body)
    console.log(req.params.id)
    values.push(Number(req.params.id))
    const row = await tarefa.updateRow(values)
    res.status(200).send(row)
}

controller.deleteRow= async (req,res) => {
    await tarefa.deleteRow(req.params.id)
    res.status(200).send(`registro com id ${req.params.id} deletado`)
}

export default controller