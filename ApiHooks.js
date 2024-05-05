let pizzas = [];
const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// Apache reverseproxy /app osoitteessa ohjaa nodeen.
// Käyttäjän selain yhdistää porttiin 80, joka ohjataan serverillä porttiin 3000.
const baseurl = "http://10.120.32.53/app/api/v1"


const getUser = async (userId) => {
  const userData = await fetchData(`${baseurl}/users/${userId}`);
  return userData;
};

const postUser = async (user) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  const response = await fetchData(
    "Osoite, johon käyttäjät lähetetään",
    options,
  );
  return response;
};

const getPizza = async (pizzaId) => {
  const pizzaData = await fetchData(`Osoite, josta pizzat haetaan/${pizzaId}`);
  return pizzaData;
};

const postPizza = async (pizza) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pizza),
  };
  const response = await fetchData("Osoite, johon pizzat lähetetään", options);
  return response;
};

export { getUser, postUser, getPizza, postPizza };

getPizzas().then(() => {
  const pizzaGrid = document.createElement("div");
  const menuTitle = document.createElement("h2");
  pizzaGrid.id = "pizza-grid";
  menuTitle.textContent = "MENU";
  menuTitle.classList.add("menu-title");
  menupage.appendChild(menuTitle);
  menupage.appendChild(pizzaGrid);

  // Create element for each pizza in list
  pizzas.forEach((pizza) => {
    const pizzaBit = document.createElement("a");
    const pizzaImg = document.createElement("img");
    const pizzaInfo = document.createElement("div");
    const pizzaName = document.createElement("h3");
    const pizzaPrice = document.createElement("p");
    pizzaInfo.classList.add("pizza-info");
    pizzaImg.src = pizza.image;
    pizzaImg.alt = pizza.name;
    pizzaName.textContent = pizza.name;
    pizzaPrice.textContent = `£${pizza.price}`;
    pizzaBit.appendChild(pizzaImg);
    pizzaBit.appendChild(pizzaInfo);
    pizzaInfo.appendChild(pizzaName);
    pizzaInfo.appendChild(pizzaPrice);
    pizzaBit.href = `#`;
    pizzaBit.classList.add("pizza");
    pizzaGrid.appendChild(pizzaBit);
    pizzaBit.addEventListener("click", () => {
      console.log("Added pizza to basket:", pizza.name);
    });
  });
});
