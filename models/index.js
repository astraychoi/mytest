var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb',{
	server:{poolSize:20}
},function (err){
	if(err){
		console.log(err);
	}
});

require('./user');
require('./menu');

exports.User = mongoose.model('User');
exports.Menu = mongoose.model('Menu');
