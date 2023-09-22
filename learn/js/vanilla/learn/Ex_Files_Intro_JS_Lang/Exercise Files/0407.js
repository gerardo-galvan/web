var thing = 12;
thing = 'twelve';
typeof thing;

thing = 12;
typeof thing;

thing = false;
typeof thing;

thing = {};
typeof thing;

thing = [];
typeof thing;
typeof thing === 'object' && thing.hasOwnProperty('length'); // true

thing = {};
typeof thing === 'object' && thing.hasOwnProperty('length'); // true

NaN;
typeof NaN;

typeof null;
thing === null;
thing = null;
thing;
thing === null;

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/typeof