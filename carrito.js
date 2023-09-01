

// Obtener elementos
const products = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout');

// Eventos de los botones
products.forEach(product => {
    product.addEventListener('click', addToCart);
});

checkoutButton.addEventListener('click', checkout);

// para agregar al carrito
function addToCart(event) {
    const product = event.target.parentNode;
    const productName = product.querySelector('p').textContent;
    const productPrice = parseFloat(product.querySelector('button').getAttribute('data-price'));

    const li = document.createElement('li');
    li.textContent = `${productName} - $${productPrice}`;
    cartItems.appendChild(li);

    updateTotal(productPrice);
}

// actualizar el total
function updateTotal(price) {
    const currentTotal = parseFloat(cartTotal.textContent);
    cartTotal.textContent = (currentTotal + price).toFixed(2);
}

// Funciónfinalizar la compra
function checkout() {
    Swal.fire({
        title: '¿Desea seguir comprando?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Seguir comprando',
        cancelButtonText: 'Finalizar compra',
    }).then((result) => {
        if (result.isConfirmed) {
            //  seguir comprando
            Swal.fire('¡Siga disfrutando de su compra!', '', 'success');
        } else {
            // finalizar la compra
            const totalAmount = parseFloat(cartTotal.textContent);
            Swal.fire({
                title: 'Compra finalizada',
                html: `El total a pagar es: $${totalAmount.toFixed(2)}`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            })     
           
        }
    });
}

