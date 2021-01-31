const buscaGato = require('../functions/buscaGato')

module.exports = function( app ){
  app.post('/picCat', async function( req,res ){
    const { cat } = req.body
    const results = await buscaGato( cat )
    res.render( 'pages/picCat', { foto:results[0].url, nome:results[0].breeds[0].name } )
  })
}