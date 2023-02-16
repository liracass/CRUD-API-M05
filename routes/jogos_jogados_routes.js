const express = require("express")
// nunca esquecer de colocar  a função no Router()
const router = express.Router()

// chamando os controllers/métodos ou funçoes  das rotas
const jogos_jogadosController = require('../controller/jogos_jogadoscontroller')

// criando as rotas com os métodos http

// rota padrão com todos os itens da tabela ( vindo do select * from )
router.get('/', jogos_jogadosController.getALL)
router.get('/:id',jogos_jogadosController.getById)
router.post('/',jogos_jogadosController.create)
router.put('/:id',jogos_jogadosController.update)
router.delete('/:id',jogos_jogadosController.delete)





module.exports = router

