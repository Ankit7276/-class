document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.querySelector(".search-bar input");
    const loginBtn = document.getElementById("loginBtn");

    // Search button click event
    searchBtn.addEventListener("click", function () {
        const searchTerm = searchInput.value;
        alert(`Searching for: ${searchTerm}`);
        // Add your search functionality here
    });

    // Login button click event
    loginBtn.addEventListener("click", function () {
        alert("Login button clicked");
        // Add your login code here
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can add your login validation logic here
        if (username === "yourusername" && password === "yourpassword") {
            alert("Login successful!");
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });
});
