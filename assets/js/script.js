function sendMail(contactForm) {
	emailjs
		.send("service_xe3eg9i", "rosie", {
			from_name: contactForm.name.value,
			email: contactForm.emailaddress.value,
			project_request: contactForm.projectsummary.value,
		})
		.then(
			function (response) {
				console.log("SUCCESS", response);
			},
			function (error) {
				console.log("FAILED", error);
			},
		);
	// return false; // To block from loading a new page
}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
	if (window.scrollY > 400) {
		topBtn.style.display = "block";
	} else {
		topBtn.style.display = "none";
	}
});

topBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,

		behavior: "smooth",
	});
});
