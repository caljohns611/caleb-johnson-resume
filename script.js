// Dark Light mode toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "Light Mode";
    } else {
        toggleBtn.textContent = "Dark Mode";
    }
});




// Typing effect for Job Title
const jobTitle = document.getElementById("jobTitle");
const text = "Full-Stack Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        jobTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.addEventListener("DOMContentLoaded", typeEffect);






// Fade in sections
const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = [...sections].indexOf(entry.target); // Get section order
            const baseDelay = index * 300; // Each section delayed 300ms after previous

            setTimeout(() => {
                entry.target.classList.add("show");

                // Experience section, stagger job cards
                if (entry.target.id === "experience") {
                    const jobs = entry.target.querySelectorAll(".job");
                    jobs.forEach((job, index) => {
                        setTimeout(() => {
                            job.classList.add("show");
                        }, 500 + index * 400); // section delay + stagger
                    });
                }

                // Skills section, stagger skill items
                if (entry.target.id === "skills") {
                    const skills = entry.target.querySelectorAll("li");
                    skills.forEach((skill, index) => {
                        setTimeout(() => {
                            skill.classList.add("show");
                        }, 500 + index * 300); // section delay + stagger
                    });
                }

                // Projects section, stagger project cards
                if (entry.target.id === "projects") {
                    const projects = entry.target.querySelectorAll(".project-card");
                    projects.forEach((project, i) => {
                        setTimeout(() => {
                            project.classList.add("show");
                        }, 500 + i * 400);
                    });
                }

            }, baseDelay);

            observer.unobserve(entry.target); // Only animate once
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    sectionObserver.observe(section);
});






// Contact form with EmailJS
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Reset status styles
    statusMsg.className = "";
    statusMsg.textContent = "⏳ Sending...";
    statusMsg.style.display = "block";

    emailjs.sendForm("service_maov5ww", "template_99bvkgs", this).then(() => {
        statusMsg.textContent = "✅ Message sent successfully";
        statusMsg.className = " success";
        form.reset();

        // Auto-hide after 5 seconds
        setTimeout(() => { statusMsg.style.display = "none"; }, 5000);
    }, (error) => {
        statusMsg.textContent = "❌ Failed to send. Try again later."
        statusMsg.className = "error";

        // Add shake animation
        statusMsg.classList.add("shake");
        setTimeout(() => statusMsg.classList.remove("shake"), 500);

        console.error("EmailJS error:", error);

        // Auto-hide after 5 seconds
        setTimeout(() => { statusMsg.style.display = "none"; }, 5000);
    });
});




// Scroll to top button 
const scrollBtn = document.getElementById("scrollTopBtn");

//Show button when scrolling down
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// Smooth scroll to top when clicked
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});





// Scroll progress bar
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});