const wrapInArray = (value) => {
    return [value];
};
const strArray = wrapInArray("alomgir");
const numArray = wrapInArray(34455);
const upperArray = strArray.map(item => item.toUpperCase());
console.log(strArray, numArray, upperArray);
const user1 = {
    name: "Alomgri",
    age: 11,
    data: "Full stack devoleper"
};
console.log(user1);
export {};
