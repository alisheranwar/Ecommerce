import ErrorHandler from '../utils/errorHandler';

module.exports = (error, req, res, next) => {
  (error.statusCode = error.statusCode || 500),
    (error.message = error.message || 'Internal Server Error');

  res.status(error.statusCode).json({ success: false, error: error });
};
