const fetch = require("node-fetch")

module.exports = async function buscaGato(gato){
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${gato}`)
  const Json = await response.json()
  return Json
}