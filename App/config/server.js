const express = require('express')
const cors    = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views','./App/views')

app.use(bodyParser.urlencoded({extended:true}))

module.exports = app