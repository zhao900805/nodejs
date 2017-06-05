//var db = require("./dbConnection");
//var User = db.getUserModel();

module.exports = function loginPage(req,res,next){
    res.render("loginPageView",{
        title:"please use your account"
    });
}