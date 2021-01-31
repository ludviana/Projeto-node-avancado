const buscaRaca = require('../functions/buscaRaca')

module.exports = function( app ){
  app.post('/picDog', async function( req,res ){
    const { dog } = req.body
    
    let corta = dog.split('/')
    
    let frase = ''
      if(corta[1] === undefined){
        frase = `${corta[0]}`
      }else{
        frase = `${corta[1]} ${corta[0]} `
      }
      
    const results = await buscaRaca(dog)
    res.render( 'pages/picdog', { raca:results, nome:frase })
  })
}