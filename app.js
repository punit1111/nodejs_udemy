const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());

app.use('/home', (req, res, next)  =>{
    res.send('<h1>HOME PAGE</h1>');
});

app.get('/login', (req, res, next)  =>{
    var data = req.query.name;
    res.send(`<h1>LOGIN PAGE ${data}</h1>`);
});

app.post('/login', (req, res, next)  =>{
    var name = req.body.name;
    console.log(`login post ${name}`);
    res.send(req.body);
});

app.use((req, res, next)=>{
    console.log('first');
    //next();
});

app.use((req, res, next)=>{
    console.log('second');
    res.send('<h1>NODE</h1>');
});


const server = http.createServer(app);

server.listen(3000);
