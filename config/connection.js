import { createPool } from "mysql2/promise";

import { config } from "dotenv";
config()

const connection = await (async () => {
    
    try {
        const pool = createPool({
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_USER, 
            password: process.env.MYSQL_PASSWORD, 
        })

        // const connection = await pool.getConnection()

        console.log("Conexão com servidor de banco de dados estabelecida.")
        return pool
    }
    catch (err) {
        console.log(err)
    }

})();

export default connection