const connection = require('../configs/db')

module.exports = {

    newNote: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO tb_note SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getNoteAsc: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT id_note, name_note, description, updated_at, cat.id_category, cat.name_category, cat.color FROM tb_note a JOIN tb_category cat ON a.id_category = cat.id_category ORDER BY a.id_note ASC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getNoteDesc: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT id_note, name_note, description, updated_at,cat.id_category, cat.name_category, cat.color FROM tb_note a JOIN tb_category cat ON a.id_category = cat.id_category ORDER BY a.id_note DESC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getbyCat : (idCat) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT id_note, name_note, description, updated_at,cat.id_category, cat.name_category, cat.color FROM tb_note a JOIN tb_category cat ON a.id_category = cat.id_category WHERE a.id_category = ? ORDER BY a.id_note DESC`,idCat, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            } )
        })
    },

    getbyCatAsc : (idCat) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT id_note, name_note, description, updated_at, cat.id_category, cat.name_category, cat.color FROM tb_note a JOIN tb_category cat ON a.id_category = cat.id_category WHERE a.id_category = ? ORDER BY a.id_note ASC',idCat, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            } )
        })
    },

    editNote: (data, idNote) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE tb_note SET ? WHERE id_note = ?`, [data, idNote], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    delNote: (idNote) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM tb_note WHERE id_note=?`, idNote, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }

}