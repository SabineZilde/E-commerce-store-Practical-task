// "Product added" pop up window

function addToCart() {
    alert('Item added to cart!');
};

// Cart page functionality

let productQty1 = 1;
let productQty2 = 1;
let productQty3 = 1;

$('#add').on('click', () => {
    $('#product1').html(productQty1 += 1);
});

$('#subtract').on('click', () => {
    $('#product1').html(productQty1 -= 1);
});