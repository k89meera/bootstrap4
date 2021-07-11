function one() {
	let btn = document.getElementById("calculator");
	if(btn.value) {
		btn.value = btn.value + "1";
	}
	else {
		btn.value = "1"
	}
}

function two() {
	let btn = document.getElementById("calculator");
	if(btn.value) {
		btn.value = btn.value + "2";
	}
	else {
		btn.value = "2";
	}
}

function equal() {
	document.getElementById("calculator_text").value = "Ans = 30";
}