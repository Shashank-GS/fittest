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
		const validityMessages = checkValidity(formData);

		if (validityMessages.length !== 0) {
			return (formData.resultDiv.innerHTML = `
				${validityMessages
					.map((message) => `<p class="invalid-msg">${message}</p>`)
					.join("")}
				`);
		}

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
	<p class="${result.resClass}"><strong>${result.message}</strong></p>
	`;
}

// display water-need
function displayWaterNedd(userStats, resultDiv) {
	const result = new User(userStats).waterNeeds();
	resultDiv.innerHTML = `
	<br>
	<p class="water-msg">You should drink <strong>approx ${result} Liters</strong> of water every day.</p>
	`;
}

// get user data from dom
function getFormData(target) {
	// return dom elements data (if exists/required)
	return {
		// Height of user
		height: target.parentElement.querySelector("input#height")
			? parseFloat(target.parentElement.querySelector("input#height").value)
			: undefined,

		// Weight of user
		weight: target.parentElement.querySelector("input#weight")
			? parseFloat(target.parentElement.querySelector("input#weight").value)
			: undefined,

		// Excersice Hours of user
		excerciseMinutes: target.parentElement.querySelector(
			"input#excerciseMinutes"
		)
			? parseFloat(
					target.parentElement.querySelector("input#excerciseMinutes").value
			  )
			: undefined,

		// Div where results have to be displayed
		resultDiv: target.parentElement.parentElement.querySelector(".results"),
	};
}

function checkValidity(data) {
	const messages = [];

	if (data.height !== undefined) {
		data.height <= 0 ? messages.push("Height must be positve!") : null;
		(data.height <= 45 || data.height >= 251) && data.height > 0
			? messages.push("Are you sure about your height?")
			: null;
	}
	if (data.weight !== undefined) {
		data.weight <= 0 ? messages.push("Weight must be positive!") : null;
		(data.weight <= 2 || data.weight >= 442) && data.weight > 0
			? messages.push("Are you sure about your weight?")
			: null;
	}
	if (data.excerciseMinutes !== undefined) {
		data.excerciseMinutes < 0
			? messages.push("Excersice minutes must be positive!")
			: null;
		data.excerciseMinutes >= 960
			? messages.push("Are you sure about your excercise minutes?")
			: null;
	}

	return messages;
}
