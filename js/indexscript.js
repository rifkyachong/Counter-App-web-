console.log("TESTING!!!")
var countEl = document.getElementById("count-num");
var countrecord = [document.getElementById("rec1"),
	document.getElementById("rec2"),
	document.getElementById("rec3"),
	document.getElementById("rec4"),
	document.getElementById("rec5")]
var num = 0;
var i = 0;

const increment = function() {
	num++;
	countEl.innerText = num;
	console.log("clicked!");
}
	
const save = function() {
	while (i < 4 && countrecord[i].innerText !== "") {
		i++;
	}
	while (i > 0) {
		countrecord[i].innerText = countrecord[i-1].innerText;
		i--;
	}
	countrecord[0].innerText = num;
	num = 0;
	countEl.innerText = 0;
}