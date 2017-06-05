var Team = require("./dbConnection_team").getTeamModel();
module.exports = function save_and_reload_all_team_list_view(req,res,next){
    var action = req.body.action;
    var selected_name = req.body.selected_name;
    console.log("we have these selected: " + selected_name);
    console.log("we have these selected: " + selected_name[0]);
    console.log("we have these selected: " + selected_name.length);
    switch(action){
        case "delete":
            for(var i=0 ; i<selected_name.length; i++){
                Team.remove({name: selected_name[i]},function(err){
                    if(err){
                        console.log("err in finding and removing the player in save_and_reload_all_team_list_view");
                    }
                });
            }
        res.redirect("/all_team_list");
           
        break;
    }
}