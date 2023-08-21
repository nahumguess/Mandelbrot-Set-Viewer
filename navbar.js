// Changes the appearance of the navbar based on whether the user is logged in or not.


function updateNavbar() {
  // Get the login and logout links from the navbar.
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");

  // If the user is logged in, hide the login link and show the logout link.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginLink.style.display = "none";
      logoutLink.style.display = "inline";
    }
    // If the user is not logged in, hide the logout link and show the login link. 
    else {
      loginLink.style.display = "inline";
      logoutLink.style.display = "none";
    }
  });
}

// Logs the user out of the app.
function logoutUser() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("User signed out.");
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
}

// Updates the navbar when the page loads.
updateNavbar();
