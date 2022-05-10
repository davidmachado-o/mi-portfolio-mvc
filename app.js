const express = require('express');
const app = express();
const port = 3000;

// PUBLIC FOLDER
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// SERVER RUNNING
app.listen(port, () => {
    console.log(`Running on port ${port}!`);
}
);

// RUTAS MAIN

const rutasMain = require('./routers/main.js');

app.use('/', rutasMain);