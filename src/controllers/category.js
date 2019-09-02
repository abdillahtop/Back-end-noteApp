const catModels = require('../models/category')
const miscHelper = require('../helper/helper')
const cloudinary = require('cloudinary');

module.exports = {
    newCategory: async(req, res) => {
        const path = req.file.path;
    const getUrl = async req => {
      cloudinary.config({
        cloud_name: 'abdi-library-storage',
        api_key: 564346865871912,
        api_secret: 'cq0d7Q1ZvicR0rtZMcAmoHBsQ48'
      });

      let dataimg;
      await cloudinary.uploader.upload(path, result => {
        console.log("coba ini", path);
        // const fs = require('fs')
        // fs.unlink(path)
        dataimg = result.url;
      });
      return dataimg;
    };
    console.log("coba", await getUrl());

      
        const data = {
            id_category : req.body.idCat,
            icon: await getUrl(),
            name_category: req.body.nameCat,
            color: "#"+req.body.color
        }
        catModels.newCategory(data)
            .then(() => {
                miscHelper.response(res, data, 200)
            })
            .catch((error) => {
                console.log("error", error)
            })
    },
    getCategory: (req, res) => {
        catModels.getCategory()
            .then((data) => {
                miscHelper.response(res, data, 200)
            })
            .catch((error) => {
                console.log("error", error)
            })
    },


}