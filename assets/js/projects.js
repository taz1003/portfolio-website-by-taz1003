// ==========================
// DOM Elements
// ==========================

const featuredProjects = document.getElementById("featured-projects");
const projectsContainer = document.getElementById("projects-container");

// ==========================
// Create Project Card
// ==========================
const techClasses = {
	Python: "badge-python",
	SQL: "badge-sql",
	"Power BI": "badge-powerbi",
	Excel: "badge-excel",
	Pandas: "badge-pandas",
	NumPy: "badge-numpy",
	Tableau: "badge-tableau",
	Bootstrap: "badge-bootstrap",
	JavaScript: "badge-javascript",
	HTML: "badge-html",
	CSS: "badge-css",
};

function createProjectCard(project, buttonText = "View Details") {
	const badges = project.technologies
		.map((tech) => {
			const badgeClass = techClasses[tech] || "bg-secondary";
			return `<span class="badge ${badgeClass} me-1">${tech}</span>`;
		})
		.join("");

	return `
		<div class="col-md-6 col-lg-4">
			<div class="project-card h-100">

				<img
					src="${project.image}"
					class="img-fluid rounded-top"
					alt="${project.title}">

				<div class="p-4">

					<h4>${project.title}</h4>

					<p class="text-secondary">
						${project.shortDescription}
					</p>

					<div class="mb-3">
						${badges}
					</div>

					<button
						class="btn btn-primary view-project"
						data-id="${project.id}">

						${buttonText}

					</button>

				</div>

			</div>
		</div>
	`;
}

// ==========================
// Homepage Featured Projects
// ==========================

if (featuredProjects && typeof projects !== "undefined") {
	featuredProjects.innerHTML = projects.map((project) => createProjectCard(project)).join("");
}

// ==========================
// Projects Page
// ==========================

function renderProjects(projectList) {
	if (!projectsContainer) return;

	projectsContainer.innerHTML = projectList.map((project) => createProjectCard(project, "View Project")).join("");
}

if (projectsContainer && typeof projects !== "undefined") {
	renderProjects(projects);
}

// ==========================
// Filter Buttons
// ==========================

const filterButtons = document.querySelectorAll(".filter-btn");

if (filterButtons.length > 0) {
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

			const filteredProjects = projects.filter((project) => project.technologies.includes(filter));

			renderProjects(filteredProjects);
		});
	});
}

// ==========================
// Project Modal
// ==========================

document.addEventListener("click", function (e) {
	if (!e.target.classList.contains("view-project")) return;

	const id = Number(e.target.dataset.id);

	const project = projects.find((p) => p.id === id);

	if (!project) return;

	document.getElementById("modalTitle").textContent = project.title;
	document.getElementById("modalImage").src = project.image;
	document.getElementById("modalImage").alt = project.title;

	document.getElementById("modalDescription").textContent = project.fullDescription;

	document.getElementById("modalProblem").textContent = project.problem;

	document.getElementById("modalSolution").textContent = project.solution;

	document.getElementById("modalTech").innerHTML = project.technologies
		.map((tech) => `<span class="badge ${techClasses[tech] || "badge-primary"} me-2">${tech}</span>`)
		.join("");

	document.getElementById("modalInsights").innerHTML = project.insights.map((insight) => `<li>${insight}</li>`).join("");

	document.getElementById("githubBtn").href = project.github;
	document.getElementById("liveBtn").href = project.live;

	const modal = new bootstrap.Modal(document.getElementById("projectModal"));

	modal.show();
});
