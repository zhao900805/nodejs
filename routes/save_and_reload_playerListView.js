//var Team = require("./dbConnection_team").getTeamModel();
var Player = require("./dbConnection_player").getPlayerModel();
module.exports = function save_and_reload_playerListView(req,res,next){
    var age = req.body.player_age;
    var name = req.body.player_name;
    var weight = req.body.player_weight;
    var height = req.body.player_height;
    var defence = req.body.player_defence;
    var nationality = req.body.player_nationality;
    var photo_url = req.body.file_url_needToBeSent;
    var team = req.body.player_team;
    var strike = req.body.player_strike;
    var team_old = req.params.name;

    /*Player.findOne({name:name},function(err,player){
        if(err){
            console.log("err in finding the player in save_and_reload_playerListView!");
        }
        if(player){
            console.log("the player has already existed! ");
            return res.render("playerListView",{
                err_info:"the player has already exist!"
            });
        }
    });*/

    var action = req.body.action;
    switch(action){
        case "submit":
            var new_player = new Player({  
            });
            new_player.age = age;
            new_player.name = name;
            new_player.weight = weight;
            new_player.defence = defence;
            new_player.nationality = nationality;
            new_player.photo_url = photo_url;
            new_player.team = team;
            new_player.height = height;
            new_player.strike = strike;

            new_player.save(function(err){
                if(err){
                    console.log("the new_player can not be saved in save_and_reload_playerListView!");
                }
                res.redirect("/home/"+team+"/playerList");
            });
            break;
        case "by_age":
            Player.find({team:team_old}).sort({age: -1}).exec(function(err, players){
                if(err){
                    console.log("err in sorting in save_and_reload_playerListView!");
                }
                console.log("palyers: " +players);
                return res.render("playerListView",{
                    team_name:team_old,player:players
                });
            });
            break;
        case "by_defence":
            Player.find({team:team_old}).sort({defence: -1}).exec(function(err, players){
                if(err){
                    console.log("err in sorting in save_and_reload_playerListView!");
                }
                console.log("palyers: " +players);
                return res.render("playerListView",{
                    team_name:team_old,player:players
                });
            });
            break;
        case "by_strike":
            Player.find({team:team_old}).sort({strike: -1}).exec(function(err, players){
                if(err){
                    console.log("err in sorting in save_and_reload_playerListView!");
                }
                return res.render("playerListView",{
                    team_name:team_old,player:players
                });
            });
            break;
        case "by_weight":
            Player.find({team:team_old}).sort({weight: -1}).exec(function(err, players){
                if(err){
                    console.log("err in sorting in save_and_reload_playerListView!");
                }
                return res.render("playerListView",{
                    team_name:team_old,player:players
                });
            });
            break;
        case "by_height":
            Player.find({team:team_old}).sort({height: -1}).exec(function(err, players){
                if(err){
                    console.log("err in sorting in save_and_reload_playerListView!");
                }
                return res.render("playerListView",{
                    team_name:team_old,player:players
                });
            });
            break;
        case "show_all":
            Player.find({team:team_old},function(err,players){
                if(err){
                    console.log("err in finding all in save_and_reload_playerListView!");
                }
                return res.render("playerListView",{
                    team_name:team_old,player:players
                });
            });
            break;
    }
}