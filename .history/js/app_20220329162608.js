// Show cart 
(function() {
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function() {
    cart.classList.toggle('show-cart');
  });
})();

// Add items to the cart 
(function() {
  const cartBtn = document.querySelectorAll
  ('.store-item-icon');

  cartBtn.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      if (event.target.parenElement.classList.contains
      ('store-item-icon')) {
      }
    })
  })
})