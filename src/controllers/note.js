const noteModels = require('../models/note')
const miscHelper = require('../helper/helper')

module.exports = {
    newNote: (req, res) => {
        const data = {
            id_category : req.body.idCat,
            name_note : req.body.nameNote,
            description : req.body.description,
            created_at: new Date(),
            updated_at: new Date()
        }
        noteModels.newNote(data)
            .then(() => {
                miscHelper.response(res, data, 200)
            })
            .catch((error) => {
                console.log("error", error)
            })
    },

    getNoteAsc: (req, res) => {
        noteModels.getNoteAsc()
            .then((result) => {
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log("error", error)
            })
    },

    getNoteDesc: (req,res) => {
        noteModels.getNoteDesc()
        .then((result)=> {
            miscHelper.response(res, result, 200)
        })
        .catch((error) => {
            console.log("error getDesc",error)
        })
    },

    getbyCat : (req,res) => {
        const idCat = req.body.idCat
        noteModels.getbyCat(idCat)
        .then((result) => {
            miscHelper.response(res, result, 200)
        })
        .catch((error)=> {
            console.log("error",error)
        })
    },

    getbyCatAsc : (req,res) => {
        const idCat = req.body.idCat
        noteModels.getbyCat(idCat)
        .then((result) => {
            miscHelper.response(res, result, 200)
        })
        .catch((error)=> {
            console.log("error",error)
        })
    },

    editNote: (req, res) => {
        const idNote = req.params.idNote
        const data = {
            id_category: req.body.idCat,
            name_note: req.body.nameNote,
            description: req.body.description,
            updated_at: new Date()
        }
        noteModels.editNote(data, idNote)
        .then(() => {
            miscHelper.response(res, data, 200)
        })
        .catch((error) => {
            console.log("error edit", error)
        })
    },

    delNote: (req, res) => {
        const idNote = req.params.idNote
        noteModels.delNote(idNote)
        .then((result)=>{
            miscHelper.response(res, result, 200)
        })
        .catch((error) => {
            console.log('error del',error)
        })
    }

}