const connection = require('../configs/db')

module.exports = {

    
    newCategory: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO tb_category SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

    getCategory: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM tb_category`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

}