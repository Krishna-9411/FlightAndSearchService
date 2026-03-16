const express = require("express");
const bodyparser = require("body-parser");
const {PORT} = require('./config/serverConfig.js');
const ApiRoutes = require('./routes/index');
const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({estended: true}));
    app.use('/api', ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();