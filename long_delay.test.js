const longDelay = require('./long_delay');

test('Testing with 1 integer: ', () =>
	expect(longDelay(1)()).
		toBe(1));

test('Testing with multiple integer: ', () =>
	expect(longDelay(1)(2)(3)(4)(5)()).
		toBe(15));

test('Testing with number as string, should convert string to number: ', () =>
	expect(longDelay('1')(2)(3)(4)(5)()).
		toBe(15));

test('Testing with string, should ignore string: ', () =>
	expect(longDelay('string')(1)(2)(3)()).
		toBe(6));

test('No arguments: ', () =>
	expect(longDelay()).
		toBe(0));

test('Number as string: ', ()=>{
	expect(longDelay(1)('2')('3')()).
		toBe(6);
});
