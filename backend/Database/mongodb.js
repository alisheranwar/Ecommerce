import mongoose from 'mongoose';
import config from '../Configuration/config';

export const mainDataBase = () => {
  mongoose
    .connect(config.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully Connected to Database');
    })
    .catch((error) => {
      console.log(error.reason);
    });
};
