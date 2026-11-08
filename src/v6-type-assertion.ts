// Type assertion
// as syntex
// non-null assertion
// const assetrion


// Type assetion


let age: unknown = 306;

let myAge = age as number;

console.log(myAge.toFixed(5));


// non-nul assertin

let name: string | null = "Alomgir";
console.log(name!.toUpperCase())


// const assertion

let useer = {
    name: "Alomgir",
    role: "admin"
} as const   