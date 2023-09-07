// example:1
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("successfull");
//     //reject("failed");
//   }, 5000);
// });

// console.log(promise);

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const sum = 10 + 20;
// console.log(sum); // display sum value first, after 5 seconds promise come into action

// example:2
// const setName = new Promise((resolve, reject) => {
//   const name = "Gyamzo";
//   setTimeout(() => {
//     if (name.length > 5) {
//       resolve(name);
//     } else {
//       reject("invalid name");
//     }
//   }, 5000);
// });

// console.log(setName);

// setName
//   // this function will be called when the promise is resolved
//   .then((value) => {
//     console.log(`hello, ${value}`);
//   })
//   // this function will be called when the promise is resolved
//   .catch((error) => {
//     console.log(error);
//   });

//example:3
// let getDataFromAPI = function () {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((people) => {
//         console.log(people);
//         const name = people.map((person) => person.name);
//         console.log(name);
//       })
//       .catch((error) => reject(error));
//   });
// };

// getDataFromAPI();

// let users = fetch("https://jsonplaceholder.typicode.com/users");

// users
//   .then((user) => {
//     return user.json();
//   })
//   .then((people) => {
//     //console.log(people);
//     const name = people.map((person) => person.name);
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log("no users found");
//   });

// promise chaining
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let isShopOpen = true;
// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// };

// order(2000, () => {
//   console.log(`${stocks.Fruits[0]} was selected`);
// })
//   .then(() => {
//     return order(1000, () => console.log("production has stsrted"));
//   })
//   .then(() => {
//     return order(2000, () => console.log("fruit has been chopped"));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[1]}`)
//     );
//   })
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
//   })
//   .then(() => {
//     return order(2000, () => console.log("serve ice cream"));
//   })
//   .catch(() => console.log("shop is closed"));

// example:4
const data = fetch("https://api.github.com/users/gyamzosherpa");

data
  .then((usersResponse) => {
    return usersResponse.json();
  })
  .then((users) =>
    fetch(users.repos_url)
      .then((repoResponse) => {
        return repoResponse.json();
      })
      .then((repoData) => console.log(users, repoData))
  )
  .catch((error) => console.log("unable to fetch the data", error));

// async function getData(username) {
//   try {
//     const usersResponse = await fetch(
//       `https://api.github.com/users/${username}`
//     );
//     const userData = await usersResponse.json();
//     const repoResponse = await fetch(userData.repos_url);
//     const repoData = await repoResponse.json();

//     console.log(userData, repoData);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getData("gyamzosherpa");
