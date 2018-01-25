let sum = 0;

let funVariable = function (arg){
	if (arg === undefined){ // function called without arguments
		let retValue = sum;
		sum = 0;
		return retValue;
	}
	arg = validate(arg); // validates and returns corrected arguments
	sum += arg;
	return funVariable;
};

function validate (arg){
	if (typeof(arg) === 'string'){
		arg = Number(arg); // try to convert it into Number
		if (isNaN(arg)) // it was a string and not number as strings
			arg = 0; // modify arg as 0
	}

	else if (typeof (arg) != 'number') // for null or any other exception
		arg = 0;

	return arg;

}

module.exports = funVariable;
