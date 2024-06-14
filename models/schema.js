/* const schema = require("../config/connection");

async function carregarSchema() {
    try {
        {const [results, fields] = await schema.query(`CREATE DATABASE IF NOT EXISTS atividade4;`)
        console.log("# CREATE DATABASE IF NOT EXISTS atividade4;")
        console.log(results)}

        {const [results, fields] = await schema.query(`USE atividade4;`)
        console.log("## USE atividade4;")
        console.log(results)}
        
    } catch (err) {
        console.log(err)
    }
};

module.exports = carregarSchema */

const schema = require("../config/connection");

async function carregarSchema() {
    try {
        {const [results, fields] = await schema.query(`CREATE DATABASE IF NOT EXISTS atividade4;`)
        console.log("# CREATE DATABASE IF NOT EXISTS atividade4;")
        console.log(results)}

        {const [results, fields] = await schema.query(`USE atividade4;`)
        console.log("## USE atividade4;")
        console.log(results)}
        
    } catch (err) {
        console.log(err)
    }

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

    createTable("tarefa", "titulo", "descricao", "prazo", "status")

    try {
        const result = await connection.execute(`SELECT * FROM tarefas;`)
        console.log("#### SELECT * FROM tarefas;")
        return result

    } catch (err) {
        return err
    }

};

module.exports = carregarSchema

