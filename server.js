const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);
mongoose.Promise = global.Promise;
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://heroku_472lc07x:cq2b68vd9su2fol9f0892kdf37@ds161426.mlab.com:61426/heroku_472lc07x",
	{
		useMongoClient: true
	}
);

app.listen(PORT, function(){
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});