// EmailJS integration
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

// Scroll to top button
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

// Projects cards list
const projects = [
	{
		id: 1,

		title: "Breast Cancer Analysis Dashboard",

		shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		fullDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius officiis molestiae, beatae numquam deleniti voluptatem. Lorem ipsum dolor sit amet.",

		image: "https://placehold.co/900x600",

		technologies: ["Streamlit", "SQL", "Python"],

		problem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		solution: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		insights: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],

		github: "#",

		live: "#",
	},

	{
		id: 2,

		title: "Customer Churn Dashboard",

		shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		fullDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius officiis molestiae, beatae numquam deleniti voluptatem. Lorem ipsum dolor sit amet.",

		image: "https://placehold.co/900x600",

		technologies: ["Power BI", "SQL", "Python"],

		problem: "asdfkjashdflkjasdhflksjt.",

		solution: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		insights: ["dfgsdfgdsfg", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],

		github: "#",

		live: "#",
	},

	{
		id: 3,

		title: "Sales Performance Analysis",

		shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		fullDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius officiis molestiae, beatae numquam deleniti voluptatem. Lorem ipsum dolor sit amet.",

		image: "https://placehold.co/900x600",

		technologies: ["Streamlit", "SQL", "Python"],

		problem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		solution: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		insights: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],

		github: "#",

		live: "#",
	},

	{
		id: 4,

		title: "HR Analytics Dashboard",

		shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		fullDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius officiis molestiae, beatae numquam deleniti voluptatem. Lorem ipsum dolor sit amet.",

		image: "https://placehold.co/900x600",

		technologies: ["Power BI", "SQL", "Python"],

		problem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		solution: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		insights: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],

		github: "#",

		live: "#",
	},

	{
		id: 5,

		title: "Market Data Dashboard",

		shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		fullDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius officiis molestiae, beatae numquam deleniti voluptatem. Lorem ipsum dolor sit amet.",

		image: "https://placehold.co/900x600",

		technologies: ["Power BI", "SQL", "Python"],

		problem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		solution: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		insights: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],

		github: "#",

		live: "#",
	},

	{
		id: 6,

		title: "Fruits and Vegetables Sales Dashboard",

		shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		fullDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius officiis molestiae, beatae numquam deleniti voluptatem. Lorem ipsum dolor sit amet.",

		image: "https://placehold.co/900x600",

		technologies: ["Power BI", "SQL", "Python"],

		problem: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		solution: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

		insights: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],

		github: "#",

		live: "#",
	},
];

// Automatically create project cards
const featuredProjects = document.getElementById("featured-projects");

if (featuredProjects) {
	projects.forEach((project) => {
		const badges = project.technologies.map((tech) => `<span class="badge text-bg-primary me-1">${tech}</span>`).join("");

		featuredProjects.innerHTML += `

		<div class="col-md-6 col-lg-4">
			<div class="project-card h-100">
				<img src="${project.image}" class="img-fluid rounded-top" alt="${project.title}" />
			
				<div class="p-4">
					<h4>${project.title}</h4>
			
					<p class="text-secondary">${project.shortDescription}</p>
			
					<div class="mb-3">${badges}</div>
			
					<button class="btn btn-sm btn-primary view-project" data-id="${project.id}">View Details</button>
				</div>
			</div>
		</div>

        `;
	});
}

// -------------------------------------Projects Page Script-------------------------------------
const projectsContainer = document.getElementById("projects-container");

function renderProjects(projectList) {
	if (!projectsContainer) return;

	projectsContainer.innerHTML = "";

	projectList.forEach((project) => {
		const badges = project.technologies

			.map((tech) => `<span class="badge text-bg-primary me-1">${tech}</span>`)

			.join("");

		projectsContainer.innerHTML += `

		<div class="col-md-6 col-lg-4">
			<div class="project-card">
				<img src="${project.image}" class="img-fluid" alt="${project.title}" />

				<div class="p-4">
					<h4>${project.title}</h4>

					<p class="text-secondary">${project.shortDescription}</p>

					<div class="mb-3">${badges}</div>

					<button class="btn btn-primary view-project" data-id="${project.id}">View Project</button>
				</div>
			</div>
		</div>

        `;
	});
}
renderProjects(projects);

// Filter projects by technology
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		filterButtons.forEach((btn) => {
			btn.classList.remove("btn-primary");

			btn.classList.add("btn-outline-primary");
		});

		button.classList.remove("btn-outline-primary");

		button.classList.add("btn-primary");

		const filter = button.dataset.filter;

		if (filter === "All") {
			renderProjects(projects);

			return;
		}

		const filtered = projects.filter((project) => project.technologies.includes(filter));

		renderProjects(filtered);
	});
});

// Bootstrap Modal functionality
document.addEventListener("click", function (e) {
	if (!e.target.classList.contains("view-project")) return;

	const id = Number(e.target.dataset.id);

	const project = projects.find((p) => p.id === id);

	document.getElementById("modalTitle").textContent = project.title;

	document.getElementById("modalImage").src = project.image;

	document.getElementById("modalDescription").textContent = project.fullDescription;

	document.getElementById("modalProblem").textContent = project.problem;

	document.getElementById("modalSolution").textContent = project.solution;

	document.getElementById("modalTech").innerHTML = project.technologies
		.map((t) => `<span class="badge text-bg-primary me-2">${t}</span>`)
		.join("");

	document.getElementById("modalInsights").innerHTML = project.insights.map((i) => `<li>${i}</li>`).join("");

	document.getElementById("githubBtn").href = project.github;

	document.getElementById("liveBtn").href = project.live;

	const modal = new bootstrap.Modal(document.getElementById("projectModal"));

	modal.show();
});

// Initialize Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

tooltipTriggerList.forEach((tooltipTriggerEl) => {
	new bootstrap.Tooltip(tooltipTriggerEl);
});
