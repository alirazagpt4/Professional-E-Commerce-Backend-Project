const productModel = require("../models/product.model");

// Create a new product
const createProduct = async (req, res) => {
  const { title, description, price, category, stock } = req.body;
  const image = req.file ? `uploads/${req.file.filename}` : null;
  try {
    const newProduct = await productModel.create({
      title,
      description,
      price,
      category,
      image,
      stock,
    });

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    let { page, limit , category , minPrice , maxPrice , sortBy , order } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    // filter object
      let filter = {};

      if(category){
        filter.category = category
      }

      if(minPrice || maxPrice){
         filter.price = {};
         if(minPrice) filter.price.$gte = minPrice;
            if(maxPrice) filter.price.$lte = maxPrice;
      }

      let sort = {};
      if(sortBy){
        sort[sortBy] = order === 'desc' ? -1 : 1;
      }




    const skip = (page - 1) * 10;

    // count documents .
    const total = await productModel.countDocuments(filter);

    // Apply Filter + Pagination
    const products = await productModel
                          .find(filter)
                          .sort(sort)
                          .skip(skip)
                          .limit(limit);
                          
    return res.status(200).json({
      total,
      page,
      totalPages: Math.ceil(total / limit),
      products,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



const getSingleProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { title, description, price, category, stock } = req.body;
  const image = req.file ? `uploads/${req.file.filename}` : null;

  try {
    const product = await productModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
        category,
        image,
        stock,
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProductById,
  updateProduct,
  deleteProduct,
};
