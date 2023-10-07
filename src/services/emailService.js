const sender = require('../config/emailConfig');

const sendStarterMail = async (mailTo) => {
    const response = await sender.sendMail({
        from: "Thought '<thought@motivate.com>'",
        to: mailTo,
        subject: 'Your daily motivation thought',
        text: 'You will get your daily thought at 10:00am daily. Your service was started. STAY MOTIVATED',
        html: '<img src="https://source.unsplash.com/?Nature" alt="" width="300" >',
    });
    console.log(response);
}

const sendThoughtMail = async (name, mailTo, thought) => {
    try {
        const response = await sender.sendMail({
            from: `Thought "<thought@motivate.com>"`,
            to: mailTo,
            subject: `READY FOR TODAY'S MOTIVATION ${name}`,
            html: `
                <img src="https://i.ibb.co/TgN8gdp/Screenshot-2023-10-07-152511.png" alt="logo" width="100%" />
                <h2 style="color:red;text-align:center;"> Today's Thought </h2>
                <h1 style="color:blue;text-align:center;">${thought}</h1>
                <img src="https://source.unsplash.com/random/900×700/?nature" alt="motivation" width="100%" />
                <p>I think you are doing great. HAVE A NICE DAY</p><br><br>
                <p>Stay Motivated,</p>
                <p>Thought@10</p>`,
        });
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}

const testMail = async (mailTo, thought) => {
    try {
        const response = await sender.sendMail({
            from: '"Example Team" <from@example.com>',
            to: mailTo,
            subject: 'Nice Nodemailer test',
            html: `<b> </b><br> This is our first message sent with Nodemailer<br /><img src="https://source.unsplash.com/random/900×700/?Nature" alt="mailtrap" width="100%" />`,
        });
        console.log(response, __dirname);
    } catch (error) {
        console.log(error);   
    }
}


module.exports = {
    sendStarterMail,
    sendThoughtMail,
    testMail
}