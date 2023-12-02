// Cart data to store items and total
let cart = [];
let total = 0;

// Function to add item to the cart
function addToCart() {
  const item = {
    name: 'Face Mist', // 
    price: 110.00 //
  };
  
  cart.push(item);
  total += item.price;
  updateCart();
}
{
    const item = {
      name: 'Skin Cream', // 
      price: 150.00 //
    };
    
    cart.push(item);
    total += item.price;
    updateCart();
  }

// Function to update the cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  cartItems.innerHTML = '';
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  
  cartTotal.textContent = total.toFixed(2);
}