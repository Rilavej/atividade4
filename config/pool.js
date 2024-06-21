import mysql2 from "mysql2/promise";

import { config } from "dotenv";
config()

// import { pid } from 'node:process'
console.log(process.pid)

// const pool = (async () => {
    
    // try {
        const pool = mysql2.createPool({
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_USER, 
            password: process.env.MYSQL_PASSWORD, 
        })
        
        // console.log("Conexão com servidor de banco de dados estabelecida.")
        // return pool
        
        const connection = await pool.getConnection()

        console.log(`#0 SHOW STATUS LIKE "%conn%"`)
        connection.query(`SHOW STATUS LIKE "%conn%"`)
            .then( ([result]) => {console.log(result)} /* , (reason) => {console.log(reason)} */ )
            .catch( (err) => {console.log(err)} )

        connection.release()

    // }
    // catch (err) {
    //     console.log(err)
    // }

// })();
export default pool