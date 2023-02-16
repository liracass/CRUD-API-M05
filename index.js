const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

// chamar as rotas criadas dentro da pasta controller

const jogo_jogadosRoutes = require('./routes/jogos_jogados_routes')
const lista_interesse = require('./routes/lista_interesse_routes')


app.use(express.urlencoded({extended : false}))
// para entender que tudo que usaremos é json
app.use(express.json())


// PEGANDO A PORTA 
const PORT = process.env.PORT || 8080 


// INICIANDO O SERVIDOR 
app.listen(PORT, () =>{

    console.log(`Servidor iniciado na porta ${PORT}`)
})

// chamando a rota padrão
app.use('/jogosjogados', jogo_jogadosRoutes)

// chamando outra rota com para pega dados de outra tabela

app.use('/listainteresse',lista_interesse)




