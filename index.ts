//Exercício 1
//Given the data, define the interface "User" and use it accordingly

export interface User {
  name: string;
  age: number;
  occupation: string;
}

export const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);
// https://www.typescriptlang.org/docs/handbook/2/objects.html

//Exercício 2
// Type "Person" is missing, please define it and use it in persons array and logPerson function in order to fix all the TS errors.
interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;
export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(person: Person) {
  console.log(` - ${person.name}, ${person.age}`);
}

persons.forEach(logPerson);
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

//Exercício 3
//Fix type errors in logPerson function. logPerson function should accept both User and Admin and should output relevant information according to the input: occupation for User and role for Admin.

export function logPerson(person: Person) {
  let additionalInformation: string;
  if ("role" in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

//Exercício 4
//Figure out how to help TypeScript understand types in this situation and apply necessary fixes.
export function isAdmin(person: Person): person is Admin {
  return person.type === "admin";
}

export function isUser(person: Person): person is User {
  return person.type === "user";
}

export function logPerson(person: Person) {
  let additionalInformation: string = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

//Exercício 5
//Without duplicating type structures, modify filterUsers function definition so that we can pass only those criteria which are needed, and not the whole User information as it is required now according to typing. Higher difficulty bonus exercise: Exclude "type" from filter criteria.
