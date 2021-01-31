const app  = require('./App/config/server')

const rotaForm = require('./App/routes/home')(app)
const rotaPicDog = require('./App/routes/picDog')(app)
const rotaPicCat = require('./App/routes/picCat')(app)

app.listen(3002,function(){
  console.log('Servidor Rodando na porta 3002')
})
