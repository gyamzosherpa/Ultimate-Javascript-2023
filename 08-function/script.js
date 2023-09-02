// ******************* Higher Order Array Functions ********************** //

const persons = [
  { name: "basanta", gender: "male", salary: 50000 },
  { name: "sita", gender: "female", salary: 40000 },
  { name: "ram", gender: "male", salary: 35000 },
  { name: "asmita", gender: "female", salary: 20000 },
];

// forEach()
persons.forEach((person) => {
  console.log(person.name);
});

// ***************************** map() *********************************** //
const names = persons.map((person) => person.name.toUpperCase());
console.log(names);

const new_persons = persons.map((person) => {
  return "Hello" + " " + person.name;
});
console.log(new_persons);

const new_salary = persons.map((person) => {
  return person.salary + 5000;
});
console.log(new_salary);
console.log(persons); // existing elements with modified salaries

// ******************************* filter() ********************************* //
const females = persons.filter((person) => person.gender === "female");
console.log(females); // female only

// Check if the person salary less than or qqual to 35000
const salary = persons.filter((person) => person.salary <= 35000);
console.log(salary);

// Check if the name contains more than 5 letter
const name_char = persons.filter((person) => person.name.length > 5);
console.log(name_char);

//Check if the name starts with "b"
const starts_name = persons.filter((person) => person.name.startsWith("b"));
console.log(starts_name);

const multiple_cond = persons.filter((person) => {
  // Check if the name starts with "a" (case-insensitive)
  const startsWithA = person.name.toLowerCase().startsWith("a");

  // Check if the salary is less than 30000
  const salaryLessThan30000 = person.salary < 30000;

  // Return true if both conditions are met
  return startsWithA && salaryLessThan30000;
});

console.log(multiple_cond);

//find
let customers = [
  { customerId: 123, name: "John Doe" },
  { customerId: 456, name: "Jane Doe" },
  { customerId: 789, name: "Jim Smith" },
];

let targetCustomer = customers.find(function (customer) {
  return customer.customerId === 789;
});
console.log(targetCustomer);
// {customerId: 456, name:"Jane Doe"}
