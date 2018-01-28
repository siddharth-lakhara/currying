const curry = require('./curryFn');

let sumFour = curry(function (w, x, y, z){
	return w+x+y+z;
});

test('Base Case: ', ()=>{
	expect(sumFour(1)(2)(3)(4)).
		toBe(10);
});

test('returns function with 1 argument: ', ()=>{
	expect(typeof sumFour(1) === 'function').
		toBeTruthy();
});

test('returns function with 2 arguments: ', ()=>{
	expect(typeof sumFour(1)(2) === 'function').
		toBeTruthy();
});

test('returns function with 3 arguments: ', ()=>{
	expect(typeof sumFour(1)(2)(3) === 'function').
		toBeTruthy();
});
