// Let's put code that we want to run on start here:

// Populate pizza grid:
// GET PIZZAS FROM DATABASE
// placeholder: name, ingredients, price, image
const pizzas = [
    { name: 'Margherita', ingredients: 'Tomato, mozzarella, basil', price: 5.99, image: '64cat.jpg' },
    { name: 'Pepperoni', ingredients: 'Tomato, mozzarella, pepperoni', price: 6.99, image: '64cat.jpg' },
    { name: 'Hawaiian', ingredients: 'Tomato, mozzarella, ham, pineapple', price: 7.99, image: '64cat.jpg' },
    { name: 'Vegetarian', ingredients: 'Tomato, mozzarella, peppers, mushrooms, olives', price: 6.99, image: '64cat.jpg' },
    { name: 'Meat Feast', ingredients: 'Tomato, mozzarella, pepperoni, ham, bacon, chicken', price: 8.99, image: '64cat.jpg' },
    { name: 'Vegan', ingredients: 'Tomato, vegan cheese, peppers, mushrooms, olives', price: 7.99, image: '64cat.jpg' },
    { name: 'BBQ Chicken', ingredients: 'Tomato, mozzarella, chicken, BBQ sauce', price: 7.99, image: '64cat.jpg' },
];
const pizzaGrid = document.getElementById('pizza-grid');
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
    pizzaBit.addEventListener('click', () => {
        // ADD PIZZA TO BASKET
        console.log('Added pizza to basket:', pizza.name);
    });
});