var express = require("express");
var router = express.Router();
var mainPage = require("./mainPage");
var renderUserView = require("./renderUserView");
var loginPage = require("./loginPage");
var loadInfo = require("./loadInfo");
var registerPage = require("./registerPage");
var saveInfo = require("./saveInfo");
var renderTeamListView = require("./renderTeamListView");
var save_and_reload_teamListView = require("./save_and_reload_teamListView");
var renderTeamViewByName = require("./renderTeamViewByName");
var save_and_reload_teamViewByName = require("./save_and_reload_teamViewByName");
var renderPlayerListView = require("./renderPlayerListView");
var save_and_reload_playerListView = require("./save_and_reload_playerListView");
var renderEditPlayerPage = require("./renderEditPlayerPage");
var save_and_reload_editPlayerPage = require("./save_and_reload_editPlayerPage");
var render_all_player_list = require("./render_all_player_list");
var save_and_reload_all_player_list_view = require("./save_and_reload_all_player_list_view");
var render_all_team_list = require("./render_all_team_list");
var save_and_reload_all_team_list_view = require("./save_and_reload_all_team_list_view");

router.get("/",mainPage);
router.get("/user",renderUserView);

router.get("/user/loginPage",loginPage);
router.post("/user/loginPage",loadInfo);

router.get("/user/registerPage",registerPage);
router.post("/user/registerPage",saveInfo);

router.get("/home",renderTeamListView);
router.post("/home",save_and_reload_teamListView);

router.get("/home/:name",renderTeamViewByName);
router.post("/home/:name",save_and_reload_teamViewByName);

router.get("/home/:name/playerList",renderPlayerListView);
router.post("/home/:name/playerList",save_and_reload_playerListView);

router.get("/home/:name/editPage/:team",renderEditPlayerPage);
router.post("/home/:name/editPage",save_and_reload_editPlayerPage);

router.get("/all_player_list",render_all_player_list);
router.post("/all_player_list",save_and_reload_all_player_list_view);

router.get("/all_team_list",render_all_team_list);
router.post("/all_team_list",save_and_reload_all_team_list_view)


module.exports = router;