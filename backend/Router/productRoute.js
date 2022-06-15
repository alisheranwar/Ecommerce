import express from 'express';
import {
  createProduct,
  deleteProducts,
  getAllProducts,
  getProduct,
  updateProduct,
} from '../Controller/productController';

const router = express.Router();

router.route('/products').post(createProduct);
router.route('/products').get(getAllProducts);
router
  .route('/product/:id')
  .put(updateProduct)
  .get(getProduct)
  .delete(deleteProducts);
export default router;
