
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