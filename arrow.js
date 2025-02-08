// function info(){
//     return "ki chai___?";
// }

// const result =info()
// console.log(result)

const info =() =>"ki chai___?";


// const result =info()
// console.log(result)

// const double  = (x)=> x*2;

// const doubleResult= double(3)
// console.log(doubleResult)

// const add=(x,y)=>{
//     const total=x+y;
//     return total;

// }
// console.log(add(3,4))

// default parameter

function add(x=0,y=0){
    return x+y;
}

// console.log(add(5))
// output nan, ekta parameter hole
console.log(add(5))

