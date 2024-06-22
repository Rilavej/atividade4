import mysql2 from "mysql2/promise";

import { config } from "dotenv";
config()

// import { pid } from 'node:process'
console.log(process.pid)

//encapsulado para poder exportar
const pool = ( async () => {
        try {
        const pool = mysql2.createPool({
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_USER, 
            password: process.env.MYSQL_PASSWORD, 
        })

        await pool.query(`SHOW STATUS LIKE "%conn%"`)
            .then(([result]) => console.log(`SHOW STATUS LIKE "%conn%"`, result))

        return pool

    } catch (err) {
        console.error(err)
    }
})();

export default await pool