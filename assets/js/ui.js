const topBtn = document.getElementById("topBtn");

if (topBtn) {
	window.addEventListener("scroll", () => {
		topBtn.style.display = window.scrollY > 400 ? "block" : "none";
	});

	topBtn.addEventListener("click", () => {
		window.scrollTo({
			top: 0,

			behavior: "smooth",
		});
	});
}

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
	new bootstrap.Tooltip(el);
});
