### Practice 9: Filter Students by Passing Grade
## Instruction:
Write a function called getPassingStudents that takes an array of student objects and passing score. Each student object contains:
name (string): The student's name.
grade (number): The student's grade.
- The function should return a new array of objects containing only the students with grades greater than or equal to passsingScore.

## Example Input:

```JS
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 58 },
  { name: 'Charlie', grade: 95 },
  { name: 'David', grade: 40 }
];

getPassingStudents(students, 60);
```
## Expected Output:
```JS
[
  { name: 'Alice', grade: 85 },
  { name: 'Charlie', grade: 95 }
]
```