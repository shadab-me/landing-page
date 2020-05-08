/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const navBar = document.getElementById('navbar__list');
 for(i = 1; i <=3; i++){
    const listItem = document.createElement('li');
    const listLink = document.createElement('a');
    listLink.classList.add("menu__link");
    listLink.innerText = "section" +" "+ i;
    listItem.appendChild(listLink);
    navBar.appendChild(listItem);
}


const ToUp = document.querySelector('#toggle');
ToUp.addEventListener('click', function(){
   console.log(scrollTo);
   
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
      });
})

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


