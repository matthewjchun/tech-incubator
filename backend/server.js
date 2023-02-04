const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const Pool = require('pg').Pool

const app = express();

const db = new Pool({
    host: 'localhost',
    user: 'prieyan',
    password: 'password',
    database: 'prieyan',
    port: 5432,
});

app.get("/", (err, res) => {
    const sqlInsert = "Insert into students(studentid, firstname, lastname, password) VALUES('87654329', 'Stony', 'College', 'queenMain');"
    db.query(sqlInsert, (req, result) => {
        res.send("Hello World!");
    })
})

app.listen(3001, () => {
    console.log("running on port 3001");
})