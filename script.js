//========== date ==========
const todayEl = document.getElementById('today-date');
function dateForm(date) {
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });
}
const now = new Date();
todayEl.textContent = "Todays is " + dateForm(now);

// ========== num conversion ==========
const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("convert-btn");
const conversionOutput = document.getElementById("conversion-output");

convertBtn.addEventListener("click", function () {
  const originalValue = userInput.value;
  const convertedValue = Number(originalValue);
  const isNaNResult = Number.isNaN(convertedValue);
  const isIntegerResult = Number.isInteger(convertedValue);
  conversionOutput.innerHTML = `
    <p><strong>Original value:</strong> "${originalValue}"</p> 
    <p><strong>Converted with Number():</strong> ${convertedValue}</p> 
    <p><strong>isNaN:</strong> ${isNaNResult}</p> 
    <p><strong>isInteger:</strong> ${isIntegerResult}</p> 
  `;
});

// ========== mat & format ==========
const priceInput = document.getElementById("price");
const taxRateInput = document.getElementById("tax-rate");
const calculateBtn = document.getElementById("calculate-btn");
const mathResult = document.getElementById("math-result");

calculateBtn.addEventListener("click", function () {
  const price = Number(priceInput.value);
  const taxRate = Number(taxRateInput.value);
  if (Number.isNaN(price) || Number.isNaN(taxRate)) {
    mathResult.innerHTML = "Please enter valid numbers for both Price and Sales Tax.";
    return;
  }
  if (price < 0 || taxRate < 0) {
    mathResult.innerHTML = "Price and tax rate cannot be negative.";
    return;
  }
  const taxAmount = price * (taxRate / 100);
  const total = price + taxAmount;
  mathResult.innerHTML = `
    <p><strong>Price:</strong> $${price.toFixed(2)} </p> 
    <p><strong>Sales Tax (${taxRate}%):</strong> $${taxAmount.toFixed(2)} </p> 
    <p><strong>Total:</strong> $${total.toFixed(2)} </p> 
  `;
});