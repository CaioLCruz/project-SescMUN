const committees = [
    'Historical Council',
    'Tech Titans Special Group',
    'UN General Assembly',
    'Human Rights Council',
    'Security Council'
];

export function initializeForm() {
    const form = document.getElementById('registration-form');
    const committeeSelects = [
        document.getElementById('committee1'),
        document.getElementById('committee2'),
        document.getElementById('committee3')
    ];

    // Populate committee dropdowns
    committeeSelects.forEach(select => {
        committees.forEach(committee => {
            const option = document.createElement('option');
            option.value = committee;
            option.textContent = committee;
            select.appendChild(option);
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            age: document.getElementById('age').value,
            country: document.getElementById('country').value,
            committee1: document.getElementById('committee1').value,
            committee2: document.getElementById('committee2').value,
            committee3: document.getElementById('committee3').value
        };

        try {
            // Here you would typically send the data to your backend
            console.log('Form submitted:', formData);
            alert('Thank you for registering! Your information has been successfully recorded.');
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your registration. Please try again.');
        }
    });
}