const wrapInArray = (value) => {
    return [value];
};
const strArray = wrapInArray("alomgir");
const numArray = wrapInArray(34455);
const upperArray = strArray.map(item => item.toUpperCase());
console.log(strArray, numArray, upperArray);
export {};
