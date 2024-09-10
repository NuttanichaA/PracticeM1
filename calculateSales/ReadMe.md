### Practice 7: Calculate Total Sales
## Instruction:
Write a function called calculateSales that takes an array of product objects as a parameter. Each product object contains:
    name (string): The product's name.
    price (number): The price of the product.
    quantity (number): The number of units sold.
The function should return the total sales (price * quantity) for all products.
## Example: 
``` JS
const products = [
  { name: 'Laptop', price: 1000, quantity: 5 },
  { name: 'Phone', price: 500, quantity: 10 },
  { name: 'Tablet', price: 300, quantity: 8 }
];

calculateSales(products);
```

- Expected output: 12400
