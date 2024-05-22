const handlelogOut = () => {
  fetch("https://sr-property.onrender.com/property/logout/", {
    method: "POST",
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Logout successful:', data);
  
  })
  .catch(error => {
    console.error('There was a problem with the logout request:', error);
  });
};