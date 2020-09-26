const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());


app.get('/fruits/banana', (req, res) => {
    res.send({
        fruit: 'banana',
        quantity: 1000,
        price: '1000$'
    })
})

users = ['asad', 'saber', 'susmita', 'sohana', 'kolim', 'alomgir'];

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({name, id});
})

// post
app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user)
})


app.listen(8080, () => console.log('listening to port 8080'));