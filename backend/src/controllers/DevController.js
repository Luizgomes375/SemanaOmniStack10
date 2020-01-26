// Controller tem 5 funções:
// INDEX , SHOW, STORE, UPDATE,DESTROY

const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
        const devs = await Dev.find()
        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } = apiResponse.data
                // if(!name){
                //     name = apiResponse.data.login
                // } ou name = login
            const techsArray = parseStringAsArray(techs)
                // console.log(name, avatar_url, bio, github_username)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            dev = await Dev.create({
                github_username, //: github_username, Short Sintaxe
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
        return response.json(dev)
    }
}