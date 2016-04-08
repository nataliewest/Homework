
//Converting Fahrenheit to Celsius

//when the user clicks the #fahrenheit_to_celsius
	//Get the value from #tempurature and store in variable fahrenheit
	//Convert that value to a number

	//Convert to celsius and store in variable celsius
		//((fahrenheit - 32) / 1.8)

		//convert celsius to fahrenheit
		//1.8 * celsius + 32;

	//Display in #result (hint: use HTML method)


$('#fahrenheit_to_celsius').on('click', function(){
	var fahrenheit = $('#temperature').val();
	fahrenheit = parseFloat(fahrenheit);
	console.log(fahrenheit)
	var celsius = (fahrenheit - 32) / 1.8;
	$('#result').html(celsius);
});


//Converting Celsius to Fahrenheit

//when the user clicks the #celsius_to_fahrenheit
	//Get the value from #tempurature and store in variable celsius
	//Convert that value to a number

	//Convert to fahrenheit and store in variable celsius
		
		//1.8 * celsius + 32;

	//Display in #result (hint: use HTML method)

	$('#celsius_to_fahrenheit').on('click', function(){
		var celsius = $('#temperature').val();
		celsius = parseFloat(celsius);
		var fahrenheit = 1.8 * celsius + 32;
		$('#result').html(fahrenheit);
	});









	