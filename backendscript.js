
const IPaddress = "https://10.120.32.53/app/api/v1"

const getPizzasDefault = async () => {
    const response = await fetch(`${IPaddress}/pizzas`);
    const pizzas = await response.json();
    return pizzas;
};

const getPizzasByUser = async (user) => {
    const response = await fetch(`${IPaddress}/pizzas/${user}`);
    const pizzas = await response.json();
    return pizzas;
}

const getUsers = async () => {
    const response = await fetch(`${IPaddress}/users`);
    const users = await response.json();
    return users;
}

const postUser = async (user) => {
    const response = await fetch(`${IPaddress}/users`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return response;
}

const loginUser = async (user) => {
    const response = await fetch(`${IPaddress}/auth/login`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return response;
}

const getToppings = async () => {
    const response = await fetch(`${IPaddress}/misc/toppings`);
    const toppings = await response.json();
    return toppings;
}
