const callAndApply = require('./callnApply');

let update = function(name, age, tShirtSize) {
	this.name = name;
	this.age = age;
	this.tShirtSize = tShirtSize;
};

let person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

test('Update tShirtSize with call: ', ()=>{
	callAndApply.caller(person, update, 'Kishor', 28, 'M');
	expect(person).
		toEqual({
			name: 'Kishor',
			age: 28,
			tShirtSize: 'M'
		});
});

test('Update tShirtSize with apply: ', ()=>{
	callAndApply.applier(person, update, ['Kishor', 28, 'M']);
	expect(person).
		toEqual({
			name: 'Kishor',
			age: 28,
			tShirtSize: 'M'
		});
});

test('Update name using call: ', ()=>{
	callAndApply.caller(person, update, 'Siddharth', 28, 'L');
	expect(person).
		toEqual({
			name: 'Siddharth',
			age: 28,
			tShirtSize: 'L'
		});
});

test('Update name with apply: ', ()=>{
	callAndApply.applier(person, update, ['Siddharth', 28, 'L']);
	expect(person).
		toEqual({
			name: 'Siddharth',
			age: 28,
			tShirtSize: 'L'
		});
});

test('Update name using age: ', ()=>{
	callAndApply.caller(person, update, 'Kishore', 32, 'L');
	expect(person).
		toEqual({
			name: 'Kishore',
			age: 32,
			tShirtSize: 'L'
		});
});

test('Update name with apply: ', ()=>{
	callAndApply.applier(person, update, ['Kishore', 32, 'L']);
	expect(person).
		toEqual({
			name: 'Kishore',
			age: 32,
			tShirtSize: 'L'
		});
});
