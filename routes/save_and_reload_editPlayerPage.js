var Player = require("./dbConnection_player").getPlayerModel();
var Team = require("./dbConnection_team").getTeamModel();
module.exports = function save_and_reload_editPlayerPage(req,res,next){
    var modify_age = req.body.modify_age;
    var modify_name = req.body.modify_name;
    var modify_weight = req.body.modify_weight
    var modify_height = req.body.modify_height;
    var modify_defence = req.body.modify_defence;
    var modify_strike = req.body.modify_strike;
    var modify_nationality = req.body.modify_nationality;

    var modify_photo_url = req.body.file_url_needToBeSent;
    var old_photo_url = req.body.modify_photo_url;

    var modify_team = req.body.modify_team;
    var original_name = req.body.original_name;
    var old_team = req.body.old_team;

    console.log("old_team:"+old_team);
    console.log("the old_photo_url is:" + old_photo_url);
    console.log("file_url_needToBeSent is :" + modify_photo_url);

    var action = req.body.action;
    switch(action){
        case "delete":
            Player.remove({name:original_name},function(err,player){
                if(err){
                    console.log("can not remove the palyer in save_and_reload_editPlayerPage in action delete")
                }
                res.redirect("/home/"+old_team+"/playerList");
            });
            break;
        case "submit":
            Player.findOne({name:original_name},function(err,player){
                if(err){
                    console.log("can not find the palyer in save_and_reload_editPlayerPage in action submit");
                }
                if(modify_name==null){
                    player.name = original_name;
                }
                player.name = modify_name;
                player.weight = modify_weight;
                player.height = modify_height;
                player.defence = modify_defence;
                player.nationality = modify_nationality;

                if(modify_photo_url!=""){
                    player.photo_url = modify_photo_url;
                }else{
                    player.photo_url = old_photo_url
                }
                

                player.team = modify_team;
                player.age = modify_age;
                player.strike = modify_strike;
                player.save(function(err){
                    if(err){
                        console.log("can not save the modified player in save_and_reload_editPlayerPage");
                    }
                    res.redirect("/home/"+old_team+"/playerList");
                });
            });
            break;
    }

    
}