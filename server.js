const app = require('./app');
const collection = require('./controllers/collection.controller');

// eager loding
collection.getData();

app.listen(3000);