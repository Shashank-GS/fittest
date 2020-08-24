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
		const formData = getFormData(e.target);

		switch (toolId) {
			// BMI Tool
			case "button-bmi":
				displayBmi(
					{
						height: parseFloat(formData.height),
						weight: parseFloat(formData.weight),
					},
					formData.resultDiv
				);
				break;

			// Water requirements tool
			case "button-water-needs":
				displayWaterNedd(
					{
						weight: parseFloat(formData.weight),
						excerciseMinutes: parseFloat(formData.excerciseMinutes),
					},
					formData.resultDiv
				);
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
function displayWaterNedd(userStats, resultDiv) {
	const result = new User(userStats).waterNeeds();
	resultDiv.innerHTML = `
	<br>
	<p>You should drink approx ${result} Liters of water every day.</p>
	`;
}

function getFormData(target) {
	// return dom elements data (if exists/required)
	return {
		// Height of user
		height: target.parentElement.querySelector("input#height")
			? target.parentElement.querySelector("input#height").value
			: undefined,

		// Weight of user
		weight: target.parentElement.querySelector("input#weight")
			? target.parentElement.querySelector("input#weight").value
			: undefined,

		// Excersice Hours of user
		excerciseMinutes: target.parentElement.querySelector(
			"input#excerciseMinutes"
		)
			? target.parentElement.querySelector("input#excerciseMinutes").value
			: undefined,

		// Div where results have to be displayed
		resultDiv: target.parentElement.parentElement.querySelector(".results"),
	};
}
