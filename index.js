document.addEventListener('DOMContentLoaded', function() {
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content-area').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Load the default content
    loadContent('home.html');

    // Event listeners for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('data-url');
            loadContent(url);

            // Update active class
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
