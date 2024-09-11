function mergeEmployee(emps1, emps2) {
  if(!Array.isArray(emps1) || !Array.isArray(emps2) || emps1.length === 0 || emps2.length === 0){
    throw new Error('No employee found')
  }
  const mergedEmp = {}
  for (const emp1 of emps1) {
    mergedEmp[emp1.name] = emp1
  }
  for (const emp2 of emps2) {
    mergedEmp[emp2.name] = emp2
  }
  return Object.values(mergedEmp)
}

const array1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];

const array2 = [
    { name: 'Bob', age: 32 }, 
    { name: 'Charlie', age: 28 }
];

console.log(mergeEmployee(array1, array2));