// ******************* Higher Order Array Functions ********************** //

// const persons = [
//   { name: "basanta", gender: "male", salary: 50000 },
//   { name: "sita", gender: "female", salary: 40000 },
//   { name: "ram", gender: "male", salary: 35000 },
//   { name: "asmita", gender: "female", salary: 20000 },
// ];

// // forEach()
// persons.forEach((person) => {
//   console.log(person.name);
// });

// // ***************************** map() *********************************** //
// const names = persons.map((person) => person.name.toUpperCase());
// console.log(names);

// const new_persons = persons.map((person) => {
//   return "Hello" + " " + person.name;
// });
// console.log(new_persons);

// const new_salary = persons.map((person) => {
//   return person.salary + 5000;
// });
// console.log(new_salary);
// console.log(persons); // existing elements with modified salaries

// // ******************************* filter() ********************************* //
// const females = persons.filter((person) => person.gender === "female");
// console.log(females); // female only

// // Check if the person salary less than or qqual to 35000
// const salary = persons.filter((person) => person.salary <= 35000);
// console.log(salary);

// // Check if the name contains more than 5 letter
// const name_char = persons.filter((person) => person.name.length > 5);
// console.log(name_char);

// //Check if the name starts with "b"
// const starts_name = persons.filter((person) => person.name.startsWith("b"));
// console.log(starts_name);

// const multiple_cond = persons.filter((person) => {
//   // Check if the name starts with "a" (case-insensitive)
//   const startsWithA = person.name.toLowerCase().startsWith("a");

//   // Check if the salary is less than 30000
//   const salaryLessThan30000 = person.salary < 30000;

//   // Return true if both conditions are met
//   return startsWithA && salaryLessThan30000;
// });

// console.log(multiple_cond);

// //find
// let customers = [
//   { customerId: 123, name: "John Doe" },
//   { customerId: 456, name: "Jane Doe" },
//   { customerId: 789, name: "Jim Smith" },
// ];

// let targetCustomer = customers.find(function (customer) {
//   return customer.customerId === 789;
// });
// console.log(targetCustomer);
// // {customerId: 456, name:"Jane Doe"}

// // filter forms the output in array, find: object

// ***************************** call-apply-bind ************************************** //
// const calculator = {
//   calculateTotal: function (discount) {
//     return this.price - discount;
//   },
// };

// const product = {
//   price: 100,
// };

// const vipDiscount = 20;

// // Using call to calculate the total price with VIP discount
// const totalPriceCall = calculator.calculateTotal.call(product, vipDiscount);
// console.log("Total Price (using call):", totalPriceCall); // Output: Total Price (using call): 80

// // Using apply to calculate the total price with VIP discount
// const totalPriceApply = calculator.calculateTotal.apply(product, [vipDiscount]);
// console.log("Total Price (using apply):", totalPriceApply); // Output: Total Price (using apply): 80

// // Using bind to create a new function with VIP discount applied
// const calculateTotalWithDiscount = calculator.calculateTotal.bind(
//   product,
//   vipDiscount
// );
// const totalPriceBind = calculateTotalWithDiscount();
// console.log("Total Price (using bind):", totalPriceBind); // Output: Total Price (using bind): 80

// ***************************** map(),filter(),reduce(),forEach() *********************************** //
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 100 },
];

// Example 1: Using map to create a new array of product names
const productNames = products.map((product) => product.name);
console.log("Product Names:", productNames);
// Output: Product Names: ["Laptop", "Smartphone", "Tablet", "Headphones"]

// Example 2: Using filter to find affordable products (price less than 600)
const affordableProducts = products.filter((product) => product.price < 600);
console.log("Affordable Products:", affordableProducts);
// Output: Affordable Products: [{ name: "Tablet", price: 500 }, { name: "Headphones", price: 100 }]

// Example 3: Using reduce to calculate the total price of all products
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log("Total Price:", totalPrice);
// Output: Total Price: 2400

// Example 4: Using forEach to calculate the laptop name and total price of all products
products.forEach((laptop) => console.log(laptop.name));

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].name);
// }

let totalPrice2 = 0;
products.forEach((product) => {
  totalPrice2 += product.price;
});
console.log("Total Price:", totalPrice2);

// for (let i = 0; i < products.length; i++) {
//   totalPrice2 += products[i].price;
// }
// console.log("Total Price:", totalPrice2);
