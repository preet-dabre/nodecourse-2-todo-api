const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User}  = require('./../server/models/user');

Todo.deleteMany({}).then((result) => {
    console.log(result);
});

// Todo.findOneAndRemove({_id: 'abc'}).then((doc) => {
//
// });

Todo.findByIdAndRemove('5c6b95202e54748d55983d8b').then((doc) => {
    console.log(todo);
});
