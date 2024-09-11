function findLongestName(people) {
  let maxNamelength = 0;
  let longestNameIndex = 0;
  for (const man of people) {
    if (man.name.length > maxNamelength) {
      maxNamelength = man.name.length
      longestNameIndex = people.indexOf(man)
    }
  }
  return people[longestNameIndex].name
}

const people = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Christopher" },
  { name: "David" },
];

console.log(findLongestName(people));
