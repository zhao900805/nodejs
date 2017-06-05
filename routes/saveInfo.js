var User = require("./dbConnection_user").getUserModel();
var mongoose = require("mongoose");
//var db = require("./dbConnection");
//var User = db.getUserModel();//dbConnection no longer used!
module.exports = function saveInfo(req,res,next){
    var newName = req.body.reg_name;
    var newpass = req.body.reg_password;
    var re_newpass = req.body.reg_repassword;
    var file_url = req.body.file_url_needToBeSent;

    var username_err = null;
    var password_err = null;
    var repassword_err = null;

    User.findOne({name:newName},function(err,user){
        console.log(newName);
        if(newName.length<6){
           console.log("name length is less than 6!");
           return res.render("registerPageView",{
                username_err:"name'length must be longer than 6!"
            });
        }
        if(newpass.length<1){
            console.log("password length is less than 10!");
            return res.render("registerPageView",{
                password_err:"please make sure password the same!"
            });
        }
        if(re_newpass != newpass){
            console.log("password not the same!");
            return res.render("registerPageView",{
                repassword_err:"please make sure password the same!"
            });
        }
        if(err){
            console.log("err in finding!");
        }
        if(!user){
            var new_user = new User({});//切记不能重名
        new_user.name = newName;
        new_user.password = newpass;
        new_user.user_img = file_url;
        new_user.posts = null;
        new_user.following = null;
        new_user.follower = null;
        new_user.comments = null;


        console.log("------");
        console.log(new_user.name);
        console.log(new_user.password);
        console.log(new_user.user_img);
        console.log("------");

        new_user.save(function(err){
            if(err){
                console.log("user can not save!");
            }
            var id = new_user._id;
            res.redirect("/admin/userhome/"+id);
            //res.redirect("/user/LoginPage");
        });
        }
        if(user){
            console.log("user exist!");
            console.log("user is :"+user);
            return res.render("registerPageView",{
                username_err:"name exists, please try another one!"
            });
        }
        
        
    });


        var new_user = new User({});//切记不能重名
        new_user.name = newName;
        new_user.password = newpass;
        new_user.user_img = file_url;

        //console.log("------");
        //console.log(new_user.name);
        //console.log(new_user.password);
        //console.log(new_user.user_img);
        //console.log("------");

        new_user.save(function(err){
            if(err){
                console.log("user can not save!");
            }
            var id = new_user._id;
            res.redirect("/home");
            //res.redirect("/user/LoginPage");
        });
        
}