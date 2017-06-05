var Team = require("./dbConnection_team").getTeamModel();
var Player = require("./dbConnection_player").getPlayerModel();
//var Team = require("./db_test").getPlayerModel();
//var Player = require("./db_test").getPlayerModel();
module.exports = function renderTeamViewByName(req,res,next){
    var name = req.params.name;
    Team.findOne({name:name},function(err,team){
                if(err){
                    console.log("can not find the team by name!");
                }
                 if(!team){
                    console.log("the team does not exist!");
                }
                console.log("user is found!");
                res.render("teamViewByName",{
                    team:team
                });
            });
    
}