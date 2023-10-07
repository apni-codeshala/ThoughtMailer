const cron = require('node-cron');

const UserService = require('./userService');
const ThoughtService = require('./thoughtService');
const { sendThoughtMail} = require('./emailService');

const userService = new UserService();
const thoughtService = new ThoughtService();

const setUpJob = () => {
    cron.schedule('*/1 * * * *', async () => {
        const users = await userService.getAll();
        users.forEach(async (user) => {
            const thought = await thoughtService.getRandomThought();
            const thoughtData = thought[0].dataValues.thought;
            console.log(thoughtData);
            console.log(user.email);
            sendThoughtMail(user.name, user.email, thoughtData);
        });
    })
}

module.exports = {
    setUpJob
}