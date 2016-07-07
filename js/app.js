$(document).ready(function(){

	var input = prompt("Input a Value", "");
	var number = +input;

	while(isNaN(number) || (number %1 !=0)){
		input = prompt("Please re-input the Value", "");
		number = +input;
	}

	for(var i=1; i <= number; i++){ // 1 to number inclusive
		if ((i % 3) === 0 && (i % 5) === 0) {
		$('#list').append('fizzbuzz');
		} else {
			if (i%3 === 0){
				$('#list').append('fizz');
			} else {
				if (i%5 === 0){
					$('#list').append('buzz');
				} else {
					$('#list').append(i);
				}
			}
		}
	$('#list').append('<br>');
	};	
});
