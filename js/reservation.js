 // Show the selected form and hide others
function openForm(formId) {
    const forms = document.querySelectorAll('.reservation-form');
    forms.forEach((form) => {
        form.style.display = 'none'; // Hide all forms
    });
    document.getElementById(formId).style.display = 'block'; // Show selected form
}

// Handle form submission and display a success message
function handleSubmit(formId) {
    alert("Reservation is successful! 🎉");
    return false; // Prevent page reload
}

