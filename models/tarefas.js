import pool from "../config/pool.js"




async function getTarefas() {
    try {
        console.log("#### SELECT * FROM tarefas;")
        const result = await pool.execute(`SELECT * FROM tarefas;`)
        return result

    } catch (err) {
        return err
    }
}

export default getTarefas