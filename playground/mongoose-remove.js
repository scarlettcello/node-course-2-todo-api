const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
Todo.findOneAndRemove({_id: '5ac4fe7f1c133d2c6daef070'}).then((todo) => {

});

Todo.findByIdAndRemove('5ac4fe7f1c133d2c6daef070').then((todo) => {
  console.log(todo);
});
