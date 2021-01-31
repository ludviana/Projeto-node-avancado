const fetch = require('node-fetch')

module.exports = async function buscaRacaGato(){
  const busca = await fetch('https://api.thecatapi.com/v1/breeds')
  const resultado = await busca.json()
  return resultado
}