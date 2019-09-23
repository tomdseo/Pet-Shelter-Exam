const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.use(express.static(__dirname + '/public/dist/public'));

app.listen(1337, () => console.log("Running on Port 1337"));

// this route will be triggered if any of the routes above did not match
app.all('*',(_, res) => res.sendFile(__dirname + '/public/dist/public/index.html'))


