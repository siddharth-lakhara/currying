function sumFn1 (first){

	function sumFn2 (second){
		if (typeof(first) != 'number' || typeof(second) != 'number')
			return 'Error: only numbers accepted';
		else
			return first + second;
	}

	return sumFn2;
}

module.exports = sumFn1;
