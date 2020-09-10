var navigation = '<nav class="navigation"><a class = "navigation-link" href="index.html">Home</a></nav>';
$('body').prepend(navigation);
$('nav').after('<div id = "quiz"></div>');
var counter = 0;

$.each(content, function(question, answers){
	counter += 1;
	$('#quiz').append('<div class = "quiz-section" id = "question'+counter+'"></div>');
	$('#question'+counter).append('<p>'+question+'</p>');
	$('#question'+counter).append('<ul class = "custom-radio"></ul>');
	// $('#question'+counter).append('<ul></ul>');
	$.each(answers, function(index, answer){
	$('#question'+counter+'> ul').append('<li class = "radio-list"><input type = "radio" name = "group'+counter+'" class = "'+answer+'" id = "'+answer+question+'"><label for = "'+answer+question+'">'+answer+'</li>');
	// $('#question'+counter+'> ul').append('<li><input type = "radio" name = "group'+counter+'" class = "'+answer+'" id = "'+question+answer+'"><label for = "'+answer+'">'+answer+'</li>');
	})
});

var number = correctAnswers.length;

$('#check').click(function(){
	var score = 0;
	$('.answer').css('display','block');
	for(var i = 0; i < number; i++){
		var correctAnswer = correctAnswers[i];
		var answer = $("#question"+(i+1)+" > ul > li > input:checked").attr("class"); 
		if (answer == correctAnswer){
			score = score+1;
		}
	}
	// alert(score);
	$('.score-container').remove();
	$('#quiz').after('<div class = "score-container"><p class = "score-text">You got '+score+' out of '+number+'</p></div>');
});






