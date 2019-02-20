var val = +prompt('Введите число:');
var pow = +prompt('Введите степень:');

function power(val, pow) {
	if(pow === 0) {
		return 1;
	}
	return val**pow;
}

alert(val**pow);	