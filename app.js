const express = require('express');
const app = express();
const port = 3000;

const path = require("path");

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

const rutasMain = require('./routers/main.js');

app.listen(port, () => {
    console.log(`Running on port ${port}!`);
}
);

app.use('/', rutasMain);