var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mychat');
exports.User = mongoose.model('User', require('./user'));

