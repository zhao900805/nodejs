var Team = require("./dbConnection_team").getTeamModel();
var Player = require("./dbConnection_player").getPlayerModel();
//var Team = require("./db_test").getTeamModel();
//var player = require("./db_test").getPlayerModel();

module.exports = function renderPlayerListView(req,res,next){
    var name = req.params.name;
    Player.find({team:name},function(err,player){
                if(err){
                    console.log("in PlayerListView, err in finding the team by name!");
                }
                res.render("playerListView",{
                    team_name:name , player:player
                });
            });




    
    /*Team.findOne({name:name},function(err){
        if(err){
            console.log("in PlayerListView, err in finding the team by name!");
        }
        Player.find({team:name},function(err,player){
            if(err){
                console.log("can not find the palyers in renderPlayerListView");
            }
            res.render("playerListView",{
                team_name:name , player:player
            });    
        })
    });*/

    /*Team.findOne({name:name}).populate("player").exec(function(err,team){
        if(err){
            console.log("can not find the team in renderPlayerListView!");
        }
        console.log("renderPlayerListView: we have team:"+team);
        console.log("renderPlayerListView and team is :"+team.player);
        res.render("playerListView",{
            team_name:team.name
        });
    });*/
}