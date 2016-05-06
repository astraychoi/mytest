var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var MenuSchema = new Schema({
	        id 	: { type : Number },
		name 	: { type : String },
		url 	: { type : String },
		pid     : { type : Number },
		display : { type : Boolean}
});


mongoose.model('Menu',MenuSchema);

