const fetch = require("node-fetch")

module.exports = async function buscaRaca(raca){
  const response = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
  const Json = await response.json()
  return Json
}