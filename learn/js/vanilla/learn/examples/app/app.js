var express = require('express');
// A reference to express. We have something that is pointing to express. 

var app = express();
// gives us an instance of express. Now can do some things with.

var port = 5000;
// port express listens

app.use(express.static('public')); //use = will be used by express first.  
app.use(express.static('src/views')); 


app.get('/', function(req, res){ // pass express a function that will tell it what to do.   

 res.send('hello world'); // will send hello world

});

app.get('/books', function(req, res){

 res.send('hello books');

});


app.listen(port, function(err){ // call back is a function that app.listen will execute when its done doing what it's doing.
    console.log('running server on port ' + port);
}); // express will be listening on port 5000
