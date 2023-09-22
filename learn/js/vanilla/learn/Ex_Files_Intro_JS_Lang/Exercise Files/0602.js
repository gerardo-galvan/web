fuddify("Be very quiet, I'm hunting rabbits.");
fuddify("You screwy rabbit.");
fuddify("Rabbit tracks!");

function fuddify(speech) {
	// if it's not a string, return an error message
	if (typeof speech !== 'string') return "Nice twy, wabbit!";
	
	// otherwise, make it sound like Elmer Fudd
	speech = speech.replace(/r/g, 'w');
	speech = speech.replace(/R/g, 'W');
	
	return speech;
}

var utterance = fuddify("You screwy rabbit");
utterance;

function isOdd(num) {
	if (num % 2 === 0) {
		return false;
	} else {
		return true;
	}
}

12 % 2;
isOdd(45);

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function