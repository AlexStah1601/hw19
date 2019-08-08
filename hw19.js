'use strict';

//завдання 1
  // const user ={
  //   name: "John",
  //   surname: "Smith",
  //   };
  //   user.name = "Pete";
  //   delete user.name;
  //   console.log (user);

    //завдання 2

    let obj = {};
    let another = {
        name: undefined,
    }
    
    let isEmpty = (obj) => {
        let testVar;
        for(let key in obj) testVar = key;
        return testVar === undefined ? true : false;
    }
    
    console.log(isEmpty(obj));
    console.log(isEmpty(another));
  
  

    //завдання 3
    // const user = {
    //   name: "John"
    // };
    // user.name = "Pete";
    // console.log (user.name);
    // виведе; не виведе, якщо змінити тип данних


    //завдання 4
    // let salaries = {
    //   John: 100,
    //   Ann: 160,
    //   Pete: 130
    // };

    // let sum = 0;
    // for (let key in salaries){
    //   sum += salaries[key];
    // }
    // console.log (sum);


    //коли obj порожній, то буде 0
    // let salaries = {};

    // let sum = 0;
    // for (let key in salaries){
    //   sum += salaries[key];
    // }
    // console.log (sum);


   //завдання 5
    // multiplyNumeric(obj)

    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };

    let multiplyNumeric=(obj) => {
      for(let key in obj){
         if(typeof(obj[key]) === 'number')  obj[key] *= 2;
        }
        return 0;
    }
      multiplyNumeric(menu);
      console.log(menu);


    // lesson19 hw
    
const user = {
  name: 'Alex',
  age: 25,
  isAdmin: false,
  ipconfig:{
  ip: "123.1212.121211.44",
  DNS: 2525255555555,
  macAdres: "IU23G0215F",
  }
};

// копируем обьект user

const deepCopy  = Object.assign({}, user);
deepCopy.name = "Aleksey";
user.name = "Piter";

console.log(user);
console.log(deepCopy);



//ще 1 спосіб

// const user = {
//   name: 'Alex',
//   age: 25,
//   isAdmin: false,
//   ipconfig:{
//   ip: "123.1212.121211.44",
//   DNS: 2525255555555,
//   macAdres: "IU23G0215F",
//   }
// };
// const deepCopy = (obj) => {
//   const newObj = {};

//   for (const key in pbj){
//     if (typeof obj[key]==="object"){
//       newObj[key] = deepCopy(obj[key]);
//     }
//     else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }
// console.log (user);
// console.log (deepCopy);