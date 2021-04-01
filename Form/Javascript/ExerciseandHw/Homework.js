'use strict'


var printHello = function(name) {
	console.log("Hello " + name);
    printHello("John");
}


//#1 Max of 2 Numbers 
// #1 let maximum;
/*
function max( x ,y){
    if(x > y)
        maximum= x;
    else if(y>x)
            maximum= y;
            else 
            console.log(`${x} and ${y} are equal`);
        
    return maximum;
}
console.log(max(41,40));

//using ternary
function max2(x,y){
    return (x > y)? x : y;
}
 */
// # 2 max three numbers
 /*
function max( x , y ,z){
    let maximum = x;
    if(x  > maximum)
        maximum= x;
     if(y > maximum)
       maximum= y;

       return maximum;
}
console.log(max(48,2,22));
//using ternary
function max( x , y ,z){
    return (x>y)?((x >z) ? x:z):((y > z) ?y));

// 3 Is it a Vowel
 /*  let allVowels =["a","e","i","o","u"];
function isVowel(letter){
    if(!letter.length==1){
        return false;
      let isItVowel= false;
      for(let i=0; i < allVowels.length;i++){
          if(allVowels[i]==letter) 
              isItVowel = true;
          else  
          isVowel=false;    
    }
    return isItVowel;
   }
 }
    // isVowel('b');
    console.log( isVowel('i'))
    
   
//let totalSum=0;
//let nums=new Array[6];
// 4 Sum of all numbers
  function sumImperative(){
    let totalSum=0;
     for(let i=0;i<arguments.length;i++){
         totalSum += arguments[i];
     }
     return totalSum;
 }
 const mySum=sumImperative(2,5,6,7,2,3);
 console.log(mySum);
 

//#4B Multiple of all numbers
function multipleOfNumbers(){
    if(arguments.length==)
     let total = 1;
    for(let i=0;i < arguments.length;i++){
       total *= arguments[i];
    }
    return total;
    }
    const multiple= multipleOfNumbers(1,2,3,4,5);
    console.log(multiple);
 
//5 reverse string 
let tobeReversed= [];

function reverseIt(words){
    for( let j= words.length-1; j >= 0 ;j--){
        
        tobeReversed += words.charAt(j) ;
       // tobeReversed.push(words.charAt(i));
    }
    return tobeReversed.join("");

}
const myWord= reverseIt("Hello");
console.log(myWord);

//6 find longest array

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
*/
//Q7 filter long words
/*
function filterlongWordsImp(words, l){
    const longwords=[]
    for (const word of words) {
        if (word.length > l) {
            longwords.push(word);
          
            
        }
    }
    return longwords;
}
console.log(filterlongWordsImp([uy])

//Q9 printOddNumbers only
//Q11  Sum of all numbers using functional prog approch

  function sumImperative(){
    let totalSum=0;
     for(let i=0;i<arguments.length;i++){
         totalSum += arguments[i];
     }
     return totalSum;
 }
 const mySum=sumImperative(2,5,6,7,2,3);
 console.log(mySum);

  function sumImperative(){
    let totalSum=0;
     for(let i=0;i<arguments.length;i++){
         totalSum += arguments[i];
     }
     return totalSum;
 }
 const mySum=sumImperative(2,5,6,7,2,3);
 console.log(mySum);

}
*/
/*
}
//Exam sample
//filter => Num%num=0

function multipleCount(nums,b){
    return nums.filter(i =>i % b == 0);
}

const m=multipleCount([6,2,3,4,7,11,9,12], 3);
console.log(m);
//Exam sample
function Car(){
    Car.make="default";
    Car.model="default";
    Car.color="default";
};

Car.prototype.drive=function(speed){
    console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph.`);
}
Car.prototype.stop=function(){
    console.log(`The ${this.color} ${this.make}${this.model} id stopping.`);
}
const RedHondaAccord=new Car();
RedHondaAccord.color="Red";
RedHondaAccord.make="Honda";
RedHondaAccord.model="Accord";
console.log(RedHondaAccord.drive(0));
*/
/*
function calcAve(...more){
    let total=0;
    for(let i=0;i< more.length;i++){
        total+=more[i];
    }
        return total/more.length
    
}
console.log(calcAve(2,3,4,5,6));
console.log("----------");
*/
/*
function calcultetheAverage(...more){
   let total=0;

   for (let index = 0; index < more.length; index++) 
           total+= more[index];     
   return total/more.length;
    }

    const ave = calcultetheAverage(5,6,7,8,9);
    console.log(ave);
    */
/*

}
function calculateAverage(...more){
    let total=0;
    for(let i=0;i<more.length;i++)
        total+=more[i];
    return total/more.length;
}

console.log(calculateAverage(1,2,3));
console.log(calculateAverage(1,2,3,4));
console.log(calculateAverage(1,2,3,4,5,16.6));




const person = {
    name: "",
    dob: new Date(),
    age: 0,
    getName: function(){
        return this.name;
    },
    setName : function(newName){
        this.name = newName;
    }
}

const John = Object.create(person);
John.name = "John";
John.dob = new Date(1998/11/9);
John.age = 21;

console.log(John.getName() + " born on " + John.dob + " is " + John.age + " years");

*/
