// Adding interactivity for the contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Optionally, reset the form
    e.target.reset();
});

// Add hover effect for project cards
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'transform 0.3s';
    });
    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
    });
});