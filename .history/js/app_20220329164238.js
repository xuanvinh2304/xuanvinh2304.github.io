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
      if (event.target.parentElement.classList.contains
      ('store-item-icon')) {
        let = fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf('img') + 3;
        let partPath = fullPath.slice('pos');
        
        const item = {};
        item.img = `img-cart${partPath}`;
        let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        item.name = name;
        let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

        let finalPrice = price.slice(1).trim();

        item.price = finalPrice;

const cartItem = document.createElement('div');
        cartItem.classList('')
`<!-- cart item -->
<div class="cart-item d-flex justify-content-between text-capitalize my-3">
  <img src="img-cart/cake-2.jpeg" class="img-fluid rounded-circle" id="item-img" alt="">
  <div class="item-text">

    <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
    <span>$</span>
    <span id="cart-item-price" class="cart-item-price" class="mb-0">10.99</span>
  </div>
  <a href="#" id='cart-item-remove' class="cart-item-remove">
    <i class="fas fa-trash"></i>
  </a>
</div>
<!--end of  cart item -->`

        
      }
    });
  });
})();