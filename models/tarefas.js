import pool from "../config/pool.js"

import schema from "./schema.js"
// espera o carregamento do modulo schema
// await sem efeito porque já foi declarado em cada função do modulo
/* await */ schema

async function insertInto(tabela){
    try {
        console.log (`####4 INSERT INTO ? VALUES (?, ?, ?, ?)`)
        const result = await pool.execute(
            `INSERT INTO ${tabela.nome} (${tabela.colunas[0]}, ${tabela.colunas[1]}, ${tabela.colunas[2]}, ${tabela.colunas[3]})
             VALUES (?, ?, ?, ?)`, tabela.values)
        console.log(result)
        return result

    } catch (err) {
        console.error(err)
        return err
    }
}

async function getTarefas() {
    try {
        console.log(`#####5 SELECT * FROM tarefa`)
        const result = await pool.execute(`SELECT * FROM tarefa`)
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
        nome: "tarefa",
        colunas: [`titulo`, `descricao`, `prazo`, `status`],
        values: ['fazer CRUD', 'concluir atividade 4', 'para ontem', 'atrasado'] 
    }

console.log(tabela)
insertInto(tabela)

export default getTarefas