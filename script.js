// Handle mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

// Close mobile menu when a link is clicked
const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");
mobileMenuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Contact form function
function contact() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    messageInput.value === ""
  ) {
    alert("Please fill in all fields before sending the message.");
  } else {
    alert("Your message has been sent! Thank you for contacting us.");
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
}

// Scroll to top button
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 2000px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
