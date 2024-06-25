import pool from "../config/pool.js"
import schemaDefinition from "./schema.js"

await schemaDefinition.then(() => console.log("DATA DEFINED"))

const tarefa = {}

var tableName = "tarefa"
var tableFields = [`titulo`, `descricao`, `prazo`, `status`]
var tableValues = ['fazer CRUD', 'concluir atividade 4', 'para ontem', 'atrasado'] 

tarefa.setRow = async function (values, tabela = tableName, colunas = tableFields){
    try {
        const [result] = await pool.execute(
            `INSERT INTO ${tabela} (${colunas[0]}, ${colunas[1]}, ${colunas[2]}, ${colunas[3]})
             VALUES (?, ?, ?, ?)`, values)
        console.log("INSERT INTO")
        console.log(result)
        return result
    } catch (err) {
        console.error(err)
        return err
    }
}

tarefa.setRow(tableValues)

tarefa.getAll = async function () {
    try {
        const [result] = await pool.execute(`SELECT * FROM tarefa`)
        console.log(`SELECT * FROM tarefa`)
        console.log(result)
        return result
    } catch (err) {
        console.error(err)
        return err
    }
}

tarefa.getRow =  async function (id) {
    try {
        const [result] = await pool.execute(`
            SELECT * 
            FROM tarefa
            WHERE id = ?`, [id]
        )
            console.log(`SELECT id, titulo, descricao, prazo, status FROM tarefa WHERE id = ?`)
            return result
    } catch (err) {
        console.error(err)
    }
}

tarefa.updateRow = async (values, tabela = tableName, colunas = tableFields) => {
    try {
        const [result] = await pool.execute(`
            UPDATE  ${tabela}
            SET ${colunas[0]} = ?, ${colunas[1]} = ?, ${colunas[2]} = ?, ${colunas[3]} = ?
            WHERE id = ?`, values
        )
    } catch (err) {
        console.error(err)
    }
}

tarefa.deleteRow = async (values, tabela = tableName) => {
    try {
        pool.execute(`
            DELETE FROM ${tabela}
            WHERE id = ?
            `, [values]
        )
    } catch (err) {
        console.log(err)
    }
}

export default tarefa