

const loadPropertys = (search) => {
  document.getElementById("propertys").innerHTML = "";
    document.getElementById("spinner").style.display = "block";
 fetch(
    `https://sr-property.onrender.com/property/list/?search=${search ? search : ""}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.results.length > 0) {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("nodata").style.display = "none";
        displyPropertys(data?.results);
      } else {
        document.getElementById("doctors").innerHTML = "";
        document.getElementById("spinner").style.display = "none";
        document.getElementById("nodata").style.display = "block";
      }
    });
};

const displyPropertys = (propertys) => {
  console.log("ffff");
  propertys?.forEach((property) => {
    const parent = document.getElementById("propertys");
    const div = document.createElement("div");
    div.classList.add("doc-card");
    div.innerHTML = `
              <h5>Purpose: ${property?.purpose[0]}</h5>
              <p>Property Type: ${property?.property_type[0]}</p>
              <img class="doc-img" src="${property.image}" alt="" />
              <p>City: ${property?.city}</p>
              <p>Location: ${property?.location}</p>
              <p>Property Name: ${property?.property_name}</p>
              <button type="button" class="btn btn-outline-secondary "><a target="_blank" href="propertyDetails.html?propertyId=${property.id}">Details</a></button>
        `;

    parent.appendChild(div);
  });
};

const loadPurpose = () => {
  fetch("https://sr-property.onrender.com/property/purpose/")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const parent = document.getElementById("drop-deg");
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerHTML = `
        <li onclick="loadPropertys('${item.name}')"> ${item.name}</li>
          `;
        parent.appendChild(li);
      });
    });
};

const loadPropertyType = () => {
  fetch("https://sr-property.onrender.com/property/propertyType/")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const parent = document.getElementById("drop-spe");
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerHTML = `
        <li onclick="loadPropertys('${item.name}')"> ${item.name}</li>
          `;
        parent.appendChild(li);
      });
    });
};

const handleSearch = () => {
  const value = document.getElementById("search").value;
  loadPropertys(value);
};







const loadServices = () => {
  fetch("https://sr-property.onrender.com/services/")
    .then((res) => res.json())
    .then((data) => displayService(data))
    .catch((err) => console.log(err));
};

const displayService = (services) => {
    // console.log(services);
  services.forEach((service) => {
    const parent = document.getElementById("service-container");
    const li = document.createElement("li");
    li.innerHTML = `
                <div class="col">
                    <div class=" card-log">
                        <img src="${service.image}" class="card-img-top card-img-logo" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${service.name}</h5>
                            <p class="card-text">${service.description}</p>
                        </div>
                    </div>
                </div>
      `;
    parent.appendChild(li);
  });
};





const loadReview = () => {
  fetch("https://sr-property.onrender.com/property/reviews/")
    .then((res) => res.json())
    .then((data) => displayReview(data));
};

const displayReview = (reviews) => {
  reviews.forEach((review) => {
    const parent = document.getElementById("review-container");
    const div = document.createElement("div");
    div.classList.add("review-card");
    div.innerHTML = `
        <img src="${review.image}" alt="" />
            <h4>${review.name}</h4>
            <p>
             ${review.description.slice(0, 100)}
            </p>
        `;
    parent.appendChild(div);
  });
};


loadReview();
loadServices();

loadPurpose()
loadPropertyType()
handleSearch()

