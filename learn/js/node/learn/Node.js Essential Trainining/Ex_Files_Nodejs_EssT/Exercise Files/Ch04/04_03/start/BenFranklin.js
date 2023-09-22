var events = require('events');

var emitter = new events.EventEmmitter();

emmiter.on('customEvent', function(message, status) {
    
   console.log(`${status}: ${message}`); 
    
});


emitter.emit('customEvent', "Hellow World", 200);

