require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const noteRoute = require('./src/routes/note')
const catRoute = require('./src/routes/category')

app.listen(port, () => {
    console.log(`\n App listening on port ${port} \n`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/note', noteRoute)
app.use('/category', catRoute)