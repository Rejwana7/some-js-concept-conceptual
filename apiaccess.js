
const people=[
    {

        id:1,
        name:"John Doe",
        age:30,
        occupation:"Software Engineer",
        contact:{
            email:"john.doe@example.com",
        },
        address:{
            street:"123 Main st",
            city:"San Francisco",
            state:"CA",
            zip:"94105",
        },
        social:{
            twitter:"@johndoe",
        },
        hobbies:["Coding","Hiking","Photography"]
    },


    {

        id:2,
        name:"Jame Smith",
        age:30,
        occupation:"Graphic Designer",
        contact:{
            email:"john.doe@example.com",
            phone:"987-654-3210"
        },
       
      
        hobbies:["Travelling","Drawing"]
    },


    {

        id:3,
        name:"Mark Johnson",
        age:40,
        occupation:"Marketing Manager",
        contact:{
            email:"john.doe@example.com",
        },
        address:{
            street:"123 Main st",
            city:"Chicago",
            state:"li",
            zip:"94105",
        },
       
        hobbies:["Coding","Hiking","Photography"]
    },
]


// const city=people[0].address.city
// const city=people[1]?.address?.city
// // array of object
// console.log(city)

// people.map((person)=>{
//     const sentence=`Person's name is ${person.name}.City:${person?.address?.city || "N/A"}`
//     console.log(sentence)
// })

const x= people.find((p)=> p.age===40)
console.log(x.name)


