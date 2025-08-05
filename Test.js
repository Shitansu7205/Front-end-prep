// ######SCOPE OF VARIABLE#######

// const add = () => {
//     const data = 10
//     console.log(data)

//     const second = () =>{
//         const data1 = 20
//         console.log(data + data1)
//     }
//     second()
//     console.log(data1)
// }

// add()


// ######HOISTING#######
// console.log(a)
// let a = 5
// console.log(a)

// but in the let and const its not working
// console.log(b)
// const b = 12;

// add()
// function add() {
//     console.log("learnigb hosuigon")
// }

// var add = function(){
//     console.log("sdk;hfi")
// }
// console.log(add)

// const add = ()=>{
//     console.log("fe;lrbty")
// }



// function sdcjn(){
//     console.log("Sddjebfebfir")
// }
// sdcjn()


// console.log(hbde)
// var hbde = ()=>{
//     console.log("Sddjebfebfir")
// }
// hbde()


// ######LEXICAL SCOPING#######

// const outer = () => {
//     const red = 12
//     console.log("Acces on the Outer", red)
//     const inner = () => {
//         console.log("Acces on the Innter", red)
//         const subInner = () => {
//             console.log("Acces ub teh Subinn", red)
//             var innerData = 123
//         }
//         subInner()
//     }
//     const inner2 = () => {
//         console.log("Acces on the Inner 2", red)
//     }
//     inner()
//     inner2()
// }
// outer()


//  ######CLOUSER#######
// const outer = () => {
//     let a = 12
//     console.log(a)
//     const inner  = ()=>{
//         console.log(a)
//     }
//     return inner
// }
// const outerFn = outer()

// outerFn()




// const createCounter = () => {
//     let a = 12
//     const increment = () => {
//         console.log("In the Incremebt ", a)
//         a++
//         console.log("In the Incremebt ", a)
//     }
//     return increment
// }

// const counterApp = createCounter()
// counterApp()



// ############EVENT LOOP############
// console.log("1"); // 🧠 synchronous
// sayHi();          // 🧠 synchronous function
// Promise.resolve().then(() => console.log("3")); // 📆 microtask
// setTimeout(() => console.log("4"), 0);          // ⏰ macrotask
// function  sayHi(){
//     console.log("hii")
// }


// console.log("A");  //syn

// setTimeout(() => {     //macro
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {  //micro
//   console.log("C");
// });

// console.log("D"); //syn


// console.log("1");  //syan
// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");         //micro
//   setTimeout(() => {    
//     console.log("4");
//   }, 0);
// });
// console.log("5");   //syan

