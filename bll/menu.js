var models = require('../models');
var Menu = models.Menu;

exports.create=function(obj,callback){
	var _menu = new Menu(obj);
	_menu.save(callback);
}


exports.query=function(obj,callback){
	Menu.find(obj,callback);
}

exports.remove=function(obj,callback){
	Menu.remove(obj,callback);
}
