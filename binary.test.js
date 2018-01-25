const bin = require('./binary');

test('Testing with integer: ', () =>
	expect(bin(1,2)).
		toBe(3));

test('Testing with any string and integer: ', () =>
	expect(bin('a', 0)).
		toBe('Error: only numbers accepted')
);

test('Testing with float: ', () =>
	expect(Number(bin(0.1, 0.2).toFixed(1))).
		toBe(0.3)
);

test('Testing with null: ', () =>
	expect(bin(null, 1)).
		toBe('Error: only numbers accepted')
);

test('Testing with undefined: ', () =>
	expect(bin(undefined, 4)).
		toBe('Error: only numbers accepted')
);
