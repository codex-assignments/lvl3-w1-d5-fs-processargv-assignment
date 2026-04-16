"use strict";

import { read } from "./contacts-app/contacts-app.js";
import { add } from "./contacts-app/contacts-app.js";
import { bye } from "./contacts-app/contacts-app.js";

//spread operator ...  with ,, will ignore first two items in array
const [, , ...userArgs] = process.argv;
const command = userArgs[0];
const name = userArgs[1];
const number = userArgs[2];

if (command === "read") {
  read();
}

if (command === "add") {
  add(name, number);
}

if (command === "delete") {
  bye();
}











// try {
//     const data = await fs.readFile("contacts.txt", "utf8")
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }

// try {
//     await fs.writeFile("contacts.txt", "Some data!")
// } catch (error) {
//     console.log(error)
// }

// try {
//     await fs.unlink("contacts.txt")
// } catch (error) {
//     console.log(error)
// }
