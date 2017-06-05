var Team = require("./dbConnection_team").getTeamModel();
var Player = require("./dbConnection_player").getPlayerModel();
//var Team = require("./db_test").getPlayerModel();
//var Player = require("./db_test").getPlayerModel();
module.exports = function renderTeamListView(req,res,next){
    
    Team.find({},function(err,teams){
        if(err){
            console.log("team can not been found!");
        }
        res.render("teamListView",{
            teams:teams
        });
    });

}