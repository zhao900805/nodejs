var mongoose = require("mongoose");
var dbUrl = "mongodb://127.0.0.1:27017/project";//log from football to project
var connection = null;
var model = null;
var Schema = mongoose.Schema;

//var db = require("./dbConnection");//new
//var mongoose = db.mongoose;//new
//var Schema = mongoose.Schema;//new

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
module.exports.getTeamModel = function(){

    //model = mongoose.model("Team",teamSchema);
    //return model;

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

    /*mongoose.connect(dbUrl,function(err){
        if(err){
            console.log("comment mongoose can not connect!");
        }
    });
    model = mongoose.model("Comment",commentSchema);
    return model;*/
}