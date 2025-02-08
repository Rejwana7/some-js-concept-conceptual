// global scope. 
// at any place that access
// block scope




// {
//     let x=5;
//     console.log(x)
// }
// outside print
// console.log(x) error dibe,block er baire

//  const x=5;
// // not reassign
// const x=10;
// console.log(x)
// block er moddhe redeclared korte parbo
// {
//       const x=10;
// console.log(x)
// }
//  console.log(x)

// {
//     var x=10;
// console.log(x)
// }
// console.log(x)
// var baire ,inside sob khane pabe ,eta globally set hoye zay

function show(){
    // const x=5;
    var x=5;
    console.log(x)
}
show()
console.log(x)

// functional scope e var,let ,const declare koarar por oi function er moddhe existance thake