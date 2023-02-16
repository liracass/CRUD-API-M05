//conexão com o banco de dados
const pool = require('../database/index')

const lista_interesse = {
   getAll: async (req , res) =>{ 
     try {
         const [ rows , fields] = await pool.query('select * from lista_interesse')
         //resposta dessa consulta
         res.json({data: rows})

     } catch (error) {
        console.log(error)
     }


   },

   getById : async (req, res) => {
     try {
        //requisitar o id em especifico 
        const {id} = req.params 
        const [rows , fields] = await pool.query(`select * from lista_interesse where id = ${id} `)
        res.json({data: rows})
        
     } catch (error) {
         console.log(error)
         res.json({status:error})
     }
      

   },

   create : async ( req,res) => {
    try {
        const {nome,ano_lancamento, empresa,preco,genero  } = req.body
        const sql = "insert into lista_interesse (nome,ano_lancamento, empresa , preco , genero)  values(?,?,?,?,?)"
        const [rows, fileds] = await 
        pool.query(sql, [nome , ano_lancamento, empresa, preco, genero])
        res.json({data:rows })


    } catch (error) {
        console.log(error)
        res.json({status:error})
    }


   },

   update: async (req , res) => {
     try {
         const  {nome, ano_lancamento , empresa , preco , genero } = req.body
         const {id} = req.params
         const sql = "update lista_interesse set nome = ? , ano_lancamento = ? , empresa = ? , preco = ? , genero = ? where id = ? " 
         const [rows , fields] = await 
         pool.query(sql, [nome , ano_lancamento, empresa , preco , genero , id])
         res.json({data: rows })
         
        
     } catch (error) {
        console.log(error)
        res.json({status:error})
     }

   },

   delete: async ( req , res) => {
    try {
        const {id} = req.params 
        const sql = "delete from lista_interesse where id = ?"
        const [rows, fields] = await 
        pool.query(sql,[id])
        res.json({data : rows})

    } catch (error) {
        console.log(error)
        res.json({status:error})
    }

   }

}


module.exports = lista_interesse 