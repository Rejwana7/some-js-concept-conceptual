const petOwner ={
    name:"Jolonto kholil",
    contact:{
        phone:"09875435",
    email:"xyz@gmail.com",
    },
    pet:{
        name:"Lofie",
        info:{
            color:"black",
            weight:"1.2kg",
        },
    },

    food:["Apple","Orange","Pepeya"]

};
// console.log(petOwner.name)
// console.log(petOwner.contact.phone)
// console.log(petOwner.pet.info.color)
console.log(petOwner.address)  
// undefined
// console.log(petOwner.address.houseNo) 
// TypeError: Cannot read properties of undefined (reading 'houseNo')

// optionalChaining ?
// console.log(petOwner ?.address?.houseNo) 

console.log(petOwner?.food[1])


