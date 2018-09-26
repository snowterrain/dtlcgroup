//Install express server
const express = require('express');
const path = require('path');

const app = express();
var mongoose = require('mongoose');
var configuration = require('./server/configuration.js');
var api = require('./server/api');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.Promise = global.Promise;
//Connection details
var connection_string = configuration.dbConnection
mongoose.connect(connection_string)
    .then(() => console.log('connection succesful98098'))
    .catch((err) => console.error(err));

    app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
    app.use(bodyParser.json()); // parse application/json
    app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
    app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/dtlcgroup'));
/* app.use('/api', api);

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/dtlcgroup/index.html'));
}); */

require('./server/api.js')(app);
app.use('/', express.static('app', { redirect: false }));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);