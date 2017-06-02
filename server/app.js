

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const coolFacts = []

$(document).ready(function(){
  $('.carousel').carousel();
})

app.get('/facts', (request, response) => {
  response.json(coolFacts)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('listening on port 3000');
})
