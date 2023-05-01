const express = require('express');
const cors = require('cors');
const app = express();
const port = 2000;

const places = require('./data/places.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Helloworld');
})

app.get('/places', (req, res) => {
    res.send(places)
})

app.listen(port, () => {
    console.log(port);
})