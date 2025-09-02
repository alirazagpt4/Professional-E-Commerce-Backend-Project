const upload = require("../middlewares/multer");
const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

// Route to create a new product
router.post('/create' , upload.single('image') , productController.createProduct);
router.get('/products' , productController.getAllProducts);
router.get('/:id' , productController.getSingleProductById);
router.put('/:id' , upload.single('image'), productController.updateProduct);
router.delete('/:id' ,  productController.deleteProduct);

module.exports = router;