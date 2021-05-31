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
let newTotalProd3 = 6.00;

let subtotal1 = totalProduct1;
let subtotal2 = totalProduct2;
let subtotal3 = totalProduct3;

let subtotal = 0;
let shipping = 10;

$('#add1').on('click', () => {
    $('#product1').html(productQty1 += 1);
    $('#total1').html(newTotalProd1 += totalProduct1);
    subtotal1 = newTotalProd1;

});

$('#subtract1').on('click', () => {
    if (productQty1 !== 1) {
        $('#product1').html(productQty1 -= 1);
        $('#total1').html(newTotalProd1 -= totalProduct1);
        subtotal1 = newTotalProd1;
    }
});

$('#add2').on('click', () => {
    $('#product2').html(productQty2 += 1);
    $('#total2').html(newTotalProd2 += totalProduct2);
    subtotal2 = newTotalProd2;
});

$('#subtract2').on('click', () => {
    if (productQty2 !== 1) {
        $('#product2').html(productQty2 -= 1);
        $('#total2').html(newTotalProd2 -= totalProduct2);
        subtotal2 = newTotalProd2;
    }
});

$('#add3').on('click', () => {
    $('#product3').html(productQty3 += 1);
    $('#total3').html(newTotalProd3 += totalProduct3);
    subtotal3 = newTotalProd3;
});

$('#subtract3').on('click', () => {
    if (productQty3 !== 1) {
        $('#product3').html(productQty3 -= 1);
        $('#total3').html(newTotalProd3 -= totalProduct3);
        subtotal3 = newTotalProd3;
    }
});

setInterval(() => {
    $('#subtotal').html(subtotal = subtotal1 + subtotal2 + subtotal3);
    if (clicked1 > 0 && clicked2 > 0 && clicked3 > 0) {
        $('#subtotal').html(subtotal = 0);
    } else if (clicked1 > 0 && clicked2 > 0) {
        $('#subtotal').html(subtotal = subtotal3);
    } else if (clicked2 > 0 && clicked3 > 0) {
        $('#subtotal').html(subtotal = subtotal1);
    } else if (clicked1 > 0 && clicked3 > 0) {
        $('#subtotal').html(subtotal = subtotal2);
    } else if (clicked1 > 0) {
        $('#subtotal').html(subtotal = subtotal2 + subtotal3);
    } else if (clicked2 > 0) {
        $('#subtotal').html(subtotal = subtotal1 + subtotal3);
    } else if (clicked3 > 0) {
        $('#subtotal').html(subtotal = subtotal1 + subtotal2);
    }

    $('#finaltotal').html(subtotal + shipping);
}, 10);

let clicked1 = 0;
let clicked2 = 0;
let clicked3 = 0;

$('#delete1').on('click', () => {
    $('#product1').html(productQty1 = 0);
    $('#total1').html(newTotalProd1 = 0);

})
$('#deleteProduct1').on('click', function deleting1() {
    $('.productRow1').remove();
    clicked1++;
});


$('#delete2').on('click', () => {
    $('#product2').html(productQty2 = 0);
    $('#total2').html(newTotalProd2 = 0);

})
$('#deleteProduct2').on('click', function deleting2() {
    $('.productRow2').remove();
    clicked2++;
});

$('#delete3').on('click', () => {
    $('#product3').html(productQty3 = 0);
    $('#total3').html(newTotalProd3 = 0);

})
$('#deleteProduct3').on('click', function deleting3() {
    $('.productRow3').remove();
    clicked3++;
});





