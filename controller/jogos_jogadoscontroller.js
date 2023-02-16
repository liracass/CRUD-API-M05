// controller seria a parte dos métodos e funçoes ( no caso aqui sql)

// primeiro chamar a conexão
const pool = require('../database/index')

const jogos_jogados = {
   getALL: async (req , res) => {
    try {
         const [rows , fields] = await pool.query(" select * from jogos_jogados") 
         //agora a resposta dessa consulta 
        res.json({data: rows})
        
    } catch (error) {
        console.log(error)
    }

   },
   getById: async (req , res) => {
      try {
        //pegar o id em especifico
        const {id} = req.params
        const [ rows, fields] = await pool.query(`select * from jogos_jogados where id = ${id} ` )
        res.json({data: rows})
        
      } catch (error) {

        console.log(error)
        
      }
   },
    
create: async (req, res) => { 
    try{
        const {nome, ano_lancamento, nome_empresa, genero} = req.body
        const sql = "insert into jogos_jogados (nome,ano_lancamento,nome_empresa,genero) values (?,?,?,?)"
        const [rows, field] = await 
        pool.query(sql, [nome, ano_lancamento,nome_empresa,genero])
        res.json({ data: rows })
    }catch(error){
        console.log(error)
    }

},

   update: async (req, res) => { 
    try{
        const {nome, ano_lancamento, nome_empresa, genero } = req.body
        const {id} = req.params
        const sql = "update jogos_jogados set nome = ?, ano_lancamento = ? , nome_empresa = ? , genero = ? where id = ?"
        const [rows, field] = await 
        pool.query(sql, [nome, ano_lancamento,nome_empresa , genero ,id])
        res.json({ data: rows })
    }catch(error){
        console.log(error)
        res.json({ status: "error" })
    }

 },
 delete: async (req, res) => { 
    try{
            const {id} = req.params
            const sql = "delete from jogos_jogados where id = ?"
            const [rows, field] = await 
            pool.query(sql, [id])
            res.json({ data: rows })
    }catch(error){
        console.log(error)
        res.json({ status: "error" })
    }

  }
   
}


module.exports = jogos_jogados