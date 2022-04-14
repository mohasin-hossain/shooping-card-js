function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-input");
  let productValue = parseInt(productInput.value);

  if (isIncreasing == true) {
    productValue = productValue + 1;
  } else if (productValue > 0) {
    productValue = productValue - 1;
  }
  productInput.value = productValue;

  // Update product total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productValue * price;

  // Calculate Total
  calculateTotal();
}

// Get input value function
function getInputValue(product) {
  const productInput = document.getElementById(product + "-input");
  const productValue = parseInt(productInput.value);
  return productValue;
}

// Calculate Total
function calculateTotal() {
  const caseTotal = getInputValue("case") * 59;
  const phoneTotal = getInputValue("phone") * 1250;
  const subTotal = caseTotal + phoneTotal;
  const tax = subTotal / 10;
  const total = subTotal + tax;

  // Update on the html
  document.getElementById("total").innerText = total;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
}

// Handle phone increase decreasse Events
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1250, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1250, false);
});

// handle case increase decrease Events
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
