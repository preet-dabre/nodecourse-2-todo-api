var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    }
});

module.exports = {User};
