const buscaRacaCachorro = require("../functions/buscaRacaCachorro")
const buscaRacaGato     = require("../functions/buscaRacaGato")

module.exports = function( app ){
  app.get('/',async function( req,res ){
    let nomesCachorro = await buscaRacaCachorro()
    let nomesGato     = await buscaRacaGato()
    
    res.render( 'home/index', { 
      nomesCachorro:nomesCachorro,
      nomesGato:nomesGato,
      form1:'../forms/form1.ejs',
      form2:'../forms/form2.ejs'
    })
  })
}