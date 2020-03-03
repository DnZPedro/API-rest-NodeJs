const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { promiseLibrary: global.Promise, useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;

