import connection from "../config/connection.js"

async function createTable(tabela, campo1, campo2, campo3, campo4) {
    try {
        const result =  await connection.query(`
            CREATE TABLE IF NOT EXISTS ? (
                id INT AUTO_INCREMENT PRIMARY KEY
                ? VARCHAR(50), 
                ? VARCHAR(50),
                ? VARCHAR(50),
                ? VARCHAR(50)
            );`,
            [tabela, campo1, campo2, campo3, campo4]
        )
        console.log(result)
        console.log("### CREATE TABLE IF NOT EXISTS")
    } catch (err) {
        console.log(err)
    }
}
createTable("tarefa", "titulo", "descricao", "prazo", "status")


async function getTarefas() {
    try {
        const result = await connection.execute(`SELECT * FROM tarefas;`)
        console.log("#### SELECT * FROM tarefas;")
        return result

    } catch (err) {
        return err
    }
}

export default getTarefas