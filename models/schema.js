import pool from "../config/pool.js"

const connection = await pool.getConnection()

try {

    console.log("#1 `CREATE DATABASE IF NOT EXISTS atividade4;`")
    await connection.query(`CREATE DATABASE IF NOT EXISTS atividade4;`)
    
    console.log(`##2 USE atividade4;`)
    await connection.query(`USE atividade4;`)


    var lista = ["tarefa", "titulo", "descricao", "prazo", "status"]

    console.log("###3 CREATE TABLE IF NOT EXISTS")
    const result = await connection.query(
        `CREATE TABLE IF NOT EXISTS ${lista[0]} (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            ${lista[1]} VARCHAR(50), 
            ${lista[2]} VARCHAR(50), 
            ${lista[3]} VARCHAR(50), 
            ${lista[4]} VARCHAR(50)
        )`, lista
    )
    console.log(result)

} catch (err) {
    console.log(err)
}

connection.release()

export default result