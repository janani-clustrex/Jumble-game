console.log("Janani");

// TODO : Add more words
var easyjumble=["npe","avn","cta","odg","tei","ryt","xwa","cie","anm","wro","yee","ujg","oxf","yoj","upc","mgy","tew","kys"];
var easyanswer=["pen","van","cat","dog","tie","try","wax","ice","man","row","eye","jug","fox","joy","cup","gym","wet","sky"];
var mediumjumble=["lhep","eohp","dcru","uoyr","pnis","rokw","uthn","phso","rakp","gsno","alyp","mtei","npki","kboo","skir"];
var mediumanswer=["help","hope","curd","your","spin","work","hunt","shop","park","song","play","time","pink","book","risk"];
var toughjumble=["iktnh","tirwe","lcabk","wcorn","smeuo","hrasp","abkla","nophe","zapiz","izmbeo",""]
var toughanswer=["think","write","black","crown","mouse","sharp","blank","phone","pizza","zombie",""]
/*
var jumble=["lhep","eohp","dcru","rbea","uoyr","pnis","rokw","uthn","phso","rakp","gsno","alyp","mtei","ilev","npki","kboo","aemt","eols","epon,skir"];
var answer=["help","hope","curd","bear","your","spin","work","hunt","shop","park","song","play","time","live","pink","book","team","lose","open","risk"];

*/

var index=0; 
var score=0;


function setJumbleUI(){
	var thisJumble=jumble[index];
	console.log("Jumble is "+ thisJumble);

	document.getElementById("1").innerHTML=thisJumble.charAt([0]);
	document.getElementById("2").innerHTML=thisJumble.charAt([1]);
	document.getElementById("3").innerHTML=thisJumble.charAt([2]);
	document.getElementById("4").innerHTML=thisJumble.charAt([3]);
var x = document.getElementById("jumble");
    x.style.display = "none";
}

function words(val)
{
document.getElementById("output").value=document.getElementById("output").value + val;
}
function hideAndShow() {
    var x = document.getElementById("jumble");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

function easyGame() {
	console.log("i am in")
hideAndShow();


}
function mediumGame(){
	 hideAndShow();
	 var y=document.getElementById("mediumJumble");
	 y.style.display = "block";


}
function toughGame(){
	console.log("i am in")
	hideAndShow();
}
function fillAnswer(id){

	var thisJumble=jumble[index];

	if ( id == "1") {
		document.getElementById("output").value=document.getElementById("output").value + thisJumble.charAt([0]) ;
		
	} else if ( id == "2") {
		document.getElementById("output").value=document.getElementById("output").value + thisJumble.charAt([1]) ;
		
	}else if ( id == "3") {
		document.getElementById("output").value=document.getElementById("output").value + thisJumble.charAt([2]) ;
		
	}else if ( id == "4") {
		document.getElementById("output").value=document.getElementById("output").value + thisJumble.charAt([3]) ;
		
	}
}

function isanswercorrect(){
	var val = document.getElementById("output").value;
	if(val.length==4 &&val==answer[index])
	{
      alert("Well done!! Correct answer!!");
      clearOutput();
      score++;
      updateScore();
      nextWord();
	}
	else{
		alert("Wrong answer!! Try again!!");
		clearOutput();

	}
	
}

function nextWord(){
	


	index=index+1;
	console.log("index " +index+" total words "+jumble.length);

	// if all word finished, alert game over 
     if(index>(jumble.length-1)){
     	
     	alert("Game over!!")
     } else {
     	setJumbleUI();
     }

}

function clearOutput(){
	document.getElementById("output").value = "";
}

function updateScore(){
	document.getElementById("score").innerHTML="score "+score;
}


