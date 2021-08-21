function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-input');
    let productValue = parseInt(productInput.value);
   
    if(isIncreasing == true) {
        productValue = productValue + 1;
    } else if (productValue > 0) {
        productValue = productValue - 1;
    }

    productInput.value = productValue;

    // Update Case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productValue * price;
}

// Handle phone increase decreasse Events
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1250, true);
})
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1250, false);
})

// handle case increase decrease Events
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false);
})