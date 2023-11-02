var sections = document.querySelectorAll(".section_faq_dropdown_container");
sections.forEach(function(section) {
  var button = section.querySelector(".section_faq_dropdown_button");
  var content = section.querySelector(".section_faq_dropdown_collapsible_container");
  var icon1 = section.querySelector(".section_faq_dropdown_icon");
  var icon2 = section.querySelector(".section_faq_dropdown_collapsible_icon");

  button.addEventListener("click", function() {
    section.classList.toggle("active");
    content.style.display = (content.style.display === "block") ? "none" : "block";
    icon1.style.display = (content.style.display === "block") ? "none" : "block";
    icon2.style.display = (content.style.display === "block") ? "block" : "none";
  });
});

const title = document.getElementById("section_ourservices_title_h3");
const description = document.getElementById('service-description');
container1 = document.getElementById("section_ourservices_container_1");
container2 = document.getElementById("section_ourservices_container_2");
container3 = document.getElementById("section_ourservices_container_3");
container4 = document.getElementById("section_ourservices_container_4");

document.getElementById('section_ourservices_button1').onclick = function() {
    title.textContent = "Seamless integration"
    description.innerHTML = "Our AI chatbot for customer service integrates seamlessly with your existing website platform, making implementation effortless. <br><br>Say goodbye to complex installation processes and long deployment timelines. With our chatbot, you can get a powerful customer service solution up and running in no time. <br><br>Plus, our integration features are designed to work harmoniously with popular website platforms, ensuring a hassle-free experience for both you and your customers.";
    container1.style.backgroundColor = "rgb(56, 27, 117)";
    container2.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
    container3.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
    container4.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
};

document.getElementById('section_ourservices_button2').onclick = function() {
  title.textContent = "Branding"
  description.innerHTML = "There is no one-size-fits-all solution, and we understand that. That's why our customer service chatbot offers unparalleled customization options. <br><br>Customize its look, personality and tone to match your company's unique identity. Whether you want your chatbot to be friendly and informal or formal and professional, you have full control. <br><br>You can even customize the chatbot's user profile and color scheme to blend in with your website's design. With our chatbot, you don't just get an AI solution, you get a brand ambassador who speaks your language.";
  container1.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container2.style.backgroundColor = "rgb(56, 27, 117)";
  container3.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container4.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
};

document.getElementById('section_ourservices_button3').onclick = function() {
  title.textContent = "Language support"
  description.innerHTML = "In today's global market, language should never be a barrier to customer service. Our chatbot overcomes language barriers by offering customer service in multiple languages. <br><br>Whether your customers speak English, Swedish, Spanish, French or any other language, our chatbot can interact with them effectively. This is a powerful tool to expand your customer base and cater to a diverse audience. <br><br>In addition, the chatbot ensures that your customers feel heard and understood, no matter where they come from, which ultimately leads to increased customer satisfaction and loyalty.";
  container1.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container2.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container3.style.backgroundColor = "rgb(56, 27, 117)";
  container4.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
};

document.getElementById('section_ourservices_button4').onclick = function() {
  title.textContent = "Scaling"
  description.innerHTML = "As your business grows, so does the need for customer service. That's where our chatbot really shines. <br><br>It is designed to be scalable, meaning it can handle an ever-growing customer base without compromising on performance. Whether you have a small online store or a large trading empire, our chatbot will adapt to your needs. <br><br>You don't have to worry about outgrowing your customer service solution or experiencing downtime due to overload. With our chatbot, you get a reliable and scalable support system that grows with your success.";
  container1.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container2.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container3.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container4.style.backgroundColor = "rgb(56, 27, 117)";
};



// Select the button and the menu element
const hamburgerButton = document.querySelector('.section_subscriptions_hamburger_button');
const hamburgerMenu = document.querySelector('.hamburger_menu');
const closeButton = document.querySelector('.section_subscriptions_hamburger_image2');

// Function to show the menu and disable scrolling
function showMenu() {
  hamburgerMenu.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Disable scrolling
}

// Function to hide the menu and enable scrolling
function hideMenu() {
  hamburgerMenu.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling
}

// Add a click event listener to the button to show the menu
hamburgerButton.addEventListener('click', showMenu);

// Add a click event listener to the close button to hide the menu
closeButton.addEventListener('click', hideMenu);

// Handle link clicks within the menu
const menuLinks = document.querySelectorAll('.hamburger_menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior to allow smooth scrolling
    event.preventDefault();

    // Get the target section ID from the link's href
    const targetId = link.getAttribute('href').substring(1);

    // Scroll to the target section smoothly
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
    });

    // Close the menu
    hideMenu();
  });
});







let currentSlide = 1;
const slide_svg = document.getElementById("slideshow_slide_svg");
const slide_h4 = document.getElementById("slideshow_slide_h4");
const slide_p = document.getElementById("slideshow_slide_p");

function showSlide(n) {
    if (n < 1) {
        currentSlide = 4;
    } else if (n > 4) {
        currentSlide = 1;
    }

    // Update the slide content based on the current slide number
    switch (currentSlide) {
        case 1:
            slide_svg.innerHTML = "<path fill-rule='evenodd' d='M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z' clip-rule='evenodd'></path>";
            slide_h4.innerText = "Reduce costs";
            slide_p.innerText = "Eliminate costs by entrusting low-yielding tasks to an AI chatbot.";
            break;
        case 2:
          slide_svg.innerHTML = "<path fill-rule='evenodd' d='M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z' clip-rule='evenodd' fill='#FFFFFF'></path>";
          slide_h4.innerText = "Increase velocity";
          slide_p.innerText = "The chatbot gives instant answers. This engages the customer and increases the likelihood of purchase.";
          break;
        case 3:
          slide_svg.innerHTML = "<path d='M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z' fill='#FFFFFF'></path><path fill-rule='evenodd' d='M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z' clip-rule='evenodd' fill='#FFFFFF'></path>";
          slide_h4.innerText = "Increase efficiency";
          slide_p.innerText = "Give your team the tools they need to multiply their results.";
          break;
        case 4:
          slide_svg.innerHTML = "<path fill-rule='evenodd' d='M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z' clip-rule='evenodd' fill='#FFFFFF'></path>";
          slide_h4.innerText = "Quality";
          slide_p.innerText = "Create consistent quality by eliminating human errors and variations.";
          break;
    }

    document.getElementById("slideshow_number_1").innerText = currentSlide + " ";
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

showSlide(currentSlide);

var sections = document.querySelectorAll(".section_smallerservices_dropdown_container");
sections.forEach(function(section) {
  var button = section.querySelector(".section_smallerservices_dropdown_button");
  var content = section.querySelector(".section_smallerservices_dropdown_collapsible_container");
  var icon1 = section.querySelector(".section_smallerservices_dropdown_icon");
  var icon2 = section.querySelector(".section_smallerservices_dropdown_collapsible_icon");

  button.addEventListener("click", function() {
    section.classList.toggle("active");
    content.style.display = (content.style.display === "block") ? "none" : "block";
    icon1.style.display = (content.style.display === "block") ? "none" : "block";
    icon2.style.display = (content.style.display === "block") ? "block" : "none";
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
