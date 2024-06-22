import pool from "../config/pool.js"
import schemaDefinition from "./schema.js"

await schemaDefinition.then(() => console.log("DATA DEFINED"))

const tarefa = {}

tarefa.insertInto = async function ( tabela ){
    try {
        const [result] = await pool.execute(
            `INSERT INTO ${tabela.tableName} (${tabela.colunas[0]}, ${tabela.colunas[1]}, ${tabela.colunas[2]}, ${tabela.colunas[3]})
             VALUES (?, ?, ?, ?)`, tabela.values)
        console.log("INSERT INTO")
        console.log(result)
        return result
    } catch (err) {
        console.error(err)
        return err
    }
}

tarefa.getTarefas = async function () {
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

// para teste
var tabela = 
    {
        tableName: "tarefa",
        colunas: [`titulo`, `descricao`, `prazo`, `status`],
        values: ['fazer CRUD', 'concluir atividade 4', 'para ontem', 'atrasado'] 
    }

console.log(tabela)

tarefa.insertInto(tabela)

export default tarefa