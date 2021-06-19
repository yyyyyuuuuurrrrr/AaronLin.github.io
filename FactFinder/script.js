document.querySelector('#a').f1.addEventListener("click", buttonA);
document.querySelector('#a').f2.addEventListener("click", buttonB);
document.querySelector('#a').f3.addEventListener("click", buttonC);
document.querySelector('#a').f4.addEventListener("click", buttonD);
document.querySelector('#a').f5.addEventListener("click", buttonE);


function buttonA(){
	
	document.getElementById("b").innerHTML = "Competitive art used to be in the Olympics.";
	document.getElementById("b").innerHTML += "<img src='images/olympics.png' alt ='olympics'>";

	 
}
function buttonB(){
	
	 document.getElementById("b").innerHTML = "A chef's hat has exactly 100 pleats.";
	 document.getElementById("b").innerHTML += "<img src='images/chefhat.png' alt ='chefhat'>";
	 
}
function buttonC(){
	
	 document.getElementById("b").innerHTML = "\"OMG\" usage can be traced back to 1917.";
	 
}
function buttonD(){
	
	 document.getElementById("b").innerHTML = "Some cats are actually allergic to humans.";
	 
}
function buttonE(){
	
	 document.getElementById("b").innerHTML = "Oranges aren't naturally occurring fruits.";
	 
}


