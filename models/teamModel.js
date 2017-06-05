var db = require("./dbConnection");
var mongoose = db.mongoose;
var Schema = mongoose.Schema;
//var teamSchema = require("../schemas/playerSchema");
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
    return mongoose.model("Team",teamSchema);
}
