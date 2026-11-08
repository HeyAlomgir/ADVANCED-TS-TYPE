
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