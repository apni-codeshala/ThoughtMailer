const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index.js');

const { setUpJob } = require('./services/scheduleService')

const app = express();

function setUpAndStartServer(){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started on port ${PORT}`);

        //Cron Job To send mail at every morningat 10:00 am
        setUpJob();

    });

}

setUpAndStartServer();