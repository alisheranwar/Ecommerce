import express from 'express';

const app = express();
app.use(express.json());

// IMPLEMENTING ROUTING

import router from './Router/productRoute';

app.use('/api/v1', router);

// IMPORTING ERRORHANDLER CALSS

import Error from './middleware/error';

app.use(Error);

export default app;
