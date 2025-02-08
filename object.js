// const myInfo= {
//     name:"Rejwana",
//     age:25,
//     address:"chittagong",
//     surname:"Rudmila",
//     sosurbari:"B.Baria",
//     contact:{
//         phone:2345666,
//         email:"rudmila@gamil.com",
//     }


// };
// const obj2=myInfo;

// obj2.married=false;
// obj2.age=26;
// console.log(myInfo)
// console.log(obj2)

// spreading
// const obj2={...myInfo};

// obj2.married=false;
// obj2.age=26;
// console.log(myInfo)
// console.log(obj2)

// ....Destructuring

// const myName= myInfo.name
// const myagee= myInfo.age


// key and variable same thakte hobe,na hoy undefined
// myage rename ,variable custom.
// const{age:myage,name} = myInfo
// console.log(myage,name)


// const {contact} = myInfo;
// console.log(contact);

// const {email} = contact;
// console.log(email);
// one line
// const {contact:{email}} =myInfo;
// console.log(email);




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


};

// object access: dot notation,bracket notation
// string akare thakle undefined asbe ,dot diye  access kora zabe na

// const s="surname"
// console.log(myInfo.surname)
// // string akare,property name
// console.log(myInfo["surname"])
// console.log(myInfo[s])


for(let key in myInfo){
    // console.log(key,typeof key)
    // string akare tai third bracket
    console.log(myInfo[key])
}


