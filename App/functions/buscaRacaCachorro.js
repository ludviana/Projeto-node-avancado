const fetch = require("node-fetch")

module.exports = async function buscaRacaCachorro(){
  const response = await fetch('https://dog.ceo/api/breeds/list/all')
  const Json = await response.json()
  return Json
}


