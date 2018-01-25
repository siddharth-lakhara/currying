const delay = require('./delay');

test('Testing with integer: ', () =>
	expect(delay(1)(2)).
		toBe(3));

test('Testing with any string: ', () =>
	expect(delay('a')(0)).
		toBe('Error: only numbers accepted')
);

test('Testing with null: ', () =>
	expect(delay(null)(0)).
		toBe('Error: only numbers accepted')
);

test('Testing with any string: ', () =>
	expect(delay(undefined)(0)).
		toBe('Error: only numbers accepted')
);

test('Testing with any string: ', () =>
	expect(delay('a')(0)).
		toBe('Error: only numbers accepted')
);

test('Testing with float: ', () =>
	expect(Number(delay(0.1)(0.2).toFixed(1))).
		toBe(0.3)
);
