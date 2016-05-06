var User = require('./bll/user');
var Menu = require('./bll/menu');


var _user = { name:'astraychoi', email:'choi@gmail.com', password:'123' };

var _menus=[
{ id : 0, name : "根目录", display : false, pid : -1 },
{ id : 1, name : "主页", url : "/home", pid : 0, display : true },
{ id : 2, name : "文档", url : "", pid : 0, display : true },
{ id : 3, name : "关于", url : "/about", pid : 0, display : true },
{ id : 4, name : "用户设置", pid : 0, display : false },
{ id : 5, name : "个人信息", url : "/profile", pid : 4, display : true },
{ id : 6, name : "应用", url : "/client", pid : 4, display : true },
{ id : 7, name : "用户接口", url : "/userapi", pid : 2, display : true },
{ id : 8, name : "菜单接口", url : "/menuapi", pid : 2, display : true }];


//创建临时用户数据
User.remove({},function(err){
	if(err==null){
		User.create(_user,function(err){
			if(err==null){
				console.log('创建用户成功');
			}
		});
	}
});
//创建菜单数据
Menu.remove({},function(err){
	if(err==null){
		for(var i=0; i<_menus.length; i++){
			Menu.create(_menus[i],function(err){
				if(err==null){
					console.log('创建菜单成功');
				}
				else{
					console.log(err);
				}
			});
		}
	}
});			
