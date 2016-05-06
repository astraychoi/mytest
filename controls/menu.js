var Menu = require('../bll/menu');

exports.findById=function(req,res){
	Menu.query({pid:req.params.id,display:true},function(err,objs){
		res.json(objs);
	});
};
