var correctAnswers = ['Mt. Fuji','Phewa Lake','Ayers Rock','Niagra Falls'];
var content = {'images/mt_fuji.jpg': ['Niagra Falls', 'Mt Everest', 'Mt Kiliminjaro', 'Mt. Fuji'],
	'images/phewa_lake.jpg': ['Phewa Lake', 'Lake Baikal', 'Nile River', 'Thames River'],
	'images/ayers_rock.jpg': ['Mountain','Ayers Rock', 'Great Barrier Reef', 'Coral Mountain'],
	'images/niagra_falls.jpg': ['Victoria Falls', 'Angel Falls', 'Yosemite Falls', 'Niagra Falls']
};


// var div = "<div></div>";
// $('body').prepend('<div id = "quiz"></div>');
var navigation = '<nav class="navigation"><a class = "navigation-link" href="index.html">Home</a></nav>';
$('body').prepend(navigation);
$('nav').after('<div id = "quiz"></div>');

var counter = 0;

$.each(content, function(question, answers){
	counter += 1;
	$('#quiz').append('<div class = "quiz-section" id = "question'+counter+'"></div>');
	$('#question'+counter).append('<img src = "'+question+'" height = "300" width = "400">');
	$('#question'+counter).append('<ul class = "custom-radio"></ul>');
	$.each(answers, function(index, answer){
		$('#question'+counter+'> ul').append('<li class = "radio-list"><input type = "radio" name = "group'+counter+'" class = "'+answer+'" id = "'+answer+question+'"><label for = "'+answer+question+'">'+answer+'</li>');
	})
});

var number = correctAnswers.length;

$('#check').click(function(){
	var score = 0;
	// $('.answer').css('display','block');
	for(var i = 0; i < number; i++){
		var correctAnswer = correctAnswers[i];
		// var correctAnswer = selected["answer"];
		var answer = $("#question"+(i+1)+" > ul > li > input:checked").attr("class"); 
		if (answer == correctAnswer){
			score = score+1;
		}
	}
	$('.score-container').remove();
	$('#quiz').after('<div class = "score-container"><p class = "score-text">Your score is: '+score+'</p></div>');
});
