var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://scarlettcello:gys0925@ds131329.mlab.com:31329/learning' ||
  'mongodb://localhost:27017/TodoApp'
);

module.exports = {mongoose};
