import app from './app';

// IMPORTING MAIN DATA BASE

import { mainDataBase } from './Database/mongodb';
mainDataBase();

app.listen(8000, () => {
  console.log('Your file are Serve at http://localhost:8000');
});
