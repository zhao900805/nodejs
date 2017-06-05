var mongoose = require("mongoose");
var dbUrl = "mongodb://127.0.0.1:27017/project";//log from football to project
var connection = null;
var model = null;
var Schema = mongoose.Schema;

//var db = require("./dbConnection");//new
//var mongoose = db.mongoose;//new
//var Schema = mongoose.Schema;//new

var playerSchema = new Schema({
    name:{type:String},
    height:{type:Number},
    weight:{type:Number},
    age:{type:Number},
    team:{type:String},
    //team:{type:Schema.Types.ObjectId},
    strike:{type:Number},
    defence:{type:Number},
    nationality:{type:String},
    photo_url:{type:String}
});
module.exports.getPlayerModel = function(){

    //model = mongoose.model("Player",playerSchema);
    //return model;

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

    /*mongoose.connect(dbUrl,function(err){
        if(err){
            console.log("comment mongoose can not connect!");
        }
    });
    model = mongoose.model("Comment",commentSchema);
    return model;*/
}