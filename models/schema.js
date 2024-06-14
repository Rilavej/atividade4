import connection from "../config/connection.js"

try {
    const result = await connection.query(`CREATE DATABASE IF NOT EXISTS atividade4;`)
    console.log(result)
    
    const result2 = await connection.query(`USE atividade4;`)
    console.log(result)

} catch (err) {
    console.log(err)
}

