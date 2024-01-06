// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded before executing JavaScript

    // Function to show project details modal
    window.showProjectDetails = function(title, description) {
        document.getElementById('projectTitle').innerText = title;
        document.getElementById('projectDescription').innerText = description;
        document.getElementById('projectDetailsModal').style.display = 'block';
    };

    // Function to close project details modal
    window.closeProjectDetailsModal = function() {
        document.getElementById('projectDetailsModal').style.display = 'none';
    };
});
