var answer = window.prompt('Type YES, NO, or MAYBE.  Then click OK.');

switch (answer) {
	case 'YES' :
		console.log('You said YES!');
		break;
	case 'MAYBE' :
		console.log("You said maybe. I don't know what to make of that.");
		break;
	case 'NO' :
		console.log('You said no. :(');
		break;
	default :
		console.log('You rebel, you!');
		break;
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/switch