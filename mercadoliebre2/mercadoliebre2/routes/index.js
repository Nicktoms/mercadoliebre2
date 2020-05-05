var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  const productosVisitados = products.filter(function (p){
      return p.category == "visited";
  });
  const productosNuevos = products.filter(function (p){
    return p.category == "in-sale";
  });
  res.render('index', {
    visitados: productosVisitados,
    nuevos:   productosNuevos,
  });

});

module.exports = router;
