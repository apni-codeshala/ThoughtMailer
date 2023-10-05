const ThoughtRepository = require('../repository/thoughtRepository');

class ThoughtService{
    
    constructor() {
        this.thoughtRepository = new ThoughtRepository();
    }

    async getRandomThought(){
        try {
            const thought = await this.thoughtRepository.getRandomThought();
            return thought;
        } catch (error) {
            console.log('Seomething went wrong in get random thought in service layer', error);
            throw error;
        }
    }

    async getAllThought() {
        try {
            const thoughts = await this.thoughtRepository.getAllThought();
            return thoughts;
        } catch (error) {
            console.log('Something went wrong in getting all the thoughts in service layer', error);
            throw error;
        }
    }

}

module.exports = ThoughtService;