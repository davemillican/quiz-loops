var prompt = require ('prompt-sync').prompt;
 

var user_response;
var number_correct = 0;
var start_time, stop_time;
var minutes, seconds;
var i = 0;

var questions = [
	{
		question: "What tag would one use to start a Table Body definition?",
		answer: "tbody"

	},
	{
		question: "What is the term for a tag with no end-tag?",
		answer: "void"
	},
	{
		question: "What display value do you use for side by side?",
		answer: "inline"

	},
	{
		question: "which of the three following is a valid color value? 0x33421 color(red) #121212",
		answer: "#121212"

	},
	{
		question: "what is a Java type? float double literal null.",
		answer: "null"

	},
	{
		question: "what property will allow you to draw a circle?",
		answer: "border-radius"
	},
	{
		question:"What property would you set for a border-box?",
		answer:"box-sizing"
	},
	{
		question:"True or False: Padding is mandatory.",
		answer:"false"
	},
	{
		question: "What is a unit of measurement in CSS? Rads rem tesla cubits",
		answer: "rem" 
	},
	{
		question: "What would you use to place a block at a specific location in the browser window?",
		answer: "position:fixed"
	},
	{
		question: "what is necessary to be valid HTML? DOCTYPE ASSIGN BUS_WIDTH MACRO_DOC",
		answer: "doctype"
	},
	{
		question: "What is a valid HTTP request? POST Send-Data Query Call",
		answer: "post"
	},
	{
		question: "Where do you go for questions? 'Stack Overflow' online-help all-things-java",
		answer: "Stack Overflow"
	},
	{
		question: "What property can be used to get the length of a string? findLength numCharacters length",
		answer: "length"

	},
	{
		question:"what is the > symbol in CSS?",
		answer: "combinator"

	}
]


start_time = Date.now();

i = 0;
while (i < questions.length )
{

	// Question Number 1
	console.log (questions[i].question);

	user_response = prompt();

	if (user_response.toLowerCase() === questions[i].answer ) {
		number_correct++;
		console.log ("Correct!");
	} else
	{
		console.log("Nice Try.");
		console.log("The answer is " + questions[i].answer);
	};

	console.log("");
	console.log("");
	console.log("");
	console.log("");
	i++;

}

	console.log("");
	console.log("");
	console.log("");


stop_time = Date.now();

minutes = Math.floor((stop_time - start_time)/60000);
seconds = ((stop_time - start_time) / 1000 ) % 60;

console.log("Thank you: You got " + number_correct + " correct out of 15.");
console.log("That is a grade of " + Math.floor(number_correct/15 *100)+ "%.");


console.log ("It took " + minutes + " minutes and " + Math.floor(seconds) +" seconds to take this quiz.");







