var myNum = 32;
var myResult = 'Success!';

function randomizer(limit) {
	var myNum = Math.floor(Math.random() * limit);
	
	console.log('myNum is ' + myNum);
	console.log('Global myNum is ' + window.myNum);
	
	return myNum;
}

randomizer(10);

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions#Function_scope