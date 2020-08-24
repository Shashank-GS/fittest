// Import user class
import User from "./user.js";

// display only home on load
displayComponent("#home");

// ******************************** EVENTS *******************************************

// Display appropriate component when user clicks
const $navlinks = document.querySelectorAll("nav .nav-link li a");
$navlinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const id = e.target.getAttribute("href");
		displayComponent(id);
	});
});

// Event listener for calculate buttons
const $calculateForms = document.querySelectorAll(".isComponent form");
$calculateForms.forEach((calcForm) => {
	calcForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const toolId = e.target.querySelector("button").id;

		switch (toolId) {
			case "button-bmi":
				const height = e.target.parentElement.querySelector("input#height")
					.value;
				const weight = e.target.parentElement.querySelector("input#weight")
					.value;
				const resultDiv = e.target.parentElement.parentElement.querySelector(
					".results"
				);
				displayBmi(
					{ height: parseFloat(height), weight: parseFloat(weight) },
					resultDiv
				);
				break;

			case "button-water-needs":
				displayWaterNedd();
				break;
		}
	});
});
// ************************************ FUNCTIONS ***************************************
// display component function
function displayComponent(id) {
	const $components = document.querySelectorAll("section.isComponent");

	$components.forEach((component) => {
		component.style.display = "none";
	});

	const $component = document.querySelector(id).parentElement;
	$component.style.display = "block";
}

// display bmi
function displayBmi(userStats, resultDiv) {
	const result = new User(userStats).bmi();
	resultDiv.innerHTML = `
	<br>
	<p>BMI: ${result.bmi}</p>
	<p>${result.message}</p>
	`;
}

// display water-need
function displayWaterNedd() {
	console.log("this is water needs");
}
