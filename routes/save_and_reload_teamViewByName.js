var Team = require("./dbConnection_team").getTeamModel();
var Player = require("./dbConnection_player").getPlayerModel();
//var Team = require("./db_test").getPlayerModel();
//var Player = require("./db_test").getPlayerModel();
module.exports = function save_and_reload_teamViewByName(req,res,next){
    var old_name = req.params.name;
    var name = req.body.modify_name;
    var age = req.body.modify_age;
    var home = req.body.modify_home;
    var strike = req.body.modify_strike;
    var defence = req.body.modify_defence;
    var nationality = req.body.modify_nationality;
    //make a comparison
    var photo_url_old = req.body.modify_photo_url;
    var photo_url = req.body.file_url_needToBeSent;
    console.log("modify_photo_url is :"+ photo_url_old);
    console.log("file_url_needToBeSent is :" +　photo_url);
    //
    var player_name = req.body.player_form;

    var action = req.body.action;
    switch(action){
        case "submit":
            var player = new Player({});
            player.name = player_name;
            player.save(function(err){
                if(err){
                    console.log("err in saving the new player!");
                }
            });
            console.log("we have a new player id is: "+player._id);
            Team.findOne({name:old_name},function(err,team){
                if(err){
                    console.log("err in finding the team by name!");
                }
                team.name = name;
                team.age = age;
                team.home = home;
                team.strike = strike;
                team.defence = defence;
                team.nationality = nationality;

                if(photo_url !=""){
                    team.photo_url = photo_url;
                    console.log("not null!");
                }else{
                    console.log("null");
                    team.photo_url = photo_url_old;
                }

                team.save(function(err){
                if(err){
                    console.log("the team can not be modified!");
                }
                res.redirect("/home");
                });
            });
            break;
        case "cancel":
            break;
        case "delete":
            Team.remove({name:old_name},function(err){
                if(err){
                    console.log("err in find and remove the team in save_and_reload_teamViewByName!");
                }
                res.redirect("/home");
            });
            break;
    }
}
