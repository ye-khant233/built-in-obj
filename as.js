// fun statement

// function run(){
//     return " This is run"
// }

// function expression

// const run = function (){
//     return "This is run"
// }

//arrow function

// const run  = () => "This is run"

// const run = x => "This is run" +   x

// console.log(run("Hello"));

// const run = (x,y) => x * y ;

// console.log(run(9,9));

// const run= (x,y) => {
//     console.log(x);
//     console.log(y);
//     return x *y
// }

// console.log(run(9,99));

// const obj = {
//     a : "aaa",
//     b : "bbb",
//     c : "ccc",

//     x : function (){
//         console.log(this);
//         return this.a
//     },
//     y : () => {
//         console.log(this);
//         return this.b
//     },
//     z(){
//         console.log(this);
//         return this.a
//     }
// }

// console.log(obj.z());

//Rest parameter

// const run = (x,y, ...para) => {
//     console.log(para);

// }

// console.log(run(1,2,3,4,"ss"));

//Hof (Higher order function)

// function run(x, y) {
//   return x() * y();
// }
// Call back function

// console.log(run(
//     function (){
//         return 4;
//     },
//     function (){
//         return 10;
//     }
// ));

// console.log(
//   run(
//     () => 10,
//     () => 10
//   )
// );




// const numbers = [1,2,3,4]

//element + 4 
//5,6,7,8

//element * 2
// 2,4,6,8

//element  % 2 ? "odd" : "even"
//odd,even,odd,even


// const modifiedArray =  (arr,formula) => {
//     const result = [];
//     for(el of arr){
//         result.push (formula(el));
//     }
//     return result;
// };
// console.log(numbers);
// console.log(modifiedArray(numbers,function(x){
//     console.log(x);
//     return x = 4;
// }));