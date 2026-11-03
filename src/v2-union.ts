// literal type
// Basic Union
// Literal Union
// Object Union


// Literal Union
type Status = "pending";
const status: Status = "pending";
console.log(status)


// Basic Union

type Indedenty = string | number;

const id: Indedenty = 4534;
console.log(id)

const str: Indedenty = "Mens";
console.log(str)



// Literal Union

type Role = "user" | "admin" | "manager";

const UserRole: Role = "manager";
const UserRol: Role = "admin";
const UserRoled: Role = "user";

console.log(UserRole);
console.log(UserRol);
console.log(UserRoled);


// ObJ union

type Admin = { id: number, role: number, vilage: string[], }
type Member = { id: number, role: number, plans: string[], }

type User = Admin | Member;

const user: User = {
    id: 34,
    role: 33,
    vilage: ["df", "ff",],
    plans: ["pro", "premium"]
}
console.log(user)
