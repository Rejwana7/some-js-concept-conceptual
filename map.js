

// map returns a new array with the results of the
//  function applied to each element, while forEach does not return anything.

/*
Use map() when you need a new array with transformed values.
Use forEach() when you only need to perform operations without creating a new array.
map() is pure (does not modify the original array), while forEach() can modify it.


*/

const numbers = [1, 2, 3, 4];
const newNumbers=numbers.map(num => num*10);
console.log(newNumbers); // [10, 20, 30, 40]
console.log(numbers);    // [1, 2, 3, 4] (Original array remains unchanged)


const arr=[10,20,30,40,50]
// arr.map((item,index,arr) => {
//     console.log("item:" ,item,"index:",index,"arr:" , arr)})
// map return korte pare

// const result =arr.map((a)=>a*2)
// console.log(result)    


const result =arr.map((a)=>{
    const x=a+3;
    return x;
    })
console.log(result) 