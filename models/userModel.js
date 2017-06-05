var db = require("../schemas/dbConnection");
var mongoose = db.mongoose;
var userSchema = require("../schemas/userSchema");
module.exports.User = mongoose.model("User",userSchema);