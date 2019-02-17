var mongoose = require('mongoose');

//tell mongoose to use javascript's own promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};
