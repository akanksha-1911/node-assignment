const express = require('express');
const bodyparser = require('body-parser');


const router = require('./Routes/routes');

const hostname = "localhost";
const port  ="8055";

const app = express();
app.use(bodyparser.json());
//CORS
app.use((req ,res, next)=> {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();


})
app.use('/',router);

app.listen(port,hostname, () => {
    console.log('Server is running on http://$(hostname):$(port)');

})

