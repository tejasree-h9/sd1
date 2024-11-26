const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 19.99 },
];
var cart = [];
function displayCatalog() {
  const catalogSection = document.querySelector(".catalog");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
       <h3>${product.name}</h3>
       <p>$${product.price}</p>
       <button onclick="addToCart(${product.id})">Add to Cart</button>
       `;
    catalogSection.appendChild(productCard);
  });
}
function addToCart(productId) {
  const selectedProduct = products.find((product) => product.id === productId);
  cart.push(selectedProduct);
  updateCartDisplay();
}
function updateCartDisplay() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "";
  let totalAmount = 0;
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
    cartItemsContainer.appendChild(cartItem);
    totalAmount += item.price;
  });
  const totalAmountDisplay = document.getElementById("totalAmount");
  totalAmountDisplay.textContent = totalAmount.toFixed(2);
}
function checkout() {
  cart = [];
  updateCartDisplay();
  alert("Thank you for your purchase!");
}
window.onload = displayCatalog;
