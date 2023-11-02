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
    title.textContent = "Smidig integration"
    description.innerHTML = "Vår AI-chattbot för kundtjänst integreras sömlöst med er befintliga e-handelsplattform, vilket gör implementeringen mycket enkel. <br><br>Säg adjö till komplexa installationsprocesser och långa utvecklingstider. Med vår chattbot kan du få igång en kraftfull kundtjänstlösning på nolltid. <br><br>Dessutom är våra integrationsfunktioner utformade för att fungera harmoniskt med populära e-handelsplattformar, vilket garanterar en problemfri upplevelse för både dig och dina kunder.";
    container1.style.backgroundColor = "rgb(56, 27, 117)";
    container2.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
    container3.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
    container4.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
};

document.getElementById('section_ourservices_button2').onclick = function() {
  title.textContent = "Branding"
  description.innerHTML = "Det finns inte en lösning som passar alla, och det förstår vi. Det är därför vår chattbot för kundtjänst erbjuder oöverträffade anpassningsalternativ. <br><br>Skräddarsy dess utseende, personlighet och ton för att matcha din e-handelsbutiks unika identitet. Oavsett om du vill att din chattbot ska vara vänlig och informell eller formell och professionell har du full kontroll. <br><br>Du kan till och med anpassa chattbotens användarprofil och färgschema så att de smälter in i din hemsidas design. Med vår chattbot får du inte bara en AI-lösning, du får en varumärkesambassadör som behärskar ditt språk.";
  container1.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container2.style.backgroundColor = "rgb(56, 27, 117)";
  container3.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container4.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
};

document.getElementById('section_ourservices_button3').onclick = function() {
  title.textContent = "Språkstöd"
  description.innerHTML = "På dagens globala marknad ska språk aldrig vara ett hinder för kundtjänst. Vår chattbot övervinner språkbarriärer genom att erbjuda kundtjänst på flera språk. <br><br>Oavsett om dina kunder talar svenska, engelska, spanska, franska eller något annat språk kan vår chattbot interagera med dem på ett effektivt sätt. Detta är ett kraftfullt verktyg för att utöka din kundkrets och tillgodose en mångsidig målgrupp. <br><br>Dessutom ser chattbotten till att dina kunder känner sig hörda och förstådda, oavsett var de kommer ifrån, vilket i slutändan leder till ökad kundnöjdhet och lojalitet.";
  container1.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container2.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
  container3.style.backgroundColor = "rgb(56, 27, 117)";
  container4.style.backgroundColor = "rgba(246, 241, 255, 0.05)";
};

document.getElementById('section_ourservices_button4').onclick = function() {
  title.textContent = "Uppskalning"
  description.innerHTML = "När ditt e-handelsföretag växer ökar också behovet av kundtjänst. Det är där vår chattbot verkligen briljerar. <br><br>Den är utformad för att vara skalbar, vilket innebär att den kan hantera en ständigt växande kundbas utan att kompromissa med prestandan. Oavsett om du har en liten onlinebutik eller ett stort e-handelsimperium kommer vår chattbot att anpassa sig efter dina behov. <br><br>Du behöver inte oroa dig för att växa ur din kundtjänstlösning eller drabbas av driftstopp på grund av överbelastning. Med vår chattbot får du ett pålitligt och skalbart supportsystem som växer i takt med din framgång.";
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
            slide_h4.innerText = "Sänk kostnaderna";
            slide_p.innerText = "Eliminera kostnader genom att överlåta uppgifter med låg avkastning till en AI-chattbot.";
            break;
        case 2:
          slide_svg.innerHTML = "<path fill-rule='evenodd' d='M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z' clip-rule='evenodd' fill='#FFFFFF'></path>";
          slide_h4.innerText = "Öka hastigheten";
          slide_p.innerText = "Chattboten ger omedelbara svar. Detta engagerar kunden och ökar sannolikheten för köp.";
          break;
        case 3:
          slide_svg.innerHTML = "<path d='M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z' fill='#FFFFFF'></path><path fill-rule='evenodd' d='M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z' clip-rule='evenodd' fill='#FFFFFF'></path>";
          slide_h4.innerText = "Öka effektiviteten";
          slide_p.innerText = "Ge ditt team de verktyg de behöver för att mångdubbla sina resultat.";
          break;
        case 4:
          slide_svg.innerHTML = "<path fill-rule='evenodd' d='M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z' clip-rule='evenodd' fill='#FFFFFF'></path>";
          slide_h4.innerText = "Kvalitet";
          slide_p.innerText = "Skapa konsekvent kvalitet genom att eliminera mänskliga fel och variationer.";
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
