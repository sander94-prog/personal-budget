// Budget API

const express = require('express');
const app = express();
const port = 4000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
        {
            title: 'Rent',
            budget: 500
        },
        {
            title: 'Bills',
            budget: 150
        },
        {
            title: 'Gas',
            budget: 40
        },
        {
            title: 'Entertainment',
            budget: 15
        },
        {
            title: 'Shopping',
            budget: 100
        },
        {
            title: 'Groceries',
            budget: 200
        },
        {
            title: 'Restaurant',
            budget: 30
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