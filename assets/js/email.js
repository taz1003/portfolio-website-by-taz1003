// EmailJS integration
emailjs.init("uXOeYAky9LtqQR_EG");

const form = document.getElementById("contact-form");

if (form) {
	form.addEventListener("submit", function (e) {
		e.preventDefault();

		emailjs
			.send("service_bdiwf64", "template_bywqhpk", {
				name: form.name.value,
				user_name: form.name.value,
				user_email: form.emailaddress.value,
				message: form.projectsummary.value,
				time: new Date().toLocaleString(),
			})
			.then(() => {
				alert("Message sent successfully!");
				form.reset();
			})
			.catch((error) => {
				console.error("EmailJS Error:", error);
				alert("Failed to send message: " + (error.text || error.message || JSON.stringify(error)));
			});
	});
}
