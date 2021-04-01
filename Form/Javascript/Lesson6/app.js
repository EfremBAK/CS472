/*
console.log("Lesson6");
console.log(window.location);
//exam example
const n=[1,2,3,4,5];
const square= (arr=>arr.map(e=>e*e).reduce((acc,square)=>acc+square,10));
console.log(square(n));

const evenOnly=(arr)=> arr.filter(n=>n%2===0);

//find sum of squareEvens
const squareOfEvens= (arr.filter(n=>n%2===0).map(e=>e*e).reduce((acc,square)=>acc+square,10));
console.log(square(n));

const squareOfEvens2= (evenOnly(arr).map(e=>e*e).reduce((acc,square)=>acc+square,10));
console.log(square(n));
*/

let maxLength = 0;
let counter=0;
function findTheLongest(...more){

    for(let i = 0; i < more.length;i++){
          
        if( more[i].length > maxLength){
            maxLength=more[i].length;
            counter = more[i];
        }
      return counter;
}
let arraylongest=["abn","mnbm","lk","lkikeley"];
console.log(findTheLongest(arraylongest));