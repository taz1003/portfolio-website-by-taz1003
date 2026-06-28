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
		title: "Customer Churn Dashboard",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "https://placehold.co/600x400",
		technologies: ["Power BI", "SQL", "Python"],
	},

	{
		title: "Sales Performance Analysis",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "https://placehold.co/600x400",
		technologies: ["Excel", "SQL"],
	},

	{
		title: "HR Analytics",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "https://placehold.co/600x400",
		technologies: ["Power BI", "Excel"],
	},

	{
		title: "Financial Dashboard",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "https://placehold.co/600x400",
		technologies: ["Power BI", "SQL"],
	},

	{
		title: "Netflix Data Exploration",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "https://placehold.co/600x400",
		technologies: ["Python", "Pandas"],
	},

	{
		title: "Market Basket Analysis",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "https://placehold.co/600x400",
		technologies: ["Python", "SQL"],
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

                <img
                    src="${project.image}"
                    class="img-fluid rounded-top"
                    alt="${project.title}">

                <div class="p-4">

                    <h4>${project.title}</h4>

                    <p class="text-secondary">

                        ${project.description}

                    </p>

                    <div class="mb-3">

                        ${badges}

                    </div>

                    <a href="projects.html"
                        class="btn btn-sm btn-primary">

                        View Details

                    </a>

                </div>

            </div>

        </div>

        `;
	});
}
