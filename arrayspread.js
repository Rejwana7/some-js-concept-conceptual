const arr1 =[1,2,3];
// const arr2= arr1;
// // reference ,arr1 er address cole asche ,copy hoye geche tai duitate push hocche
// console.log(arr2)
// // arr1.push(50)
// // console.log(arr2)
// arr2.push(70)
// console.log(arr2)
// console.log(arr1)

const arr2= [... arr1]
console.log(arr1)
arr1.push(60)
arr2.push(66)
console.log(arr2)
 console.log(arr1)
//  const arr2=[]
//  for (let item of arr1){
//     arr2.push(item)
//  }


const names=['abdul','kashem','kuddus','karim']
// const name2=names[1]
// const name3=names[2]
// console.log(name2,name3)
// destructuring,sequence maintain
// const [x,y,z] = ['abdul','kashem','kuddus','karim']
// console.log(x,y,z)

const [_,y,z] = ['abdul','kashem','kuddus','karim']
console.log(y,z)