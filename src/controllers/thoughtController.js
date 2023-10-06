const ThoughtService = require('../services/thoughtService');

const thoughtService = new ThoughtService();

const getRandomThought = async (req, res) => {
    try {
        const thought = await thoughtService.getRandomThought();
        return res.status(200).json({
            message: 'Get random thought successfully',
            err: {},
            data: thought,
            success: true
        })
    } catch (error) {
        console.log("Something went wrong in gettting random thought in controller layer");
        return res.status(400).json({
            message: 'Not able to get random thought',
            err: error,
            data: {},
            success: false
        });
    }
}

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await thoughtService.getAllThought();
        return res.status(200).json({
            success: true,
            data: thoughts,
            message: 'Gettting all the tohughts successfully',
            error: {}
        })
    } catch (error) {
        console.log("Something went wrong in gettting all the thought in controller layer", error);
        return res.status(400).json({
            message: 'Not able to get all the tohughts',
            success: false,
            data: {},
            err: error
        })
    }
}

module.exports = {
    getRandomThought,
    getAllThoughts
}