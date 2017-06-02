const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const coolFacts = [{
  name: "CJ",
  fact: "Founded a cyber-punk cult."
  }, {
  name: "Cass",
  fact: "Can shape-shift, but only once."
  }, {
  name: "Chad",
  fact: "Shoots cheddar string cheese from his fingertips, but it comes out all clumpy."
  }, {
  name: "Austin",
  fact: "Can not shape-shift, all the time."
  },
  name: "Berto",
  fact: "Is actually the undercover CEO of Galvanize."
}]

app.get('/facts', (request, response)=>{
  response.json(coolFacts)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('listening on port ' + port);
})
