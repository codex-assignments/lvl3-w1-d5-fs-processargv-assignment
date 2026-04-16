"use strict";

//node:fs is a built-in node.js core API allowing devs to interact with a file system, reading writing, deleting files and directories.
import fs from "node:fs/promises";

const file = "contacts-app/contacts.txt";

export async function read() {
  try {
    const data = await fs.readFile(file, "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function add(name, number) {
  try {
    await fs.appendFile(file, `\n${name} ${number}`);
    read();
  } catch (error) {
    console.log(error);
  }
}

export function bye() {
  fs.unlink(file);
  console.log("File deleted.");
}
