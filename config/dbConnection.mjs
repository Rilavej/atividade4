import mysql from "mysql2/promise"

const connection = (async () => {
try {
    const pool = mysql.createPool({
        user: "root",
        password: "rilave",
        host: "192.168.3.9",
        // database: "atividade4",
    })

    console.log("Pool criado {try}")


    const connection = await pool.getConnection()
       .then ((value) => {
            // console.log(`##############\nConexão estabelecida com banco de dados {.then}\n${value}\n##############`)
            console.log(`#\nConexão estabelecida com banco de dados {.then}`)
            // console.log(value)
            console.log(`#`)
        })
        .catch ((err) => {
            // console.log(`##############\nNão foi posível conectar {.catch interno}: \n${err}\n##############`)
            console.log(`##\nNão foi posível conectar {.catch interno}: `)
            console.log(err)
            console.log(`##`)
        })   

} catch (err) {
    // console.log(`Não foi posível conectar {catch externo}: \n${toString(err)}`)
    console.log(`Não foi posível conectar {catch externo}`)
    console.log(err)
}
})();

export default connection
