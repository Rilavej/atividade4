import mysql2 from "mysql2/promise";

import { config } from "dotenv";
config()

const pool = await (async () => {
    
    try {
        const pool = mysql2.createPool({
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_USER, 
            password: process.env.MYSQL_PASSWORD, 
        })
        
        console.log("Conexão com servidor de banco de dados estabelecida.")
        return pool
        
        // const connection = await pool.getConnection()

    }
    catch (err) {
        console.log(err)
    }

})();

export default pool