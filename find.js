const numbers=[12,32,25,75,13,54,97,25]


// let find= null
// for( item of numbers){
//     if(item >50 && item%2===0){
//         find=item;
//         break;
//     }
// }
// console.log(find)

// prothom value return kore match payle find

const result= numbers.find((item) => item>50 && item%2==0)
console.log(result)

// shorto er sathe na mille .undefined  return korbe