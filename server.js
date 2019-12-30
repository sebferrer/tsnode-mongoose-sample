let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/userModel'), // Created model loading here
    bodyParser = require('body-parser');

// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }).
    catch(error => {
        console.error(error)
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/userRoutes'); // Importing routes
routes(app); // Register the route

app.listen(port);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

console.log('Sample RESTful API server started on: ' + port);
