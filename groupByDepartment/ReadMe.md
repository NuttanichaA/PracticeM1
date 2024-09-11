### Practice 11: Group Employees by Department
## Instruction:
Write a function called groupByDepartment that takes an array of employee objects. Each employee object contains:
name (string): The employee's name.
department (string): The employee's department.

- The function should return an object where the keys are department names and the values are arrays of employee names in those departments.

## Example Input:

```JS
const employees = [
  { name: 'Alice', department: 'HR' },
  { name: 'Bob', department: 'IT' },
  { name: 'Charlie', department: 'HR' },
  { name: 'David', department: 'Finance' }
];

groupByDepartment(employees);
```
## Expected Output:
```JS
{
  HR: ['Alice', 'Charlie'],
  IT: ['Bob'],
  Finance: ['David']
}
```