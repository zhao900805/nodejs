//var db = require("./dbConnection");//no longer used!
//var User = db.getUserModel();
var User = require("./dbConnection_user").getUserModel();
module.exports = function loadInfo(req,res,next){
    var name = req.body.name;
    var password = req.body.password;
    var rePassword = req.body.re_password;
    if(name==null || password==null || rePassword==null ){
         res.render("registerPageView",{
            errInfo:"can not be empty!"
        });
    }
    if(password != rePassword){
        console.log("not the same password!");
        return res.render("loginPageView",{
            title:"please check your password!"
        });
    }
    User.findOne({name:name,password:password},function(err,user){
        if(err){
            console.log("err in finding!");
            res.render("404",{
                title:"can not find you!"
            });
        }
        if(!user){
            console.log("can not find!");
            console.log('user is :'+user);
            return  res.render("loginPageView",{
                title:"your name does not registed!",
            });
        }
        console.log("---------");
        console.log("user name is:"+ user);
        res.redirect("/home");
    });
}