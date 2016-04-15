
//Create an array of image paths

var images = ['image_1.jpg','image_2.jpg', 'image_3.jpg', 'image_4.jpg', 'image_5.jpg', 'image_6.jpg' ];

//Set a variable for the current position

var currentPosition = 0;

//when the user selcts next button

$('#next').on('click', function(){
	console.log('clicked')
	currentPosition = currentPosition + 1;
	//images[currentPosition];

	if(currentPosition === 5){
		$('#next').prop('disabled', true);

//if it's the last image, the next button will be disabled

	}
	console.log('images', images[currentPosition])
	$('#image-to-vote-on').attr('src', 'images/' + images[currentPosition]);
	$('#prev').prop('disabled', false);

});

	//Add one to the current position	
	
$('#prev').on('click', function(){
	console.log('clicked')
	currentPosition = currentPosition - 1;
	//images[currentPosition];
	console.log('images', images[currentPosition])
	$('#image-to-vote-on').attr('src', 'images/' + images[currentPosition]);

	if(currentPosition === 0){
		$('#prev').prop('disabled', true);
	}
});
	
var votes = [0,0,0,0,0,0];	

	// var firstImages = images [0]; 

	// //If currentPosition is the last index

	//  var lastImages = images [images.length-1];

		//Disable #next button



	//changing the src of "#image_to_vote-on" to image at that index



//when the user selects the previous button











//When the user selects the downvote button

//When the user selects the upvote button
