var db = require("./dbConnection");
var mongoose = db.mongoose;
var articleSchema = require("../schemas/articleSchema");
module.exports.Article = mongoose.model("Article",articleSchema);