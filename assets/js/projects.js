// -------------------------------------Projects-------------------------------------
const featuredProjects = document.getElementById("featured-projects");
const projectsContainer = document.getElementById("projects-container");

function createProjectCard(project) {
	const badges = project.technologies.map((tech) => `<span class="badge text-bg-primary me-1">${tech}</span>`).join("");

	return `

    <div class="col-md-6 col-lg-4">
    	<div class="project-card h-100">
    		<img src="${project.image}" class="img-fluid rounded-top" alt="${project.title}" />
    
    		<div class="p-4">
    			<h4>${project.title}</h4>
    
    			<p class="text-secondary">${project.shortDescription}</p>
    
    			<div class="mb-3">${badges}</div>
    
    			<button class="btn btn-primary view-project" data-id="${project.id}">View Details</button>
    		</div>
    	</div>
    </div>

`;
}

if (featuredProjects) {
	featuredProjects.innerHTML = projects.map(createProjectCard).join("");
}

function renderProjects(projectList) {
	if (!projectsContainer) return;

	projectsContainer.innerHTML = projectList.map(createProjectCard).join("");
}

if (projectsContainer) {
	renderProjects(projects);
}

// -------------------------------------Filter Projects-------------------------------------
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

		renderProjects(projects.filter((project) => project.technologies.includes(filter)));
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
