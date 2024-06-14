import { createPool } from "mysql2/promise";

import { config } from "dotenv";
config()

const connection = (async () => {
    
    try {
        const pool = createPool({
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_USER, 
            password: process.env.MYSQL_PASSWORD, 
        })

        const conn = await pool.getConnection()
        console.log("Conexão com servidor de banco de dados estabelecida.")
        return conn
    }
    catch (err) {

    }

})();

export default connection