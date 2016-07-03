$(document).ready(function(){
	var string;
	for(var i=1; i < 101; i++){
		string= ' ';
		if (i%3 ===0){
			string+="fizz";
		}
		if (i%5 ===0){
			string+="buzz";
		}
		if (i%3 !==0 && i%5 !==0){
			string+=i;
		}
		console.log(string);
	};
});
	