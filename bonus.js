

// const add =(obj)=>{
//     return obj.a +obj.b;

// }
const add =({a,b})=>{
    return a+b;
}
// property destructuring

const obj ={
    a:3,
    b:4
}

console.log((add(obj)))