var fs = require('fs';
var data = require('./data.jason');          
                 

console.log(data.name);
fs readFile('./data.json', 'utf-8' funciton(err, data) {
    
   data = JSON.parse(data);
   console.log(data.name); 
});