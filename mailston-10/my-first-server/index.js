const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello from my first ever server');
})

app.get('/phones', (req,res) => {
    res.send(phones)
})

app.get('/data' , (req, res) => {
    res.send('more data sfgfdsfsdg coming soon')
})

app.listen(port, () => {
    console.log(`my server is running on port : ${port}`);
});