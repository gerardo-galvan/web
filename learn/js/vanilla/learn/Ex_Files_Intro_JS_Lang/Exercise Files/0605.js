function speakSomething (what) {
	for (var i = 0; i < 10; i += 1) {
		console.log(what);
	}
}

var speakSomething = function(what) {
	for (var i = 0; i < 10; i += 1) {
		console.log(what);
	}
}

window.setTimeout(speakSomething, 5000);

var obj = {
	'function' : function() {
				   console.log('Hello');
				 }
};

obj.function();

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function