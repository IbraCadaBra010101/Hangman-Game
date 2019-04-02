// // private variable in JS
// // is modifiable by the interface
// // we provide
//
// // const createCounter = () => {
// //     let count = 0;
// //
// //     return {
// //         increment() {
// //             count++;
// //         },
// //         decrement() {
// //             count--;
// //         }, get() {
// //             return count;
// //         }
// //     }
// // };
// //
// // const counter = createCounter();
// //
// // counter.decrement();
// // counter.decrement();
// // console.log(counter.get());
//
//
// // adder pattern using closure
// // also using currying
// // currying:  multiple functions
// // that each take a subset of arguments.
// const createAdder = (a) => {
//
//     return (b) => {
//         return a + b;
//     }
// };
// // the base value
// const addFive = createAdder(5);
//
// // the second value
// console.log(addFive(5));
// console.log(addFive(50));
//
// // base value with 1000
// const addAthousand = createAdder(1000);
// console.log(addAthousand(-500));
//


// Tipper

//
// const createTipper = (baseTip)=>{
//         return (billAmount)=>{
// return  `The final bill for your dinner is ${billAmount } dollars. The tip is ${billAmount * baseTip} dollars` ;
//         }
// };
//
// const generous = createTipper(.2);
// const reallyCheap = createTipper(0.04);
// console.log(reallyCheap(28));
// console.log(generous(28));













// const getCountry = (countryCode, callback) => {
//     const countryRequest = new XMLHttpRequest();
//
//     countryRequest.addEventListener('readystatechange', function () {
//         if (this.readyState === 4 && this.status === 200) {
//             const data = JSON.parse(this.responseText);
//             const finalInfo = data.find((country) => country.alpha2Code === countryCode);
//             callback(undefined, finalInfo);
//
//         } else if (this.readyState === 4) {
//
//         }
//     });
//     countryRequest.open('GET',
//         'http://restcountries.eu/rest/v2/all', true);
//     countryRequest.send();
// };

