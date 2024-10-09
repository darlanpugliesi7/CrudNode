const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '182829',
    database: 'TaskManager'
});

db.connect((err) => {
    if (err) {
        console.error("Falha ao conectar com o banco de dados", err);
    } else {
        console.log(`Conectado ao banco de dados, porta: ${port}`);
    }
});


app.get('/api/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) return res.status(500).json({error: err});
        res.json(results);
    })
});


app.post('/api/', (req, res) => {
    const {title, description, status} = req.body;
    const task = {title, description, status};

    db.query('INSERT INTO task SET ?', task, (err, results) => {
        if (err) return res.status(500).json({error, err});
        res.status(201).json({id: results.insertId, ...task});
    });

});

