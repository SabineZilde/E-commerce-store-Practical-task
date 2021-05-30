// "Product added" popup text

function addToCart() {
    document.getElementById('addedToCartInfo').innerHTML = '&#10004 Added to cart!';
};

// Cart page functionality

let productQty1 = 1;
let productQty2 = 1;
let productQty3 = 1;

let totalProduct1 = 5;
let newTotalProd1 = 5;

let totalProduct2 = 3.50;
let newTotalProd2 = 3.50;

let totalProduct3 = 6.00;

let subtotal1 = 0;
let subtotal2 = 0;
let subtotal = 0;


$('#add1').on('click', () => {
    $('#product1').html(productQty1 += 1);
    $('#total1').html(newTotalProd1 += totalProduct1);
    $('#subtotal').html(subtotal1 = newTotalProd1);

});

$('#subtract1').on('click', () => {   
    if (productQty1 !== 1) {
        $('#product1').html(productQty1 -= 1);
        $('#total1').html(newTotalProd1 -= totalProduct1);
    }
});

$('#add2').on('click', () => {
    $('#product2').html(productQty2 += 1);
    $('#total2').html(newTotalProd2 += totalProduct2);
    $('#subtota2').html(subtotal2 = newTotalProd2);
});

setInterval( () => {
    subtotal = subtotal1 + subtotal2;
}, 10);

