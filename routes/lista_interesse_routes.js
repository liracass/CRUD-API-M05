const express = require("express")
const router = express.Router()

//chamando os controllers para a rota lista_interesse

const Lista_InteresseController = require("../controller/lista_interessecontroller")

// rotas com os métodos que irão vir do controlller

//rota padrão que pega todos os registros da tabela
router.get('/',Lista_InteresseController.getAll)
// rota que pega um registro em especifico da tabela pelo id
router.get('/:id',Lista_InteresseController.getById)
// rota que cria um novo registro
router.post('/',Lista_InteresseController.create)
// rota que atualiza um registro da tabela
router.put('/:id',Lista_InteresseController.update)
// rota que deleta um registro em especifico pelo id
router.delete('/:id',Lista_InteresseController.delete)

module.exports = router
