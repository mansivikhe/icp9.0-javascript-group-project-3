// Function to show the selected form and hide others
function openForm(formId) {
    const forms = document.querySelectorAll('.reservation-form');
    forms.forEach((form) => {
        form.style.display = 'none'; // Hide all forms
    });
    document.getElementById(formId).style.display = 'block'; // Show the selected form
}

// Function to handle form submission
function handleSubmit(formId) {
    const name = document.getElementById(`${formId}-name`).value; // Get the name from the form
    
    // Show the alert
    alert(`🎉 Reservation successful for ${name}.`);
    
    // Reset the form fields
    document.getElementById(formId).reset();
    
    // Prevent actual form submission
    return false;
}
