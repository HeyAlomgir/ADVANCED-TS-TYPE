
// Narrowing down
// 2. typeof
// 3. Type Guard
// 4.Truthiness
// 5.Equality
// 6.in operator
// instant of check
// Dicreminated union

// Narrowing down
const narow = (age: string | number) => {

    if (typeof age === "string") {
        console.log("its str:" + typeof age)
        return
    } else (typeof age === "number")
    {
        console.log("its num:" + typeof age)
    }
}
narow("Alomgir");
narow(454);



// type of


let age = 34;
console.log(typeof age);


// Type Gurad

const Gurad = (value: string | number) => {
    if (typeof value === "string") {
        console.log(value)
    } else {
        console.log(console.error("smoething")
        )
    }
}
Gurad("ALomgir")



// in operator

interface Doctor {
    name: string;
    spefizailation: string;
}
interface Patient {
    name: string;
    age: number;
}


type User = Doctor | Patient;

const getUserInfo = (user: User) => {
    if ("spefizailation" in user) {
        console.log("Doctor:" + user.spefizailation)
    } else {
        console.log("Patient naeme + age =" + user.name + " " + user.age)
    }
}

getUserInfo({
    name: "Alomgir",
    spefizailation: "Cardiology"
})
getUserInfo({
    name: "Fahim",
    age: 20
})



// instacneof 

let today = new Date();
console.log(today instanceof Date);
