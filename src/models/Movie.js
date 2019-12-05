const BaseModel = require('./BaseModel')
const crypto = require('crypto')

class Movie extends BaseModel {

    async $beforeInsert() {
        this.movieId = "MO" + crypto.randomBytes(5).toString('hex').toUpperCase()
    }

    static get relationMappings(){
        
        const Subtitle = require('./Subtitle')

        return {
            subtitles:{
                relation: BaseModel.HasManyRelation,
                modelClass: Subtitle,
                join:{
                    from:'movies.id',
                    to:'subtitles.movie_id'
                }
            }
        }
    }
}

module.exports = Movie