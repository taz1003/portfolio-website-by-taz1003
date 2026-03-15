// ── CUSTOM CURSOR ───────────────────────────────────────────
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";
});

// Expand cursor on interactive elements
document.querySelectorAll("a, button, .project-card, .skill-cell").forEach((el) => {
	el.addEventListener("mouseenter", () => cursor.classList.add("expand"));
	el.addEventListener("mouseleave", () => cursor.classList.remove("expand"));
});

// ── SCROLL REVEAL ───────────────────────────────────────────
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry, i) => {
			if (entry.isIntersecting) {
				// Stagger each element slightly
				setTimeout(() => {
					entry.target.classList.add("visible");
				}, i * 80);

				// Animate skill bars when they scroll into view
				entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => bar.classList.add("animate"));
			}
		});
	},
	{ threshold: 0.12 },
);

revealEls.forEach((el) => observer.observe(el));
