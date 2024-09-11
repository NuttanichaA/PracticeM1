function findLongestName(people) {
  let maxNamelength = 0;
  let longestName = '';
  for (const man of people) {
    if (man.name.length > maxNamelength) {
      maxNamelength = man.name.length
      longestName = man.name
    }
  }
  return longestName
}

const people = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Christopher" },
  { name: "David" },
];

console.log(findLongestName(people));
