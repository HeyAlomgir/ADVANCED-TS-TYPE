const wrapInArray = <T>(value: T) => {
    return [value];
}

const strArray = wrapInArray("alomgir");
const numArray = wrapInArray(34455);

const upperArray = strArray.map(item => item.toUpperCase());

console.log(strArray, numArray, upperArray)



// interface generic


interface User<T> {
    name: string;
    age: number;
    data: T;
}

const user1: User<string> = {
    name: "Alomgri",
    age: 11,
    data: "Full stack devoleper"
}

console.log(user1)