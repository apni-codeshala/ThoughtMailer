const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index.js');

const { setUpJob } = require('./services/scheduleService')

const app = express();

const static_path = path.join(__dirname, '../public');

function setUpAndStartServer(){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(express.static(static_path));

    app.get('/', (req, res) => {
        return res.status(200).send('Server is ready');
    })

    app.get('/jokes', (req, res) => {
        res.send(jokes);
    })

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started on port ${PORT}`);

        //Cron Job To send mail at every morningat 10:00 am
        setUpJob();

    });

}

setUpAndStartServer();