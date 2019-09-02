const express = require('express')
const Route = express.Router()
const catController = require('../controllers/category')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${new Date().toISOString().replace(/:/g, '-')}${file.originalname}`);
    }
})
const upload = multer({storage: storage, dest: 'uploads/' })

Route
    .get('/all', catController.getCategory)
    .post('/', upload.single('icon'), catController.newCategory)

module.exports = Route