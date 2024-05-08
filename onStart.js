// Let's put code that we want to run on start here:

//CONSTS
// Pages and links in same order, used in event listeners
const homepage = document.getElementById("home-page");
const menupage = document.getElementById("menu-page");
const pizzapage = document.getElementById("create-page");
const sitepages = [homepage, menupage, pizzapage];
const homepageLink = document.getElementById("nav_homelink");
const menupageLink = document.getElementById("nav_menulink");
const pizzapageLink = document.getElementById("nav_pizzalink");
const pageLinks = [homepageLink, menupageLink, pizzapageLink];

// Set the href attributes of the page links to the corresponding hashes
homepageLink.href = "#home";
menupageLink.href = "#menu";
pizzapageLink.href = "#create";

// Function to handle hash changes
function handleHashChange() {
  const hash = window.location.hash || "#home";

  // Hide all pages and remove the 'active' class from all links
  sitepages.forEach((page) => (page.style.display = "none"));
  pageLinks.forEach((link) => link.classList.remove("active"));

  // Show the correct page and add the 'active' class to the correct link based on the hash
  switch (hash) {
    case "#home":
      homepage.style.display = "flex";
      homepageLink.classList.add("active");
      break;
    case "#menu":
      menupage.style.display = "flex";
      menupageLink.classList.add("active");
      break;
    case "#create":
      pizzapage.style.display = "flex";
      pizzapageLink.classList.add("active");
      break;
    default:
      homepage.style.display = "flex";
      homepageLink.classList.add("active");
      break;
  }
}

// Event listener for hash changes
window.addEventListener("hashchange", handleHashChange);

// Initial hash handling
handleHashChange();

// Reset page to Home on load.
/*
sitepages.forEach(page => {
  page.style.display = 'none';
});
homepage.style.display = 'flex';
*/

// Populate pizza grid:
// GET PIZZAS FROM DATABASE
// placeholder: name, ingredients, price, image

