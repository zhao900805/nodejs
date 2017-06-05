var Team = require("./dbConnection_team").getTeamModel();
var Player = require("./dbConnection_player").getPlayerModel();
//var Team = require("./db_test").getPlayerModel();
//var Player = require("./db_test").getPlayerModel();
module.exports = function save_and_reload_teamListView(req,res,next){
    var name = req.body.name_form;
    var age = req.body.age_form;
    var home = req.body.home_form;
    var strike = req.body.strike_form;
    var defence = req.body.defence_form;
    var nationality = req.body.nationality_form;
    var photo_url = req.body.file_url_needToBeSent;

    var action = req.body.action;
    switch(action){
        case "submit":
            var newTeam = new Team({
            name:name,
            age:age,
            home:home,
            strike:strike,
            defence:defence,
            nationality:nationality,
            photo_url:photo_url,
            player:null
            });
            Team.find({},function(err,team){
            console.log("####");
            console.log("id  "+ team._id);
            });
            newTeam.save(function(err){
                if(err){
                console.log("the newTeam can not be saved!");
                }
                console.log("the id is:"+newTeam._id);
                res.redirect("/home");
            });
            break;
        case "by_age":
            Team.find({}).sort({age: -1}).exec(function(err, teams){
                if(err){
                    console.log("the team can not be sorted by age in save_and_reload_teamListView!");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "by_defence":
            Team.find({}).sort({defence: -1}).exec(function(err, teams){
                if(err){
                    console.log("the team can not be sorted by age in save_and_reload_teamListView!");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "by_strike":
            Team.find({}).sort({strike: -1}).exec(function(err, teams){
                if(err){
                    console.log("the team can not be sorted by age in save_and_reload_teamListView!");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "England":
            Team.find({nationality:"England"},function(err,teams){
                if(err){
                    console.log("the team can not be found by England in save_and_reload_teamListView");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "Italia":
            Team.find({nationality:"Italia"},function(err,teams){
                if(err){
                    console.log("the team can not be found by England in save_and_reload_teamListView");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "Germany":
            Team.find({nationality:"Germany"},function(err,teams){
                if(err){
                    console.log("the team can not be found by England in save_and_reload_teamListView");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "Spain":
            Team.find({nationality:"Spain"},function(err,teams){
                if(err){
                    console.log("the team can not be found by England in save_and_reload_teamListView");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "show_all":
            Team.find({},function(err,teams){
                if(err){
                    console.log("the team can not be found by all in save_and_reload_teamListView")
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "Others":
            Team.find({$nor:[{nationality:"England"},{nationality:"Italia"},{nationality:"Germany"},{nationality:"Spain"}]},function(err,teams){
                if(err){
                    console.log("the team can not be found by England in save_and_reload_teamListView");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "go":
            var option = req.body.search_type_select;
            var key_word = req.body.key_word;
            console.log("we are having key words to search:"+ key_word);
            console.log("the value of option now is :"+option);
            switch(option){
                /*case "team":
                    Team.find({$or:[{"name":{$regex:key_word}},{"player":{$regex:key_word}},{"age":{$regex:key_word}},{"home":{$regex:key_word}},{"strike":{$regex:key_word}},{"defence":{$regex:key_word}},{"nationality":{$regex:key_word}}]},function(err,teams){
                        if(err){
                            console.log("the team can not be found by $regex in save_and_reload_teamListView");
                        }
                        return res.render("teamListView",{
                            teams:teams
                        });
                    });
                    break;*/
                case "team":
                    Team.find({"name":{$regex:key_word}},function(err,teams){
                        if(err){
                            console.log("the team can not be found by $regex in save_and_reload_teamListView");
                        }
                        return res.render("teamListView",{
                            teams:teams
                        });
                    });
                    break;
                case "player":
                    Player.find({"name":{$regex:key_word}},function(err,players){
                        if(err){
                            console.log("the team can not be found by $regex in save_and_reload_teamListView");
                        }
                        return res.render("teamListView",{
                            players:players
                        });
                    });
                    break;
            }
            break;  
        case "filter_strike":
            var low = req.body.filter_strike_low;
            var high = req.body.filter_strike_high;
            Team.find({strike:{$gt : low, $lt : high}},function(err,teams){
                if(err){
                    console.log("can not find the strike by the low and high!");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break;
        case "filter_age":
            var low = req.body.filter_age_low;
            var high = req.body.filter_age_high;
            Team.find({age:{$gt : low, $lt : high}},function(err,teams){
                if(err){
                    console.log("can not find the age by the low and high!");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break; 
        case "filter_defence":
            var low = req.body.filter_defence_low;
            var high = req.body.filter_defence_high;
            Team.find({defence:{$gt : low, $lt : high}},function(err,teams){
                if(err){
                    console.log("can not find the defence by the low and high!");
                }
                return res.render("teamListView",{
                    teams:teams
                });
            });
            break; 
        case "update_team":
            var team = req.body.update_team_value;
            Player.find({team:team},function(err,players){
                var all_defence = 0;
                var all_strike = 0;
                var all_height = 0;
                var all_weight = 0;
                var all_age = 0;
                var new_defence = 0;
                var new_strike = 0;
                var new_height = 0;
                var new_weight = 0;
                var new_age = 0;
                if(err){
                    console.log("err in finding all players by name in save_and_reload_teamListView");
                }
                for(var i=0;i<players.length;i++){
                    all_defence = all_defence + players[i].defence;
                    all_strike = all_strike + players[i].strike;
                    all_height = all_height + players[i].height;
                    all_weight = all_weight + players[i].weight;
                    all_age = all_age + players[i].age;
                }
                //debug:
                console.log("the name to be updated: "+ name);
                console.log("all_defence: "+ all_defence);
                console.log("all_height :" + all_height);
                console.log("all_strike :"+ all_strike);
                console.log("all_weight :" +all_weight);
                //end of debug
                new_defence = Math.round(all_defence/(players.length));
                new_strike = Math.round(all_strike/(players.length));
                new_height = Math.round(all_height/(players.length));
                new_weight = Math.round(all_weight/(players.length));
                new_age = Math.round(all_age/(players.length));
                //debug:
                console.log("new_defence: "+new_defence);
                console.log("new_height :"+ new_height);
                console.log("new_strike :"+new_strike);
                console.log("new_weight :"+new_weight);
                //end of debug
                Team.findOne({name:team},function(err,team){
                    if(err){
                        console.log("err in finding the team in save_and_reload_teamListView");
                    }
                    team.defence = new_defence;
                    team.strike = new_strike;
                    team.weight = new_weight;
                    team.height = new_height;
                    team.age = new_age;
                    team.save(function(err){
                        if(err){
                            console.log("can not save after update in save_and_reload_teamListView");
                        }
                    });
                    res.redirect("/home");
                });
            });
        
    }
}