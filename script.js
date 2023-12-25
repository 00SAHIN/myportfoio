document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
        section.style.opacity = '0'; /* Added opacity for smooth transition */
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        setTimeout(function() {
            selectedSection.style.opacity = '1'; /* Fade in effect */
        }, 100);
    }
}
