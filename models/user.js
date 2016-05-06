var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	        //id 	: { type : Number },
		name 	: { type : String },
		email 	: { type : String },
		password: { type : String }
});


mongoose.model('User',UserSchema);

