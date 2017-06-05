/*var mongoose = require("mongoose");
var dbUrl = "mongodb://127.0.0.1:27017/football_test";
var connection = null;
var model = null;
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    name:{type:String},
    height:{type:Number},
    weight:{type:String},
    age:{type:Number},
    team:{type:Schema.Types.ObjectId},
    strike:{type:Number},
    defence:{type:String},
    nationality:{type:String},
    photo_url:{type:String}
});
var teamSchema = new Schema({
    name:{type:String},
    player:[{type:Schema.Types.ObjectId,ref:"Player"}],
    age:{type:Number},
    home:{type:String},
    strike:{type:Number},
    defence:{type:String},
    nationality:{type:String},
    photo_url:{type:String}
});
module.exports.getPlayerModel = function(){
    if(connection == null){
        console.log("Player creating connection...");
        connection = mongoose.createConnection(dbUrl,function(err,db){
            if(err){
                console.log(' Player can not create!');
            }
        });
        model = connection.model("Player",playerSchema);
    }
    return model;

    mongoose.connect(dbUrl);
    var db = mongoose.Connection;
    model = mongoose.model("Player",playerSchema);
    return model;
}
module.exports.getTeamModel = function(){
    if(connection == null){
        console.log("Team creating connection...");
        connection = mongoose.createConnection(dbUrl,function(err,db){
            if(err){
                console.log(' team can not create!');
            }
        });
        model = connection.model("Team",teamSchema);
    }
    return model;

    mongoose.connect(dbUrl,function(err){
        if(err){
            console.log("Team mongoose can not connect!");
        }
    });
    model = mongoose.model("Team",teamSchema);
    return model;
}*/

///////////////////////////////////////////////////////

/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db1 = mongoose.createConnection('mongodb://localhost:27017/gh3639');
var db2 = mongoose.createConnection('mongodb://localhost:27017/gh3639_2');

var playerSchema = new Schema({
    name:{type:String},
    height:{type:Number},
    weight:{type:String},
    age:{type:Number},
    team:{type:mongoose.Schema.Types.ObjectId,ref:"Team"},
    strike:{type:Number},
    defence:{type:String},
    nationality:{type:String},
    photo_url:{type:String}
});
var teamSchema = new Schema({
    name:{type:String},
    player:[{type:mongoose.Schema.Types.ObjectId,ref:"Player"}],
    age:{type:Number},
    home:{type:String},
    strike:{type:Number},
    defence:{type:String},
    nationality:{type:String},
    photo_url:{type:String}
});
module.exports.getTeamModel = function(){
    if(connection == null){
        console.log("Team creating connection...");
        connection = mongoose.createConnection(dbUrl,function(err,db){
            if(err){
                console.log(' team can not create!');
            }
        });
        model = connection.model("Team",teamSchema);
    }
    return model;
    model = db1.model("Team",teamSchema);
    return model;
}
module.exports.getPlayerModel = function(){
    if(connection == null){
        console.log("Player creating connection...");
        connection = mongoose.createConnection(dbUrl,function(err,db){
            if(err){
                console.log(' Player can not create!');
            }
        });
        model = connection.model("Player",playerSchema);
    }
    return model;
    model = db2.model("Player",playerSchema);
    return model;
}*/

