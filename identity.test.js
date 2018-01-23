const id = require('./identity');
let arg;

test('Testing with integer: ', () =>
	expect(id(1)).
		toBe(1));

test('Testing with string: ', () =>
	expect(id('sid')).
		toBe('sid'));

arg = [1,2,3,4,5];
test('Testing with array of number: ', () =>
	expect(id(arg)).
		toBe(arg));

arg = ['abc', 'def', 'ghi'];
test('Testing with array of strings: ', () =>
	expect(id(arg)).
		toBe(arg));

test('Testing with null: ', () =>
	expect(id(null)).
		toBe(null));

arg = [];
test('Testing with empty array: ', () =>
	expect(id(arg)).
		toBe(arg));
