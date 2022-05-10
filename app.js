const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// PUBLIC FOLDER
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// SERVER RUNNING
// "npm run dev" to start the server locally
app.listen(port, () => {
    console.log(`Running on port ${port}!`);
}
);

// RUTAS MAIN

const rutasMain = require('./routers/main.js');

app.use('/', rutasMain);