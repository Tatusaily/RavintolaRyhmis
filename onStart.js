// Let's put code that we want to run on start here:

// Populate pizza grid:
// GET PIZZAS FROM DATABASE
// placeholder: name, ingredients, price, image

const pizzas = [
  {
    name: "Margherita",
    ingredients: "Tomato, mozzarella, basil",
    price: 5.99,
    image: "/img/64cat.jpg",
  },
  {
    name: "Pepperoni",
    ingredients: "Tomato, mozzarella, pepperoni",
    price: 6.99,
    image: "/img/64cat.jpg",
  },
  {
    name: "Hawaiian",
    ingredients: "Tomato, mozzarella, ham, pineapple",
    price: 7.99,
    image: "/img/64cat.jpg",
  },
  {
    name: "Vegetarian",
    ingredients: "Tomato, mozzarella, peppers, mushrooms, olives",
    price: 6.99,
    image: "/img/64cat.jpg",
  },
  {
    name: "Meat Feast",
    ingredients: "Tomato, mozzarella, pepperoni, ham, bacon, chicken",
    price: 8.99,
    image: "/img/64cat.jpg",
  },
  {
    name: "Vegan",
    ingredients: "Tomato, vegan cheese, peppers, mushrooms, olives",
    price: 7.99,
    image: "/img/64cat.jpg",
  },
  {
    name: "BBQ Chicken",
    ingredients: "Tomato, mozzarella, chicken, BBQ sauce",
    price: 7.99,
    image: "/img/64cat.jpg",
  },
];

const pizzaGrid = document.createElement("div");
pizzaGrid.id = "pizza-grid";
document.getElementById("menu-page").appendChild(pizzaGrid);

// Create element for each pizza in list
pizzas.forEach((pizza) => {
  const pizzaBit = document.createElement("a");
  const pizzaImg = document.createElement("img");
  const pizzaName = document.createElement("h3");
  const pizzaPrice = document.createElement("p");
  pizzaImg.src = pizza.image;
  pizzaImg.alt = pizza.name;
  pizzaName.textContent = pizza.name;
  pizzaPrice.textContent = `£${pizza.price}`;
  pizzaBit.appendChild(pizzaImg);
  pizzaBit.appendChild(pizzaName);
  pizzaBit.appendChild(pizzaPrice);
  pizzaBit.href = `#`;
  pizzaBit.classList.add("pizza");
  pizzaGrid.appendChild(pizzaBit);
  // SCRIPT THAT RUNS WHEN PIZZA IS CLICKED ---- ABDU!!!!!
  pizzaBit.addEventListener("click", () => {
    // ADD PIZZA TO BASKET
    console.log("Added pizza to basket:", pizza.name);
  });
});

const homepage = document.getElementById("home-page");
const menupage = document.getElementById("menu-page");
const pizzapage = document.getElementById("create-page");
const sitepages = [homepage, menupage, pizzapage];
const homepageLink = document.getElementById("nav_homelink");
const menupageLink = document.getElementById("nav_menulink");
const pizzapageLink = document.getElementById("nav_pizzalink");
const pageLinks = [homepageLink, menupageLink, pizzapageLink];

// Navbar button functions
document.getElementById("nav_homelink").addEventListener("click", () => {
  sitepages.forEach((page) => {
    page.style.display = "none";
  });
  homepage.style.display = "flex";
  pageLinks.forEach((link) => {
    link.style.color = "var(--text-color)";
    link.style.textDecoration = "none";
  });
  homepageLink.style.color = "var(--secondary-color)";
  homepageLink.style.textDecoration = "underline";
});
document.getElementById("nav_menulink").addEventListener("click", () => {
  sitepages.forEach((page) => {
    page.style.display = "none";
  });
  menupage.style.display = "flex";
  pageLinks.forEach((link) => {
    link.style.color = "var(--text-color)";
    link.style.textDecoration = "none";
  });
  menupageLink.style.color = "var(--secondary-color)";
  menupageLink.style.textDecoration = "underline";
});
document.getElementById("nav_pizzalink").addEventListener("click", () => {
  sitepages.forEach((page) => {
    page.style.display = "none";
  });
  pizzapage.style.display = "flex";
  pageLinks.forEach((link) => {
    link.style.color = "var(--text-color)";
    link.style.textDecoration = "none";
  });
  pizzapageLink.style.color = "var(--secondary-color)";
  pizzapageLink.style.textDecoration = "underline";
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

// When you are about to create your own pizza
document.getElementById("nav_pizzalink").addEventListener("click", function () {
  const container = document.getElementById("toppings-container");
  container.innerHTML = "";

  // Luo pizzan valintanapit
  const sizes = [
    { id: "small", name: "Small" },
    { id: "medium", name: "Medium" },
    { id: "large", name: "Large" },
  ];
  const sizeContainer = document.createElement("div");
  sizes.forEach((size) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = size.id;
    radio.name = "size";
    radio.value = size.id;

    const label = document.createElement("label");
    label.htmlFor = size.id;
    label.textContent = size.name;

    sizeContainer.appendChild(radio);
    sizeContainer.appendChild(label);
  });

  container.appendChild(sizeContainer);

  const toppings = [
    { id: "cheese", name: "Cheese" },
    { id: "kebab", name: "Kebab" },
    { id: "blue_cheese", name: "Blue Cheese" },
    { id: "pepperoni", name: "Pepperoni" },
    { id: "mushrooms", name: "Mushrooms" },
    { id: "green_peppers", name: "Green Peppers" },
    { id: "black_olives", name: "Black Olives" },
    { id: "pineapple", name: "Pineapple" },
    { id: "sausage", name: "Sausage" },
    { id: "onions", name: "Onions" },
    { id: "ham", name: "Ham" },
    { id: "bacon", name: "Bacon" },
    { id: "tomatoes", name: "Tomatoes" },
  ];
  toppings.forEach((topping) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = topping.id;
    checkbox.name = "toppings";
    checkbox.value = topping.id;

    const label = document.createElement("label");
    label.htmlFor = topping.id;
    label.textContent = topping.name;

    const listItem = document.createElement("li");
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    container.appendChild(listItem);
  });

  document.getElementById("create-page").style.display = "block";
});
/** */
