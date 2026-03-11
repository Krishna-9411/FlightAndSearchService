const express = require("express");
const bodyparser = require("body-parser");
const cityRepository = require('./repository/city-repository');
const {PORT} = require('./config/serverConfig.js');

const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({estended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        const repo = new cityRepository();
        repo.createCity({name: "New Delhi"});
    });
}

setupAndStartServer();