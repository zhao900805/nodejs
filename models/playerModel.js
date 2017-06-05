var db = require("./dbConnection");
var mongoose = db.mongoose;
var Schema = mongoose.Schema;
//var playerSchema = require("../schemas/playerSchema");
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
module.exports.getPlayerModel = function(){
    return mongoose.model("Player",playerSchema);
}
