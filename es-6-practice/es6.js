// // es-6 practice
// // let is a block scope variable

// {
//     let a=10;
//     console.log(a);
// }
// console.log(a);
// {
//     let a=30;
//     console.log(a);
// }

// // Arrow functions

// const arrow=()=>{
//     let b=50;
//     console.log("arrow functions",b);
// }
// arrow();

// // for-loop

// for(i=0; i<10; i++){
//     console.log(i);
// }

// call back
// function ab() {
//     console.log("first functions");
    
// }


// function second(dd) {
//     console.log("second");
//     dd()
    
// }

// function third(gna) {
//     console.log("third");
//     gna(ab)
    
// }
// third(second)

// // call back hell

// function hell() {
//     console.log("first ");
//     function secons() {
//         console.log("second fuctions");
//         function third() {
//             console.log("third functions");
            
//         }
//         third()
//     }
//     secons()
// }
// hell()

// // promises
// const promis=new Promise((res,rej)=>{

//     let c=20;

//     if(c==20){
//         res()
//     }
//     else{
//         rej()
//     }

// });

// promis
// .then(()=>console.log("sucess"))
// .catch(()=>console.log("error"))

// // promise all

// const promises=new Promise((res,rej)=>{

//     setTimeout(()=>{
//         res("sucess1")
//     },1000)
// })
// const promises2=new Promise((res,rej)=>{

//     setTimeout(()=>{
//         res("victory")
//     },2000)
// })
// const promises3=new Promise((res,rej)=>{

//     setTimeout(()=>{
//         rej("booyah")
//     },3000)
// })
// Promise.all([promises,promises2,promises3])
// .then((data)=>data)
// .catch((data)=>console.log(data))

// // async and awaid

// const asy=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("async & await")
//     },2000)
// })

// async function pro() {
//     console.log("123");
//     const datum=asy;
//     console.log("await",datum);
//     console.log("321");

// }
// pro();

// // Template literal
// let e="sudhakar"
// let e1="sudha"

// console.log(e,""+`${e1}`);


// // Default parameters

// function defaultparam(a,b=15) {
//     tax=a*(b/100)
//     console.log("default params ",tax);
    
// }
// defaultparam(10);

// //  Spreat operator

// let Spreat=[1,2,3,4,5]

// let [...c]=Spreat;
// console.log("spreat",c);

// // rest operator

// function rest(...expresion) {
//     console.log("rest",expresion.reduce((a,b)=>a+b));
    
// }
// rest(1,2,3,4,5,6,7)

// 