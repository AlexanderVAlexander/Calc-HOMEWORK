function plus(){ 
	let num1, num2, result; 
	num1 = document.getElementById('n1').value; //вкладываем в num1 значение, которое пользователь введет в будущем в инпут с id n1
	num1 = parseInt (num1); //команда преобразует данные к целому, цифровому значению

	num2 = document.getElementById('n2').value; 
	num2 = parseInt (num2); 
	if (Number.isNaN(num2)){result = 'Введите второе число'}else{result = num1 + num2;} 
	document.getElementById('out').innerHTML = result; 
}

function minus(){
	let num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt (num1); 

	num2 = document.getElementById('n2').value; 
	num2 = parseInt (num2); 
	if (Number.isNaN(num2)){result = 'Введите второе число'}else{result = num1 - num2;} 
	document.getElementById('out').innerHTML = result;
}
function multiply(){
	let num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt (num1); 

	num2 = document.getElementById('n2').value; 
	num2 = parseInt (num2); 
	if (Number.isNaN(num2)){
		result = 'Введите второе число'}else{result = num1 * num2;} 
	document.getElementById('out').innerHTML = result;
}
function divide(){
	let num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt (num1); 

	num2 = document.getElementById('n2').value; 
	num2 = parseInt (num2); 
	if (Number.isNaN(num2)){result = 'Введите второе число'}else{result = num1 / num2;} 
	document.getElementById('out').innerHTML = result;
}

function sqrt(){
	let num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt (num1); 

	num2 = document.getElementById('n2').value; 
	num2 = parseInt (num2); 
	if (Number.isNaN(num2)){result = Math.sqrt(num1)}else{result = 'Для вычисления корня из числа, введите значение в первую ячейку'}
	document.getElementById('out').innerHTML = result;
}

function pow(){
	let num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt (num1); 

	num2 = document.getElementById('n2').value; 
	num2 = parseInt (num2); 
	if (Number.isNaN(num2)){result = 'Введите значение степени'}else{result = Math.pow(num1, num2)}

	document.getElementById('out').innerHTML = result;
}
function percent(){
	let num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt (num1); 

	num2 = document.getElementById('n2').value; 
	num2 = parseInt (num2); 
	if (Number.isNaN(num2)){result = num1 / 100}else{result = num1 / 100 * num2 ;}
	document.getElementById('out').innerHTML = result;
}