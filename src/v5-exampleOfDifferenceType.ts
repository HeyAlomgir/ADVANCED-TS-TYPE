// Top Type => any,unknown
// Unit Type => void
// sub Unit Type => undefind
// core Type => strng | number
// Literal Type => "pendign" | "approved"
// Nullish Type => null
// Botton Type => never


// Top Type

// any
let a: any = "Abid";
a = 20;
console.log(a)

// unknown 
let b: unknown = "Rromise";
b = true
console.log(b)




// Botton Tyepe => never

const Hope = () => {
    throw console.error("something rong!");

}
