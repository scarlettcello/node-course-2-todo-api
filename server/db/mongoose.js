var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//'mongodb://admin:gys0925@ds131329.mlab.com:31329/learning' ||

mongoose.connect(
  process.env.MONGOLAB_URI ||
  'mongodb://localhost:27017/TodoApp'
);

module.exports = {mongoose};
