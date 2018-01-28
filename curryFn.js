let curryVar = function curry(fn) {
	let arity = fn.length;

	return function f1() {
		let args = Array.prototype.slice.call(arguments, 0);
		if (args.length >= arity) {
			return fn.apply(null, args);
		}

		else {
			return function f2() {
				let args2 = Array.prototype.slice.call(arguments, 0);
				return f1.apply(null, args.concat(args2));
			};
		}
	};
};

module.exports = curryVar;
