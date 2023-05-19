let productViews = new WeakMap();
let cartItems = new WeakSet();

function incrementProductViews(productId) {
  if (productViews.has(productId)) {
    productViews.set(productId, productViews.get(productId) + 1);
  } else {
    productViews.set(productId, 1);
  }
}

function addToCart(productId) {
  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    cartItems.add(productId);
    return "Product added to cart";
  }
}
