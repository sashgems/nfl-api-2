const express = require('express')
const bodyParser = require ('body-parser')
const { getAllTeams, getTeamById, createNewTeam } = require('./controllers/teams')
const app = express()

app.get('/', getAllTeams)

app.get('/:id', getTeamById)

app.post( '/', bodyParser.json(), createNewTeam)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
