var Player = require("./dbConnection_player").getPlayerModel();
module.exports = function render_all_player_list(req,res,next){
    Player.find({},function(err,players){
        if(err){
            console.log("err in finding all players in render_all_player_list");
        }
        res.render("all_player_list_view",{
            players:players
        });
    });
}