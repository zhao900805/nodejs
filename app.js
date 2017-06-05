var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var app = express();
app.engine("handlebars",handlebars({defaultLayout:"main"}));
app.set("view engine","handlebars");

app.use(express.static(__dirname+"/public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var route = require("./routes/index");
app.use("/",route);

app.use(function(req,res){
    res.status(404);
    res.render("404",{
        title:"can not connect!"
    });
});

app.listen(3000,function(err){
    if(err){
        console.log("can not listen!");
        res.status(404);
        res.render("404",{
            title:"can not listen!"
        });
    }
    console.log("listening on 3000...");
});
