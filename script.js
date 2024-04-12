// Benefits section 

var sections = document.querySelectorAll(".section_faq_dropdown_container");
sections.forEach(function(section) {
  var button = section.querySelector(".section_faq_dropdown_button");
  var content = section.querySelector(".section_faq_dropdown_collapsible_container");
  var icon1 = section.querySelector(".section_faq_dropdown_icon");
  var icon2 = section.querySelector(".section_faq_dropdown_collapsible_icon");
  var paragraph = section.querySelector(".section_faq_dropdown_p");
  var collapsible_paragraph = section.querySelector(".section_faq_dropdown_collapsible_p");

  button.addEventListener("click", function() {
    document.querySelectorAll(".section_faq_dropdown_container").forEach(function(otherSection) {
      if (otherSection !== section) {
        console.log(otherSection.classList)
        otherSection.classList.toggle("active");
        otherSection.querySelector(".section_faq_dropdown_collapsible_p").style.maxHeight = "0px";
        otherSection.querySelector(".section_faq_dropdown_icon").style.display = "block";
        otherSection.querySelector(".section_faq_dropdown_collapsible_icon").style.display = "none";
        otherSection.style.backgroundColor = "";
        otherSection.querySelector(".section_faq_dropdown_p").style.color = "";
      }
    });

    section.classList.toggle("active");
    collapsible_paragraph.style.maxHeight = (collapsible_paragraph.style.maxHeight === "400px") ? "0px" : "400px";
    icon1.style.display = (icon1.style.display === "none") ? "block" : "none";
    icon2.style.display = (icon2.style.display === "block") ? "none" : "block";
    section.style.backgroundColor = (section.style.backgroundColor === "rgb(23, 23, 23)") ? "" : "rgb(23, 23, 23)";
    paragraph.style.color = (paragraph.style.color === "white") ? "" : "white";
  });
});

function simulateButtonClicks() {
  var buttons = document.querySelectorAll(".section_faq_dropdown_button");
  buttons[0].click();
}

window.addEventListener("load", simulateButtonClicks);




// Hamburger menu
const hamburgerButton = document.querySelector('.section_subscriptions_hamburger_button');
const hamburgerMenu = document.querySelector('.hamburger_menu');
const closeButton = document.querySelector('.section_subscriptions_hamburger_image2');

function showMenu() {
  hamburgerMenu.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function hideMenu() {
  hamburgerMenu.style.display = 'none';
  document.body.style.overflow = 'auto'; 
}

hamburgerButton.addEventListener('click', showMenu);

closeButton.addEventListener('click', hideMenu);

const menuLinks = document.querySelectorAll('.hamburger_menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1);

    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
    });
    hideMenu();
  });
});











// Select the button and the menu element
const integrityButton = document.querySelector('.integrity_policy_button');
const integrityMenu = document.querySelector('.integrity_policy');
const integrityCloseButton = document.querySelector('.integrity_policy_image2');

// Select the button and the menu element
const termsAndServicesButton = document.querySelector('.terms_and_services_button');
const termsAndServicesMenu = document.querySelector('.terms_and_services');
const termsAndServicesCloseButton = document.querySelector('.terms_and_services_image2');


// Function to show the menu and disable scrolling
function integrityShowMenu() {
  var integrityComputedStyle = window.getComputedStyle(integrityMenu).display;
  var termsAndServicesComputedStyle = window.getComputedStyle(termsAndServicesMenu).display;
  if (integrityComputedStyle === 'none' && termsAndServicesComputedStyle === 'none') { 
    integrityMenu.style.display = 'block';
    //document.body.style.overflow = 'hidden'; // Disable scrolling
    document.body.classList.toggle('blurred');
  }

  if (integrityComputedStyle === 'block') {
    integrityHideMenu()
  }
}

// Function to hide the menu and enable scrolling
function integrityHideMenu() {
  integrityMenu.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling
  document.body.classList.toggle('blurred');
}

// Add a click event listener to the button to show the menu
integrityButton.addEventListener('click', integrityShowMenu);

// Add a click event listener to the close button to hide the menu
integrityCloseButton.addEventListener('click', integrityHideMenu);











// Function to show the menu and disable scrolling
function termsAndServicesShowMenu() {
  var integrityComputedStyle = window.getComputedStyle(integrityMenu).display;
  var termsAndServicesComputedStyle = window.getComputedStyle(termsAndServicesMenu).display;
  if (integrityComputedStyle === 'none' && termsAndServicesComputedStyle === 'none') { 
    termsAndServicesMenu.style.display = 'block';
    //document.body.style.overflow = 'hidden'; // Disable scrolling
    document.body.classList.toggle('blurred');
  }

  if (termsAndServicesComputedStyle === 'block') {
    termsAndServicesHideMenu()
  }
}

// Function to hide the menu and enable scrolling
function termsAndServicesHideMenu() {
  termsAndServicesMenu.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling
  document.body.classList.toggle('blurred');
}

// Add a click event listener to the button to show the menu
termsAndServicesButton.addEventListener('click', termsAndServicesShowMenu);

// Add a click event listener to the close button to hide the menu
termsAndServicesCloseButton.addEventListener('click', termsAndServicesHideMenu);