const pizzas = [
  {
    name: "Margherita",
    ingredients: "Tomato, mozzarella, basil",
    price: 5.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Pepperoni",
    ingredients: "Tomato, mozzarella, pepperoni",
    price: 6.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Hawaiian",
    ingredients: "Tomato, mozzarella, ham, pineapple",
    price: 7.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Vegetarian",
    ingredients: "Tomato, mozzarella, peppers, mushrooms, olives",
    price: 6.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Meat Feast",
    ingredients: "Tomato, mozzarella, pepperoni, ham, bacon, chicken",
    price: 8.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Vegan",
    ingredients: "Tomato, vegan cheese, peppers, mushrooms, olives",
    price: 7.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "BBQ Chicken",
    ingredients: "Tomato, mozzarella, chicken, BBQ sauce",
    price: 7.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Seafood",
    ingredients: "Tomato, mozzarella, prawns, tuna, anchovies",
    price: 8.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Spicy Beef",
    ingredients: "Tomato, mozzarella, beef, jalapenos, chilli",
    price: 7.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Four Cheese",
    ingredients: "Tomato, mozzarella, cheddar, parmesan, gorgonzola",
    price: 7.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Mushroom",
    ingredients: "Tomato, mozzarella, mushrooms, garlic, parsley",
    price: 6.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
  {
    name: "Chicken & Sweetcorn",
    ingredients: "Tomato, mozzarella, chicken, sweetcorn",
    price: 7.99,
    image: "/img/pizzas/placeholder_pizza.jpg",
  },
];

// Create menu title
const menuTitle = document.createElement('div');
const menuTitleBox = document.createElement('div');
const menuTitleText = document.createElement('h2');

menuTitle.classList.add('menu-title');
menuTitleBox.classList.add('menu-title-box');
menuTitleText.classList.add('menu-title-text');
menuTitleText.textContent = 'MENU';

menuTitle.appendChild(menuTitleBox);
menuTitleBox.appendChild(menuTitleText);
menupage.appendChild(menuTitle);

// Create pizza grid
const pizzaGrid = document.createElement('div');
pizzaGrid.id = 'pizza-grid';
menupage.appendChild(pizzaGrid);




// Create element for each pizza in list
const dialog = document.createElement('div');
dialog.classList.add('dialog');
document.body.appendChild(dialog);

pizzas.forEach(pizza => {
    const pizzaBit = document.createElement('a');
    const pizzaImg = document.createElement('img');
    const pizzaInfo = document.createElement('div');
    const pizzaName = document.createElement('h3');
    const pizzaPrice = document.createElement('p');
    const pizzaText = document.createElement('p');
    pizzaText.textContent = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    pizzaInfo.classList.add('pizza-info');
    pizzaImg.src = pizza.image;
    pizzaImg.alt = pizza.name;
    pizzaName.textContent = pizza.name;
    pizzaPrice.textContent = `£${pizza.price}`;
    pizzaBit.appendChild(pizzaImg);
    pizzaBit.appendChild(pizzaInfo);
    pizzaInfo.appendChild(pizzaName);
    pizzaInfo.appendChild(pizzaPrice);
    pizzaInfo.appendChild(pizzaText);
    pizzaBit.classList.add('pizza');
    pizzaGrid.appendChild(pizzaBit);
    // SCRIPT THAT RUNS WHEN PIZZA IS CLICKED ---- ABDU!!!!!
    pizzaBit.addEventListener('click', () => {
        // ADD PIZZA TO BASKET
        console.log('Added pizza to basket:', pizza.name);

        pizzas.forEach(pizza => {
          // ... existing code ...

          pizzaBit.addEventListener('click', (event) => {
              event.preventDefault(); // Prevent the default action
              event.stopPropagation(); // Stop the event from propagating to the document

              // Fill the dialog with pizza info
              dialog.innerHTML = `
                <img src="${pizza.image}" alt="${pizza.name}">
                <div class="dialog-text">
                  <h3>${pizza.name}</h3>
                  <p>£${pizza.price}</p>
                  <p>${pizzaText.textContent}</p>
                  <button class="shopping-cart"><i class='bx bx-cart-alt'></i></button>
                  <button class="dialog-button" onclick="dialog.style.display='none'">Close</button>
                </div>
              `;

              // Show the dialog
              dialog.style.display = 'flex';
          });
      });

      // Close the dialog when clicking outside of it
      document.addEventListener('click', (event) => {
          if (!dialog.contains(event.target) && dialog.style.display === 'flex') {
              dialog.style.display = 'none';
          }
      });

        dialog.innerHTML = `
            <img src="${pizza.image}" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p>£${pizza.price}</p>
            <p>${pizzaText.textContent}</p>
            <button onclick="dialog.style.display='none'">Close</button>
        `;

        // Show the dialog
        dialog.style.display = 'block';
    });
});

// Close the dialog when clicking outside of it
document.addEventListener('click', (event) => {
  if (!dialog.contains(event.target) && dialog.style.display === 'block') {
      dialog.style.display = 'none';
  }
});

// Navbar button functions
for (let i = 0; i < sitepages.length; i++) {
  pageLinks[i].addEventListener("click", () => {
    sitepages.forEach((page) => {
      page.style.display = "none";
    });
    sitepages[i].style.display = "flex";
    pageLinks.forEach((link) => {
      link.style.color = "var(--text-color)";
      link.style.textDecoration = "none";
    });
    pageLinks[i].style.color = "var(--secondary-color)";
    pageLinks[i].style.textDecoration = "underline";
  });
}

// User dropdown menu
document.querySelector(".user-info").addEventListener("click", () => {
  const dropdownMenu = document.querySelector("#dropdown-menu");
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "flex";
  } else {
    dropdownMenu.style.display = "none";
  }
});

// Home page slideshow
let slideIndex = 1;
let timeoutId;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function stopAutoSlide() {
  clearInterval(timeoutId);
  timeoutId = null;
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sliderFade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function startAutoSlide() {
  timeoutId = setInterval(function () {
    plusSlides(1);
  }, 5000);
}

showSlides(slideIndex);
startAutoSlide();
