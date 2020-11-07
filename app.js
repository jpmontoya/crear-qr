const express = require("express");
const path = require("path");


const app = express();


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//Parse URL-encoded vodies (as send by HTML forms)
app.use(express.urlencoded({extended: false}));
//Parse JSON vodies (as send by API clients)
app.use(express.json());
app.set('view engine', 'hbs');

//Define Routes
app.use('/', require('./routes/pages'));
app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on Port 5000");
});