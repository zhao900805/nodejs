var Player = require("./dbConnection_player").getPlayerModel();
var Team = require("./dbConnection_team").getTeamModel();
module.exports = function renderEditPlayerPage(req,res,next){
    var name = req.params.name;
    var old_team = req.params.team;
    Player.findOne({name:name},function(err,player){
        if(err){
            console.log("in renderEditPlayerPage, the player can not be found!");
        }
        Team.find({},function(err,teams){
            if(err){
                console.log("err in finding all the teams in renderEditPlayerPage!");
            }
            res.render("editPlayerPage",{
                player:player,old_team:old_team,all_teams:teams
            }); 
        });
    });
}