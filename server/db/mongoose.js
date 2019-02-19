var mongoose = require('mongoose');

//tell mongoose to use javascript's own promise
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
};
