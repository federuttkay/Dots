const body = document.querySelector("body");
const inputField = document.getElementById("input-field");
const generateBtn = document.getElementById("generate-btn");
const dotsField = document.querySelector(".dots-field");

body.addEventListener("click", clickHandle);
inputField.addEventListener("keydown", enterHandle);

function clickHandle(event) {
	if (event.target === generateBtn) {
		generateDots();
	}
}

function enterHandle(event) {
	if (event.key === "Enter") {
		generateDots();
	}
}

function generateDots() {
	const inputValue = inputField.value;

	if (inputValue >= 0 && inputValue <= 1000) numberOfDots = inputValue;
	else numberOfDots = 0;

	let dotsCode = "";

	for (let i = 1; i <= numberOfDots; i++) {
		dotsCode += `<div class="dot" style="--top: ${
			Math.random() * 99
		}%; --left: ${Math.random() * 99}%"></div>`;
	}

	dotsField.innerHTML = dotsCode;
}
