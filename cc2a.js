let productname = "Gum";
let costPerUnit = 0.50;
let basePrice = 3.00;
let discountRate = 0.20;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 10000.00;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1+salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts/profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Product Name: " +productname);
console.log("Disccounted Price (before tax): $" +discountedPrice);
console.log("Final Price (after tax): $" +finalPriceWithTax);
console.log("Profit Per Unit: $" +profitPerUnit);
console.log("Break-Even Units: " +breakEvenUnits);
console.log("Is it profitable per unit?" +isProfitablePerUnit);
