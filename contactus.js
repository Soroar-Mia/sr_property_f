document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const problem = document.getElementById('problem').value;

    const contactData = {
        name: name,
        phone: phone,
        problem: problem
    };

    fetch('https://sr-property.onrender.com/contact_us/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Your message has been submitted successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit message.');
    });
});
