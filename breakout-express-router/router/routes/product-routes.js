const express = require('express');
const router = express.Router();
const {getProductById, getProducts} = require('../db/product-queries');

// GET /products/
router.get('/', (req, res) => {
  getProducts()
    .then((products) => {
      res.json(products);
    });
});

// GET /products/:product_id
router.get('/:product_id', (req, res) => {
  getProductById(req.params.product_id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
