// Sample menu data
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// Function to display menu items by category
function displayMenuItems(menu) {
  const menuContainer = document.getElementById("menu");

  for (const category in menu) {
    if (menu.hasOwnProperty(category)) {
      const categoryTitle = document.createElement("h3");
      categoryTitle.textContent = category;
      menuContainer.appendChild(categoryTitle);

      const itemList = document.createElement("ul");
      menuContainer.appendChild(itemList);

      menu[category].forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;

        listItem.addEventListener("click", () => addToOrder(item));

        itemList.appendChild(listItem);
      });
    }
  }
}

// Callback function to add an item.
function addToOrder(itemName) {
  const orderItems = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");

  const orderItem = document.createElement("li");
  orderItem.textContent = itemName;
  orderItems.appendChild(orderItem);

  const itemPrice = 50; // Assuming a fixed price.

  const currentTotal = parseFloat(orderTotalElement.textContent);
  const newTotal = currentTotal + itemPrice;
  orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to set up the menu system
function initMenuSystem(menu) {
  displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
