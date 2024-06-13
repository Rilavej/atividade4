const controller = {}

controller.teste = (req, res) => {
    res.status(200).send("Hello World!")
}

module.exports = controller