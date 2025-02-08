const arr=[10,20,30,40,50]

// const a=()=>
    // callback function ekta function er moddehe arekta function pass kora
// arr.forEach((item) => item )

// function show(a){
//     console.log(a)
// }

// const show = (a) =>console.log(a)

// arr.forEach(show)


// const show = (a) =>{
//     console.log(a)
// }

// arr.forEach((a) =>{
//     console.log(a)
// })
// foreach function return kore na

// const result=arr.forEach((a) => a)
// console.log(result)
// undefined


// let sum=0;
// arr.forEach((item) => sum+=item)
// console.log(sum)


const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
  console.log(arr[index]); 
}
console.log(numbers);

// for each main array change kore na

// callback parameter e (item,index,whole array)


arr.forEach((item,index,arr) => {
    console.log("item:" ,item,"index:",index,"arr:" , arr)
})
