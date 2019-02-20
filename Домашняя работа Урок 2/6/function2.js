var operation = prompt('Введите операцию:');
var arg1 = +prompt('Введите первое число:');
var arg2 = +prompt('Введите второе число:'); 


function addition(arg1,arg2) { // Сложение
	return a + b;
}
function subtraction(arg1,arg2) { // Вычитание
	return a - b;
}
function division(arg1,arg2) { // Деление
	return a / b;
}
function multiplication(arg1,arg2) { // Умножение
	return a * b;
}

function mathOperation(arg1, arg2, operation) {
	switch (operation) { 
        case '+': 
            return addition(arg1,arg2); 
            break; 
        case '-': 
            return subtraction(arg1,arg2); 
            break; 
        case '/': 
            return division(arg1,arg2); 
            break; 
        case '*': 
            return multiplication(arg1,arg2); 
            break; 
    }
}

if(mathOperation()) {
	alert('Результат');
}
