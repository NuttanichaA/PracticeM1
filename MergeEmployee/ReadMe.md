# Practice 4: Merge Two Arrays of Objects
## Instruction:
Write a function called mergeArrays that takes two arrays of objects as input. Each object contains a name (string) and age (number). The function should return a single array that merges both input arrays without duplicates (based on the name property). If an object with the same name exists in both arrays, the one from the second array should overwrite the one from the first array.

In case both arrays are empty, undefined, or null, throw the error message "Invalid Input".

## Example
```JS
const array1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];

const array2 = [
    { name: 'Bob', age: 32 }, // Bob from array2 will overwrite Bob from array1
    { name: 'Charlie', age: 28 }
];

console.log(mergeArrays(array1, array2)); 
// Output: [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 32 },
//   { name: 'Charlie', age: 28 }
// ]
```