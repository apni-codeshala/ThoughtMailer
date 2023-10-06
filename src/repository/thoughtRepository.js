const Sequelize = require('sequelize');

const { Thought } = require('../models/index');

class ThoughtRepository {

    async getRandomThought() {
        try {
            const thought = await Thought.findAll({
                order: [
                    [Sequelize.literal('RAND()')]
                ],
                limit: 1,
            });
            return thought;
        } catch (error) {
            console.log("Something went wrong in gettting one random thought in respository layer");
            throw error;
        }
    }

    async getAllThought() {
        try {
            console.log(Thought);
            const thoughts = await Thought.findAll();
            return thoughts;
        } catch (error) {
            console.log("Something went wrong in getting all of the thoughts in repository layer")
        }
    }

}

module.exports = ThoughtRepository;