const controller = {}

controller.teste = (req, res) => {
    res.status(200).send("Hello World!")
}

export default controller