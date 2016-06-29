var express = require("express");
var bodyParser = require("body-parser");
var path=require("path");
mongoose = require("mongoose");  //omitting mongoose makes this globally available

var app = express();

app.use(express.static(path.join(__dirname+"/client/static")));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log("listening on 8000");
}
)
