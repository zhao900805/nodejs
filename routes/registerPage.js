module.exports = function registerPage(req,res,next){
    res.render("registerPageView",{
        title:"plase type in info to register"
    });
}