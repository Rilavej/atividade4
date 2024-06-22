import pool from "../config/pool.js"

const schemaDefinition = ( async function () {
    try {
        
        await pool.query(`CREATE DATABASE IF NOT EXISTS atividade4`)
            .then(([result]) => {
                console.log(`CREATE DATABASE IF NOT EXISTS atividade4`)
                console.log(result)
            })
        
        
        await pool.query(`USE atividade4`)
            .then(([result]) => {
                console.log(`USE atividade4`)
                console.log(result)
            })
        
        var coluna = ["tarefa", "titulo", "descricao", "prazo", "status"]

        await pool.query(
            `CREATE TABLE IF NOT EXISTS ${coluna[0]} (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                ${coluna[1]} VARCHAR(50), 
                ${coluna[2]} VARCHAR(50), 
                ${coluna[3]} VARCHAR(50), 
                ${coluna[4]} VARCHAR(50)
            )`, coluna
        ).then(([result]) => {
            console.log("CREATE TABLE IF NOT EXISTS")
            console.log(result)
        })

    } catch (err) {
        console.log(err)
    }
})();

export default schemaDefinition