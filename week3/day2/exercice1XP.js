const people = ["Greg", "Mary", "Devon", "James"];
// 1.remove “Greg” from the people array.
people.shift();
console.log(people);
// 2. Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason"; // ["Mary", "Devon", "Jason"]

// 3. Add your name at the end
people.push("Ikram"); 
// 4. Log Mary's index
console.log(people.indexOf("Mary")); 

// 5. Make a copy without "Mary" and your name ("Ikram")
const copy = people.slice(1, 3);
console.log(copy);

// 6. Index of "Foo"
console.log(people.indexOf("Foo")); 
// 7. Create a variable last with the last element
const last = people[people.length - 1];
console.log("Last person:", last); 

//partie 2
// 1. Iterate through the array and log each person
for (let person of people) {
    console.log(person);
  }
  
  // 2. Iterate and stop after "Devon"
  for (let person of people) {
    console.log(person);
    if (person === "Devon") {
      break;
    }
  }
  