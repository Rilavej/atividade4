import pool from "./schema.js"

 var lista = [`tarefa`, `titulo`, `descricao`, `prazo`, `status`]

// async function createTable(lista) {

    try {
        console.log("### CREATE TABLE IF NOT EXISTS")

        const result = await pool.query(
            `CREATE TABLE IF NOT EXISTS ${lista[0]} (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                ${lista[1]} VARCHAR(50), 
                ${lista[2]} VARCHAR(50), 
                ${lista[3]} VARCHAR(50), 
                ${lista[4]} VARCHAR(50)
            )`/* ,
            lista */
            )
        console.log(result)

    } catch (err) {
        console.log(err)
    }
// }
// createTable(`tarefa`, `titulo`, `descricao`, `prazo`, `status`)


async function getTarefas() {
    try {
        console.log("#### SELECT * FROM tarefas;")
        const result = await pool.execute(`SELECT * FROM tarefas;`)
        return result

    } catch (err) {
        return err
    }
}

export default getTarefas