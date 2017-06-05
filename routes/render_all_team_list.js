var Team = require("./dbConnection_team").getTeamModel();
module.exports = function render_all_team_list(req,res,next){
    Team.find({},function(err,teams){
        if(err){
            console.log("err in finding all teams in render_all_team_list ");
        }
        res.render("all_team_list_view",{
            teams:teams
        });
    });
}