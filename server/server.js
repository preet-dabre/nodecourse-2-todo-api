var mongoose = require('mongoose');

//tell mongoose to use javascript's own promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cooked dinner'
});

// newTodo.save().then((doc) => {
//     console.log('Saved doc', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

var otherTodo = new Todo({
    text: 'Harvard C',
    completed: false,
    completedAt: 120
});

otherTodo.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log('Unable to save', e);
});
