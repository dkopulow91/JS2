var a = +prompt('Введите первое число:');
var b = +prompt('Введите второе число:');

if(a >= 0 && b >= 0) {
	alert(a - b);
} else if(a < 0 && b < 0) {
	alert(a * b);
} else if((a >= 0 && b < 0) || (a <= 0 && b > 0)) {
	alert(a + b);
}