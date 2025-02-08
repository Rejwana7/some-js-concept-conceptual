// const Name='Rejwana'
// const age=25
// const job="bekar"


// const sentence="amar name "+Name+ ".Amar boyos "+age+".Ami ekhon " + job
// console.log(sentence)

// const sentence1= `Amar name ${Name}.Amar boyos ${age}.Ami ekhon ${job}`
// console.log(sentence1)



const myInfo= {
    name:"Rejwana",
    age:25,
    address:"chittagong",
    surname:"Rudmila",
    sosurbari:"B.Baria",
    // contact:{
    //     phone:2345666,
    //     email:"rudmila@gamil.com",
    // }
   subjects:["Bangla","English","Math"]

};


const sentence=`My Name is ${myInfo.name}.Amar subjects gulo ${myInfo.subjects.map((sub)=>sub).join("/")}`
console.log(sentence)
// map because array,map return elemnet
