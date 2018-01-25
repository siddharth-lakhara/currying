let binary = function (first, sec) {
	if (typeof(first) != 'number' && typeof(sec) != 'number'){
		return 'Error: only numbers accepted';
	}

	return first+sec;
};

module.exports = binary;
