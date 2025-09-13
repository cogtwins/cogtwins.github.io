// Simple intersection observer to trigger animations when element is in viewport
document.addEventListener("DOMContentLoaded", function () {
	const heroSection = document.querySelector(".hero");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-in");
				}
			});
		},
		{ threshold: 0.1 }
	);

	observer.observe(heroSection);
});
