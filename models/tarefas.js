import pool from "../config/pool.js"
import schemaDefinition from "./schema.js"

await schemaDefinition
console.log("### data defined")

const tarefa = {}

tarefa.insertInto = async function ( tabela ){
    try {
        console.log (`####4 INSERT INTO ? VALUES (?, ?, ?, ?)`)
        const result = await pool.execute(
            `INSERT INTO ${tabela.tableName} (${tabela.colunas[0]}, ${tabela.colunas[1]}, ${tabela.colunas[2]}, ${tabela.colunas[3]})
             VALUES (?, ?, ?, ?)`, tabela.values)
        console.log(result[0])
        return result

    } catch (err) {
        console.error(err)
        return err
    }
}

tarefa.getTarefas = async function () {
    try {
        console.log(`#####5 SELECT * FROM tarefa`)
        const result = await pool.execute(`SELECT * FROM tarefa`)
        console.log(result)
        return result[0]

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