const products = require('../data/product')

exports.getAllProducts = async (req, res) => {
  res.status(200).json({
    message: 'success',
    data: products
  });
}

exports.getProductById = async (req, res) => {
  const product = products.find(p => p.id == req.params.id)

  if (!product) {
    res.status(404).json({
      message: 'Product not found',
    })
    return
  }

  res.status(200).json({
    message: 'success',
    data: product  
  })
}