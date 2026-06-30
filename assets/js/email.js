// EmailJS integration
const form = document.getElementById("contact-form");

if (form) {
	form.addEventListener("submit", function (e) {
		e.preventDefault();

		emailjs
			.send("service_bdiwf64", "template_bywqhpk", {
				from_name: form.name.value,
				emailaddress: form.emailaddress.value,
				projectsummary: form.projectsummary.value,
			})
			.then(() => {
				alert("Message sent successfully!");
				form.reset();
			})
			.catch((error) => {
				console.error(error);
				alert("Failed to send message.");
			});
	});
}
