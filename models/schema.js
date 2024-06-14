import pool from "../config/pool.js"

try {
    console.log("# `CREATE DATABASE IF NOT EXISTS atividade4;`")
    console.log(await pool.query(`CREATE DATABASE IF NOT EXISTS atividade4;`))
    
    console.log(`## USE atividade4;`)
    console.log(await pool.query(`USE atividade4;`))

} catch (err) {
    console.log(err)
}

var lista = ["tarefa", "titulo", "descricao", "prazo", "status"]

// async function createTable(lista) {

    try {
        console.log("### CREATE TABLE IF NOT EXISTS")

        const result = await pool.execute(
            `CREATE TABLE IF NOT EXISTS ${lista[0]} (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                ${lista[1]} VARCHAR(50), 
                ${lista[2]} VARCHAR(50), 
                ${lista[3]} VARCHAR(50), 
                ${lista[4]} VARCHAR(50)
            )`,
            lista
        )
        console.log(result)

    } catch (err) {
        console.log(err)
    }
// }
// createTable(lista)



export default pool