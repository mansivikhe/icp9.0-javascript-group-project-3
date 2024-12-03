function openForm(formId) {
    const forms = document.querySelectorAll('.reservation-form');
    forms.forEach((form) => {
        form.style.display = 'none'; 
    });
    document.getElementById(formId).style.display = 'block'; 
}

function handleSubmit(formId) {
    const name = document.getElementById(`${formId}-name`).value; 
    
    // Show the alert
    alert(`🎉 Reservation successful for ${name}.`);
    
    // Delay form reset to ensure the alert shows first
    setTimeout(() => {
        document.getElementById(formId).reset(); 
    }, 500); // 500ms delay

    return false; // Prevent the form from actually submitting
}
