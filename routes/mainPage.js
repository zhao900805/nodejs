

module.exports = function mainPage(req,res,next){
    var id = req.params._id;
    res.render("mainPageView",{
        title:"hello, this is home page!",id:id
    });
}