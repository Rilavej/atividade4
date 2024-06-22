import pool from "../config/pool.js"

const schemaDefinition = (async function () {
    try {
        const connection = await pool.getConnection()
        
        console.log("#1 `CREATE DATABASE IF NOT EXISTS atividade4;`")
        const [createDb] = await connection.query(`CREATE DATABASE IF NOT EXISTS atividade4;`)
        console.log(createDb)
        
        
        console.log(`##2 USE atividade4;`)
        const [useDb] = await connection.query(`USE atividade4;`)
        console.log(useDb)
        
        
        var coluna = ["tarefa", "titulo", "descricao", "prazo", "status"]

        console.log("###3 CREATE TABLE IF NOT EXISTS")
        const [createTable] = await connection.query(
            `CREATE TABLE IF NOT EXISTS ${coluna[0]} (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                ${coluna[1]} VARCHAR(50), 
                ${coluna[2]} VARCHAR(50), 
                ${coluna[3]} VARCHAR(50), 
                ${coluna[4]} VARCHAR(50)
            )`, coluna
        )
        console.log(createTable)

        connection.release()

    } catch (err) {
        console.log(err)
    }
})();

export default schemaDefinition