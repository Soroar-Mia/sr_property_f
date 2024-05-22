const loadUserDetails = () => {
  const user_id = localStorage.getItem("user_id");
  fetch(`https://sr-property.onrender.com/users${user_id}`)
    .then((res) => res.json())
    .then((data) => {
      const parent = document.getElementById("");
      const div = document.createElement("user-all");
      div.classList.add("user-all");
      div.innerHTML = `
          <div class="user-img">
          <img src="./Images/man-1.jpg" alt="" />
        </div>
        <div class="user-info">
          <h1></h1>
          <h3></h3>
          <h3></h3>
        </div>
          `;
      parent.appendChild(div);
    });
};
loadUserDetails();
