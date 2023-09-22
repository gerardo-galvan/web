var cherub = 'Cupid';
// cherub = 'Some Other Guy';

if (cherub === 'Cupid') console.log("Ouch, an arrow!  Ooo, I'm in love!");


if (cherub === 'Cupid')
	console.log("Ouch, an arrow!  Ooo, I'm in love!");
else
	console.log("I feel nothing!");

var wantForChristmas = 'puppy',
	gotForChristmas = 'puppy',
	cryAboutIt = false;

if (wantForChristmas === gotForChristmas) {
	console.log('Yay! The little children are so pleased!');
	cryAboutIt = false;
} else {
	console.log('Oh no! Sad Christmas!');
	cryAboutIt = true;
}

if (cryAboutIt) {
	console.log('Child says: WAAAAAAAAAAAAAAAAAAAAAAAAA!');
}


var animal = 'cat';
// animal = 'dog';

animal === 'cat' ? console.log('You will be a cat herder.') : console.log('You will be a dog catcher.');

var job = (animal === 'cat' ? 'cat herder' : 'dog catcher');

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements#if...else_Statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/JavaScript/A_re-introduction_to_JavaScript#Other_types
//
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Conditional_Operator