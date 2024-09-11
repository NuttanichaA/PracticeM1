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

function findLongestNameVer2(people) {
  let longestNames = [];

  // First, find the maximum name length
  let maxNamelength = Math.max(...people.map(person => person.name.length));

  // Then, find all names with the maximum length
  for (const person of people) {
    if (person.name.length === maxNamelength) {
      longestNames.push(person.name);
    }
  }

  return longestNames;
}

const people = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Christopher" },
  { name: "Aleczandria" },
];

console.log(findLongestNameVer2(people));
