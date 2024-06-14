import connection from "../config/connection.js"

try {
    console.log("# `CREATE DATABASE IF NOT EXISTS atividade4;`")
    console.log(await connection.query(`CREATE DATABASE IF NOT EXISTS atividade4;`))
    
    console.log(`## USE atividade4;`)
    console.log(await connection.query(`USE atividade4;`))

} catch (err) {
    console.log(err)
}

export default connection