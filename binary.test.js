const bin = require('./binary');

test('Testing with integer: ', () =>
	expect(bin(1,2)).
		toBe(3));

test('Testing with any other input: ', () =>
	expect(bin('a', 0)).
		toBe('a0')
);
