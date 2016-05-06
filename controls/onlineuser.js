exports.get=function(req,res){
	if(req.session.user!=null){
		res.json({error:null,data:req.session.user});
	}
	else{
		res.json({error:'暂无登录',data:null});
	}
}
