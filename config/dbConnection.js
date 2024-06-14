import { createPool } from "mysql2/promise";
import sql from "../models/schema.js";

const connection = (async () => {
    try {
        const pool = createPool({
            user: "root",
            password: "rilave",
            host: "192.168.3.9",
            // database: "atividade4",
        })
        
        const connection = await pool.getConnection()
        /* 
            .then ((value) => {
                console.log(`##############\nConexão estabelecida com banco de dados {.then}\n${value}\n##############`)
                console.log(`##############\nConexão estabelecida com banco de dados {.then}`)
                console.log(value)
                console.log(`##############`)
            })
            .catch ((err) => {
                console.log(`##############\nNão foi posível conectar {.catch interno}: \n${err}\n##############`)
                console.log(`##############\nNão foi posível conectar {.catch interno}: `)
                console.log(err)
                console.log(`##############`)
            })
        */

        {const [results, fields] = await connection.query(sql[0])
        console.log(results)}
        
        {const [results, fields] = await connection.query(sql[1])
        console.log(results)}

/* 
        {await connection.query(sql[0])
        .then(([results]) => {
            console.log(results)
        })
        .catch((err) => {
            console.log(err)
        })}

        {await connection.query(sql[1])
        .then(([results]) => {
            console.log(results)
        })
        .catch((err) => {
            console.log(err)
        })}
 */
        console.log("Conexão estabelecida com banco de dados {try}")

        return connection

    } catch (err) {
        // console.log(`Não foi posível conectar {catch externo}: \n${toString(err)}`)
        console.log(`{catch externo}`)
        console.log(err)
    }
})();

export default connection