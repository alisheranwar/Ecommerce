import Product from '../Models/productModel';
import ErrorHandler from '../utils/errorHandler';

// CREATING PRODUCTS

export const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res
    .status(200)
    .json({ success: true, message: 'Product Created Succssfully', product });
};

// UPDATING PRODUCTS

export const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404).json({ message: 'Resource could not found' });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res
    .status(200)
    .json({ success: true, message: 'Product Updated Successfully', product });
};

// GETTING ALL PRODUCTS

export const getProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('Resource is totally not found', 404));
  }
  res.status(200).json({
    success: true,

    product,
  });
};

// GETTING ALL PRODUCTS

export const getAllProducts = async (req, res, next) => {
  const product = await Product.find();

  if (!product) {
    res.status(404).json({ message: 'Resource could not found' });
  }
  res.status(200).json({
    success: true,

    product,
  });
};

// DELETING PRODUCTS

export const deleteProducts = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({ message: 'Resource could not found' });
  }

  product.remove();

  res
    .status(200)
    .json({ success: true, Message: 'Product Deleted Succssfully' });
};
