$(document).ready(function(){

	var input = prompt("Input a Value", "");
	var number = +input;

	for(var i=1; i <= number; i++){ // 1 to number inclusive
		if ((i % 3) === 0 && (i % 5) === 0) {
			console.log("fizz buzz");
			// creating an li element : <li>fizz buzz</li>
			// appendTo ul with id = list
		} else {
			if (i%3 === 0){
				console.log("fizz");
			} else {
				if (i%5 === 0){
					console.log("buzz");
				} else {
					console.log(i);
				}
			}
		}
	};
});
