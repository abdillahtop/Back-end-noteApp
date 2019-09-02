require('dotenv').config() //initialize dotenv config

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'remotemysql.com',
    user: process.env.DB_USER || 'q1UfdfxXAl',
    password: process.env.DB_PASSWORD || 'birp3WlAKv',
    database: process.env.DB_NAME || 'q1UfdfxXAl'
})

connection.connect((err) => {
    if (err) console.log(`Error ${err}`)
})

module.exports = connection