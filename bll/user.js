var models = require('../models');
var User = models.User;

exports.create=function(obj,callback){
	var _user = new User(obj);
	_user.save(callback);
}


exports.findOne=function(obj,callback){
	User.findOne(obj,callback);
}

exports.remove=function(obj,callback){
	User.remove(obj,callback);
}
