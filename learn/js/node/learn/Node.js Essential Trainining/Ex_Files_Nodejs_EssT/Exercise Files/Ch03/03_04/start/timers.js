var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var percentWaited = 0;

function writeWaitingPercent(p) {
    
 process.stdout.clearLine();
process.stdout.cursorTo(0);
rocess.stdout.write(`waiting ... ${p}`);
    
    
}

var interval = setInterval(function() {
 currentTime += waitInterval;
percentWaited = Math.floor((currentTime/waitTime) * 100);
 console.log(`waiting ${currentTime/1000} seconds...` );
    writeWaitingPercent(percentWaited);
}, waitInterval);


setTimeout(function() {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("done");
    
}, waitTime);

process.stdout.write("\n\n");

writeWaitingPercent(percentWaited);