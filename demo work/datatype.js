const person = {
  name: "john",
  age: {
    date: 13,
  },
};

const copyPerson = { ...person };
// const copyPerson = structuredClone(person);

copyPerson.age.date = 66;

console.log("Original person:", person);
console.log("Copied person:", copyPerson);
