// Narrowing down
// 2. typeof
// 3. Type Guard
// 4.Truthiness
// 5.Equality
// 6.in operator
// instant of check
// Dicreminated union
// Narrowing down
const narow = (age) => {
    if (typeof age === "string") {
        console.log("its str:" + typeof age);
        return;
    }
    else
        (typeof age === "number");
    {
        console.log("its num:" + typeof age);
    }
};
narow("Alomgir");
narow(454);
// type of
let age = 34;
console.log(typeof age);
// Type Gurad
const Gurad = (value) => {
    if (typeof value === "string") {
        console.log(value);
    }
    else {
        console.log(console.error("smoething"));
    }
};
Gurad("ALomgir");
const getUserInfo = (user) => {
    if ("spefizailation" in user) {
        console.log("Doctor:" + user.spefizailation);
    }
    else {
        console.log("Patient naeme + age =" + user.name + " " + user.age);
    }
};
getUserInfo({
    name: "Alomgir",
    spefizailation: "Cardiology"
});
getUserInfo({
    name: "Fahim",
    age: 20
});
export {};
