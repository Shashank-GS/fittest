// display only home on load
displayComponent("#home");

// Display appropriate component when user clicks
$navlinks = document.querySelectorAll("nav .nav-link li a");
$navlinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const id = e.target.getAttribute("href");
		console.log(id);
		displayComponent(id);
	});
});

// display component function
function displayComponent(id) {
	$components = document.querySelectorAll("section.isComponent");

	$components.forEach((component) => {
		component.style.display = "none";
	});

	$component = document.querySelector(id).parentElement;
	$component.style.display = "block";
}
