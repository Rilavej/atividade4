import express, { urlencoded, json } from "express"
const app = express()
import router from "./routes/router.js"

app.use(urlencoded({extended: true}))
app.use(json())
app.use(router)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor escutando a porta ${PORT}`)
})