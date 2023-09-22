var answer = window.confirm('Click OK, get true.  Click cancel, get false.');
answer;

if (answer === true) {
	console.log('You said true!');
}

if (answer === true) {
	console.log('You said true!');
} else {
	console.log('You said something else');
}

var answer = window.prompt('Type YES, NO, or MAYBE.  Then click OK.');
if (answer === 'YES') {
	console.log('You said YES!');
} else if (answer === 'MAYBE') {
	console.log("You said maybe. I don't know what to make of that."); // note the double primes
} else if (answer === 'NO') {
	console.log('You said no. :(');
} else {
	console.log('You rebel, you!');
}

var answer = window.prompt('Type YES, NO, or MAYBE.  Then click OK.');
if (answer === 'YES' || answer === 'NO') {
	console.log('You said YES!');
} else if (answer === 'NO') {
	console.log('You said no. :(');
} else {
	console.log('You rebel, you!');
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/if...else