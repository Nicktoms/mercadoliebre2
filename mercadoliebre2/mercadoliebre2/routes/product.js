var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/* GET users listing. */
router.get('/detail/:id/:category', function(req, res, next) {
    const producto = products.filter((p)=>{
        return p.id === req.params.id;
    });
    res.render('productoDetalle',{prod: producto});
});

module.exports = router;
// lo subis nico a algun lado?