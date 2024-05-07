let cart = JSON.parse(localStorage.getItem('cart')) || [];

cart.map((item) => {
    pushToTable(item);
});

function addToCart(item) {
    cart.push(item);

    console.log(`${item} added to cart`);

    pushToTable(item);

    saveCart();
}

function pushToTable(item) {
    var table = document.getElementById('table-cart');
    var row = table.insertRow(1);
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    var c3 = row.insertCell(2);
    var c4 = row.insertCell(3);
    var c5 = row.insertCell(4);
    c1.innerHTML = item;
    c2.innerHTML = 100; // Assuming this is the price
    c3.innerHTML = 1;   // Assuming this is the quantity
    c4.innerHTML = 100; // Assuming this is the total
    c5.innerHTML = `<button class='btn btn-sm btn-danger' onclick='removeFromCart(this)'>Remove</button>`;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(button) {
    var row = button.parentNode.parentNode;
    var item = row.cells[0].innerHTML;
    var index = cart.findIndex((cartItem) => cartItem === item);
    
    if (index !== -1) { // Corrected the index check
        cart.splice(index, 1);
        saveCart();
    }

    row.parentNode.removeChild(row);
}
