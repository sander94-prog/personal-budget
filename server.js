// Budget API

const express = require('express');
const app = express();
const port = 4000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
    ]
};


app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.get('/budget', (req, res) =>{
    res.json(budget);
}); 

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});