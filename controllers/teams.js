const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamById = (request, response) => {
  const { id } = request.params

  const matchingTeams = teams.find((team) => team.id === parseInt(id))

  return matchingTeams
    ? response.send(matchingTeams)
    : response.sendStatus(404)
}

const createNewTeam = (request, response) => {

  const {id, location, mascot, abbreviation, conference, division } = request.body

if (!id || !location || !mascot || !abbreviation || !conference || !division) {
  
    return response.status(400).send(' Please provide id, location, mascot, abbreviation, conference, and division')
}
   const newTeam = { id, location, mascot, abbreviation, conference, division }
   
   teams.push(newTeam)
   
   return response.status(201).send(newTeam)
   }
  

module.exports = { getAllTeams, getTeamById, createNewTeam }
