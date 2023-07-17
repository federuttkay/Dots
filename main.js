const body = document.querySelector("body");
const inputField = document.getElementById("input-field");
const generateBtn = document.getElementById("generate-btn");
const dotsField = document.querySelector(".dots-field");

body.addEventListener("click", clickAndEnter);
inputField.addEventListener("keydown", clickAndEnter);

function clickAndEnter(event) {
	if (event.target === generateBtn || event.key === "Enter") {
		try {
			generateDots();
		} catch (e) {
			alert(e); // Hacer algo mejor
		}
	}
}

function generateDots() {
	const inputValue = inputField.value;

	if (inputValue >= 0 && inputValue <= 1000) numberOfDots = inputValue;
	else {
		throw new Error("Number of dots must be between 0 and 1000");
	}
	let dotsCode = "";

	for (let i = 1; i <= numberOfDots; i++) {
		dotsCode += `<div class="dot" style="--top: ${
			Math.random() * 99
		}%; --left: ${Math.random() * 99}%"></div>`;
	}

	dotsField.innerHTML = dotsCode;
}
