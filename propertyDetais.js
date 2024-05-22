const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("propertyId");
  fetch(`https://sr-property.onrender.com/property/list/${param}`)
    .then((res) => res.json())
    .then((data) => displayPropertyDetails(data));
};


const displayPropertyDetails = (property) =>{
    const parent = document.getElementById("pro-details");
    const div = document.createElement("div");
    div.classList.add("doc-details-container");
    div.innerHTML = `
              <h5>Purpose: ${property?.purpose[0]} </h5>
              <h5>Price: ${property?.price} BDT</h5>
              <h5>Property Type: ${property?.property_type[0]}</h5>
              <h5>City: ${property?.city}</h5>
              <img class="pro-img" src="${property.image}" alt="" />
                <p>City:${property.id}</p>
              <h5>Location: ${property?.location}</h5>
              <h5>Property Name: ${property?.property_name}</h5>            
              <p>
              ${property?.description}
              </p>
              <h5>Call: +880 1933 705 154</h5>
              <h5>Email: www.srproperty@gmail.com</h5>
        `;

    parent.appendChild(div);
};


getparams();
