// Let's put code that we want to run on start here:

//CONSTS
// Pages and links in same order, used in event listeners
const homepage = document.getElementById('home-page');
const menupage = document.getElementById('menu-page');
const pizzapage = document.getElementById('create-page');
const sitepages = [homepage, menupage, pizzapage];
const homepageLink = document.getElementById('nav_homelink');
const menupageLink = document.getElementById('nav_menulink');
const pizzapageLink = document.getElementById('nav_pizzalink');
const pageLinks = [homepageLink, menupageLink, pizzapageLink];


// Populate pizza grid:
// GET PIZZAS FROM DATABASE
// placeholder: name, ingredients, price, image

const pizzas = [
    { name: 'Margherita', ingredients: 'Tomato, mozzarella, basil', price: 5.99, image: '/img/64cat.jpg' },
    { name: 'Pepperoni', ingredients: 'Tomato, mozzarella, pepperoni', price: 6.99, image: '/img/64cat.jpg' },
    { name: 'Hawaiian', ingredients: 'Tomato, mozzarella, ham, pineapple', price: 7.99, image: '/img/64cat.jpg' },
    { name: 'Vegetarian', ingredients: 'Tomato, mozzarella, peppers, mushrooms, olives', price: 6.99, image: '/img/64cat.jpg' },
    { name: 'Meat Feast', ingredients: 'Tomato, mozzarella, pepperoni, ham, bacon, chicken', price: 8.99, image: '/img/64cat.jpg' },
    { name: 'Vegan', ingredients: 'Tomato, vegan cheese, peppers, mushrooms, olives', price: 7.99, image: '/img/64cat.jpg' },
    { name: 'BBQ Chicken', ingredients: 'Tomato, mozzarella, chicken, BBQ sauce', price: 7.99, image: '/img/64cat.jpg' },
];

const pizzaGrid = document.createElement('div');
pizzaGrid.id = 'pizza-grid';
menupage.appendChild(pizzaGrid);

// Create element for each pizza in list
pizzas.forEach(pizza => {
    const pizzaBit = document.createElement('a');
    const pizzaImg = document.createElement('img');
    const pizzaName = document.createElement('h3');
    const pizzaPrice = document.createElement('p');
    pizzaImg.src = pizza.image;
    pizzaImg.alt = pizza.name;
    pizzaName.textContent = pizza.name;
    pizzaPrice.textContent = `£${pizza.price}`;
    pizzaBit.appendChild(pizzaImg);
    pizzaBit.appendChild(pizzaName);
    pizzaBit.appendChild(pizzaPrice);
    pizzaBit.href = `#`;
    pizzaBit.classList.add('pizza');
    pizzaGrid.appendChild(pizzaBit);
    // SCRIPT THAT RUNS WHEN PIZZA IS CLICKED ---- ABDU!!!!!
    pizzaBit.addEventListener('click', () => {
        // ADD PIZZA TO BASKET
        console.log('Added pizza to basket:', pizza.name);
    });
});


// Navbar button functions
for(let i = 0; i < sitepages.length; i++) {
    pageLinks[i].addEventListener('click', () => {
        sitepages.forEach(page => {
            page.style.display = 'none';
        });
        sitepages[i].style.display = 'flex';
        pageLinks.forEach(link => {
            link.style.color = 'var(--text-color)';
            link.style.textDecoration = 'none';
        });
        pageLinks[i].style.color = 'var(--secondary-color)';
        pageLinks[i].style.textDecoration = 'underline';
    });
}

// Reset page to Home on load.
sitepages.forEach(page => {
    page.style.display = 'none';
});
homepage.style.display = 'flex';

// User dropdown menu
document.querySelector('.user-info').addEventListener('click', () => {
  const dropdownMenu = document.querySelector('#dropdown-menu');
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'flex';
  } else {
    dropdownMenu.style.display = 'none';
  }
});


// Home page slideshow
let slideIndex = 1;
let timeoutId;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function stopAutoSlide() {
  clearInterval(timeoutId);
  timeoutId = null;
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sliderFade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  else if (n < 1) {slideIndex = slides.length}
  else {slideIndex = n}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function startAutoSlide() {
  timeoutId = setInterval(function() { plusSlides(1); }, 5000);
}

showSlides(slideIndex);
startAutoSlide();
