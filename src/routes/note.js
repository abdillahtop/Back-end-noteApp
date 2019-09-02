const express = require('express')
const Route = express.Router()
const noteController = require('../controllers/note')

Route
    .get('/all', noteController.getNoteDesc)
    .get('/asc', noteController.getNoteAsc)
    .post('/',  noteController.newNote)
    .patch('/:idNote', noteController.editNote)
    .delete('/:idNote', noteController.delNote)

module.exports = Route