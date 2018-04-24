
// TODO : Add more words
var easyjumble = ["npe", "avn", "cta", "odg", "tei", "ryt", "xwa", "cie", "anm", "wro", "yee", "ujg", "oxf", "yoj", "upc", "mgy", "tew", "kys"];
var easyanswer = ["pen", "van", "cat", "dog", "tie", "try", "wax", "ice", "man", "row", "eye", "jug", "fox", "joy", "cup,cpu", "gym", "wet", "sky"];
var mediumjumble = ["lhep", "eohp", "dcru", "uoyr", "pnis", "rokw", "uthn", "phso", "rakp", "gsno", "alyp", "mtei", "npki", "kboo", "skir"];
var mediumanswer = ["help", "hope", "curd", "your", "spin", "work", "hunt", "shop", "park", "song", "play", "time,item", "pink", "book", "risk"];
var toughjumble = ["iktnh", "tirwe", "lcabk", "wcorn", "smeuo", "hrasp", "abkln", "nophe", "zapiz"]
var toughanswer = ["think", "write", "black", "crown", "mouse", "sharp", "blank", "phone", "pizza"]
var thisJumble, outputId, answer, answerLength, level, levelComplexity;

/*
var jumble=["lhep","eohp","dcru","rbea","uoyr","pnis","rokw","uthn","phso","rakp","gsno","alyp","mtei","ilev","npki","kboo","aemt","eols","epon,skir"];
var answer=["help","hope","curd","bear","your","spin","work","hunt","shop","park","song","play","time","live","pink","book","team","lose","open","risk"];

*/

var index = 0;
var score = 0;





function setJumbleUI(level) {
	thisJumble = level[index];
	//var x = document.getElementById("jumble");
	console.log('thisJumble', thisJumble.charAt([0]), levelComplexity);
	document.getElementById(levelComplexity + "1").innerHTML = thisJumble.charAt([0]);
	document.getElementById(levelComplexity + "2").innerHTML = thisJumble.charAt([1]);
	document.getElementById(levelComplexity + "3").innerHTML = thisJumble.charAt([2]);

	if (levelComplexity === "medium" || levelComplexity === "tough")
		document.getElementById(levelComplexity + "4").innerHTML = thisJumble.charAt([3]);
	if (levelComplexity === "tough")
		document.getElementById(levelComplexity + "5").innerHTML = thisJumble.charAt([4]);

	//x.style.display = "none";
}

// function words(val)
// {
// document.getElementById("output").value=document.getElementById("output").value + val;
// }
function hideAndShow() {
	var x = document.getElementById("jumble");
	if (x.style.display === "none") {
		x.style.display = "block";
	}
}

function easyGame() {

	level = easyjumble;
	levelComplexity = "easy";
	setJumbleUI(level);
	var b = document.getElementById("difficulties");
	b.style.display = "block";
	var x = document.getElementById("mediumJumble");
	x.style.display = "none";
	var z = document.getElementById("toughJumble");
	z.style.display = "none";
	var y = document.getElementById("easyJumble");
	y.style.display = "block";
	var a = document.getElementById("levels");
	a.style.display = "none";
}
function mediumGame() {
	level = mediumjumble;
	levelComplexity = "medium";
	setJumbleUI(level);
	var b = document.getElementById("difficulties");
	b.style.display = "block";
	var x = document.getElementById("toughJumble");
	x.style.display = "none";
	var z = document.getElementById("easyJumble");
	z.style.display = "none";
	var y = document.getElementById("mediumJumble");
	y.style.display = "block";
	var a = document.getElementById("levels");
	a.style.display = "none";

}

function toughGame() {
	level = toughjumble;
	levelComplexity = "tough";
	setJumbleUI(level);
	var b = document.getElementById("difficulties");
	b.style.display = "block";
	var x = document.getElementById("toughJumble");
	x.style.display = "block";
	var z = document.getElementById("easyJumble");
	z.style.display = "none";
	var y = document.getElementById("mediumJumble");
	y.style.display = "none";
	var a = document.getElementById("levels");
	a.style.display = "none";
}

function commaSpliter(string) {
	if (string.indexOf(",") !== -1) {
		return string.split(",");
	}
}


function fillAnswer(id, level) {
	if (level == "easy") {
		thisJumble = easyjumble[index];
		outputId = "easyOutput";
		answer = easyanswer;
		answerLength = 3;
	}
	if (level == "medium") {
		thisJumble = mediumjumble[index];
		outputId = "mediumOutput";
		answer = mediumanswer;
		answerLength = 4;
	}
	if (level == "tough") {
		thisJumble = toughjumble[index];
		outputId = "toughOutput";
		answer = toughanswer;
		answerLength = 5;
	}
	console.log('thisJumble', thisJumble.charAt([id - 1]), outputId, level + '1', id);
	if (id == 1) {
		document.getElementById(outputId).value = document.getElementById(outputId).value + thisJumble.charAt([id - 1]);
		console.log(document.getElementById(outputId).value);

	} else if (id == 2) {
		document.getElementById(outputId).value = document.getElementById(outputId).value + thisJumble.charAt([id - 1]);

	} else if (id == 3) {
		document.getElementById(outputId).value = document.getElementById(outputId).value + thisJumble.charAt([id - 1]);

	} else if (id == 4) {
		document.getElementById(outputId).value = document.getElementById(outputId).value + thisJumble.charAt([id - 1]);

	} else if (id == 5) {
		document.getElementById(outputId).value = document.getElementById(outputId).value + thisJumble.charAt([id - 1]);
	}
}

function isanswercorrect() {
	var val = document.getElementById(outputId).value;
	var splittedAnswer = answer[index];
	if (answer[index].indexOf(",") !== -1)
		splittedAnswer = answer[index].split(",");
	var success = false;
	var failure = false;
	if (typeof (splittedAnswer) === "string") {
		if (val.length == answerLength && val == splittedAnswer) {
			success = true;
		}
		else {
			failure = true;

		}
	}
	else {
		for (i = 0; i <= (splittedAnswer.length) - 1; i++) {
			if (val.length == answerLength && val == splittedAnswer[i]) {
				success = true;
			}
			else {
				failure = true;

			}
		}
	}

	if (success === true) {
		alert("Well done!! Correct answer!!");
		clearOutput();
		score++;
		updateScore();
		nextWord();
	}
	else {
		alert("Wrong answer!! Try again!!");
		clearOutput();

	}
}

function nextWord() {



	index = index + 1;

	// if all word finished, alert game over 
	console.log('thisJumble.length, index', level.length, index, thisJumble)
	if (index > (level.length - 1)) {

		alert("Game over!!")
	} else {
		setJumbleUI(level);
	}

}

function clearOutput() {
	document.getElementById(outputId).value = "";
}

function updateScore() {
	document.getElementById("score").innerHTML = "score " + score;

}
function whileOnloading() {
	console.log(document.getElementById("easyOutput").maxLength)
	var b = document.getElementById("difficulties");
	b.style.display = "none";
}

