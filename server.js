// Budget API

const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));


 const budget = require('./budgetData');

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) =>{
    res.json(budget);
}); 

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});