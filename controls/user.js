var User = require('../bll/user');

exports.login=function(req,res){
	User.findOne({name:req.query.username,password:req.query.password},function(err,obj){
		if(err==null){
			req.session.user=obj;
			res.json({error:null,data:obj});
		}
		else{
			res.json({error:err,data:null});
		}
	});
}
