// Type Alias

type Usersm = {
    name: string,
    age: number,
    department: string,
}

const userm: Usersm = {
    name: "Alomgir",
    age: 20,
    department: "cst"
}

console.log("ALias", userm)



// Interface

interface UserB {
    name: string,
    age: number,
    department: string,
    semester: string,
}

const userB: UserB = {
    name: "Alomgir",
    age: 20,
    department: "CST",
    semester: "6th"
}
console.log("INterface", userB);

