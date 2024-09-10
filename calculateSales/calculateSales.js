function calculateSales(products) {
  if (!Array.isArray(products) || products.length === 0)
    throw new Error("No products in this list!");
//   for (item of products) {
//     const totalSales = item.price * item.quantity;
//     sumOfSales += totalSales;
//   }
 return products.reduce((sumOfSales, currentValue) => 
    {return sumOfSales + (currentValue.price * currentValue.quantity)}, 0)
}
// when using an arrow function without curly braces ({}), you get an implicit return—which means 
// the value is automatically returned from the function without needing an explicit return keyword. 
// However, when you use curly braces to define the body of the function, you must use the return 
// statement to explicitly return a value. Otherwise, the function will return undefined.

const products = [
  { name: "Laptop", price: 1000, quantity: 5 },
  { name: "Phone", price: 500, quantity: 10 },
  { name: "Tablet", price: 300, quantity: 8 },
];

console.log(calculateSales(products));
try {
  console.log(calculateSales(null));
} catch (error) {
  console.log(error.message);
}
try {
  console.log(calculateSales(undefined));
} catch (error) {
  console.log(error.message);
}
try {
  console.log(calculateSales([]));
} catch (error) {
  console.log(error.message);
}
