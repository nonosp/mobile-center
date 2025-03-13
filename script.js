let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} a été ajouté au panier !`);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Exemple d'utilisation
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        addToCart(productName, productPrice);
    });
});