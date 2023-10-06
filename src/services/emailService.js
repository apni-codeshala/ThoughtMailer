const sender = require('../config/emailConfig');

const sendStarterMail = async (mailTo) => {
    const response = await sender.sendMail({
        from: "Thought '<thought@motivate.com>'",
        to: mailTo,
        subject: 'Your daily motivation thought',
        text: 'You will get your daily thought at 10:00am daily. Your service was started. STAY MOTIVATED'
    });
    console.log(response);
}

const sendThoughtMail = async (mailTo, thought) => {
    const response = await sender.sendMail({
        from: "Thought '<thought@motivate.com>'",
        to: mailTo,
        subject: 'Today motivation',
        text: `Today's motivation: ${thought}`
    });
    console.log(response);
}

module.exports = {
    sendStarterMail,
    sendThoughtMail
}