var Player = require("./dbConnection_player").getPlayerModel();
module.exports = function save_and_reload_all_player_list_view(req,res,next){
    var action = req.body.action;
    var selected_name = req.body.selected_name;
    //console.log("we have these selected: " + selected_name);
    //console.log("we have these selected: " + selected_name[0]);
    //console.log("we have these selected: " + selected_name.length);
    switch(action){
        case "delete":
            for(var i=0 ; i<selected_name.length; i++){
                Player.remove({name: selected_name[i]},function(err){
                    if(err){
                        console.log("err in finding and removing the player in save_and_reload_all_player_list_view");
                    }
                });
            }
            res.redirect("/all_player_list");
            break;
        case "similar_find_btn":
            var target_strike = parseInt(req.body.target_strike);
            var target_age = parseInt(req.body.target_age);
            var target_defence = parseInt(req.body.target_defence);
            var target_weight = parseInt(req.body.target_weight);
            var target_height = parseInt(req.body.target_height);
            /*Player.find().and([{defence:{$gte:target_defence-2,$lte:target_defence+2}},{age:{$gte:target_age-2,$lte:target_age+2}},{strike:{$gte:target_strike+2,$lte:target_strike-2}}]).exec(function(err,players){
                console.log("working here...");
                if(err){
                    console.log("err in finding the players with and query in save_and_reload_all_player_list_view");
                }
                return res.render("all_player_list_view",{
                    similar_players:players
                });
            });*/
            //debug:
            console.log("target_defence : "+ target_defence);
            console.log("target_age :" + target_age);
            console.log("new target_defence:" + (parseInt(target_defence)+2));
            console.log("new target_age :" + (parseInt(target_age)+2));
            console.log(typeof(target_defence));
            //debug done.
            Player.find({$and:[{defence:{$gt:target_defence-2,$lt:target_defence+2}},{age:{$gt:target_age-2,$lt:target_age+2}},{strike:{$gte:target_strike-2,$lte:target_strike+2}}]},function(err,players){
                console.log("working here...");
                if(err){
                    console.log("err in finding the players with and query in save_and_reload_all_player_list_view");
                }
                return res.render("all_player_list_view",{
                    similar_players:players
                });
            });
    }
}