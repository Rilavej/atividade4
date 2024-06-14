import pool from "../config/pool.js"

try {
    console.log("# `CREATE DATABASE IF NOT EXISTS atividade4;`")
    console.log(await pool.query(`CREATE DATABASE IF NOT EXISTS atividade4;`))
    
    console.log(`## USE atividade4;`)
    console.log(await pool.query(`USE atividade4;`))

} catch (err) {
    console.log(err)
}

export default pool