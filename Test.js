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


// ########REST AND SPREAD OPERATOR########

// const arr = [1,2,3]
// const newA = [...arr]
// console.log(newA)

// const fn = (...id)=>{
//     console.log("Rest operator : " , id)
// }
// fn(234,23,4,56,7)

// const colors = ["red", "blue", "green", "yellow"];
// const [firstColor,secondColor,...all] = colors
// console.log(firstColor,secondColor)

// const a = [1, 2];
// const b = [3, 4];
// const merGeArr = [...a,...b]
// console.log(merGeArr)


// const arr = [1,2,3]
// console.log(Math.max(...arr))


// const fun = (...num)=>{
//     console.log('SO THE EXTRA INPUT IS :  ', num.length-2)
// }   
// fun(12,2,3,4,34,45,6,76,8,5)

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const merArr= [...arr1,500,...arr2]
// console.log(merArr);

// const uers = { name: "Shitansu", age: 21, roll: 3 }
// const newUser = {...uers,age:25}

// console.log(newUser);


// const arr = ['shitansu', 'kumar', 'gochhayat']
// const [name, ...other] = arr
// console.log(name , other)


// const fun = (name,title) => {
//     const merGe = {...name,...title}
//     console.log(merGe)

// }
// fun({ name: 'shitansu' }, { title: "Gochhayat" })



//  let sum = 0
//  let sqArr = []
// const fun = (...num) => {
//     console.log(num)
//     for(let i=0;i<num.length;i++){
//         // sum = sum + num[i]
//         let makeSq = num[i] * num[i]
//         sqArr.push(makeSq)
//     }
//      for(let i=0;i<sqArr.length;i++){
//         sum = sum + sqArr[i]
//      }
// }
// fun(1,1,1,1,1,1)
// console.log(sum);
// console.log(sqArr)


// const arr = [1,22,34]
// const newArr = [...arr,56]
// console.log(newArr , arr)


// const func = (a,b,...other) => {
//     console.log(a+b)
//     console.log(other)
// }
// func(...[1, 2, 3, 4, 5])



// #############PROMISES#############
// console.log('a')   //ssyn

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('c')
//         resolve()
//     }, 2000);
// })
// myPromise.then(() => console.log("Resolebe"))
//     .catch(() => console.log("rejected"))
//     .finally(() => console.log("Promise finished!"));

// console.log('b')




// let prom = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("Done")
//     }, 2000);
// })



// let prom = new Promise((res, rej) => {
//     console.log("Pending state")
//     setTimeout(() => {
//         rej()
//     }, 1000)
// })
// prom.then(() => console.log("Resolved"))
//     .catch(() => console.log("Errpor Occured"))
//     .finally(() => console.log("Promise Fullfilled"))




// console.log("a");

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("done");
//     }, 2000);
// });

// myPromise.then(msg => console.log(msg));

// console.log("b");

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("error happened");
//     }, 1000);
// });

// promise
//     .then(msg => console.log("Resolved:", msg))
//     .catch(err => console.log("Rejected:", err));



// let p = new Promise((res, rej) => {
//     console.log("Start Fetching.....")
//     res()
// })
// p.then(async() => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(data)
// })
// console.log(p)



// #############ASYNC / AWAIT#############


// const pFunc = async()=>{
//     console.log("Called the Function....")
// }
// console.log(pFunc())



// const fn = async () => {
//     console.log("Beigneing")
//     const res = await fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'GET'
//     })
//     const data = await res.json()
//     console.log(data)
//     console.log("Ending......")
// }
// fn()