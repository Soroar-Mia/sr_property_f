document.getElementById('addPropertyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const propertyName = document.getElementById('propertyName').value;
    const propertyType = document.getElementById('propertyType').value;
    const purpose = document.getElementById('purpose').value;
    const location = document.getElementById('location').value;
    const city = document.getElementById('city').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const propertyData = {
        property_name: propertyName,
        property_type: [propertyType],
        purpose: [purpose],
        location: location,
        city: city,
        price: price,
        description: description,
        image: image,
    };

    fetch('http://sr-property.onrender.com/property/list/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Property added successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to add property.');
    });
});
