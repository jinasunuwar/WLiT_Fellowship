//Datatype 1 : Number

let num1 = 12
let num2 = 12.34

console.log(num1 / num2)

console.log("String" / 0)

//Datatype 2 : String

str1 = "Jina"

console.log(str1);

let bool1 = false
let bool2 = 4 > 1
console.log(bool2)

let var1 = 1234
console.log(var1)

let obj = {
    name : "Jina",
    surname : "Sunuwar" 
}
console.log(typeof(obj))

//Datatype 3 : Variables ... it hoist initialization not the assignment of the var value

if(true)  {
    var color = "red"
}
console.log(color)

console.log(-true)

console.log("4" + 2 + 2)
console.log(2 + 2 + "4") 
//Mathematical conversion is done besides '+' opration

console.log("2" - 1)

//Conditional statement

a = 1
b = "1"
if (a == b) {
    "Value is equal"
}else{

}

(a == b) ? "Value is not equal": "It is not equal"

let sum = 9;
switch (sum) {
    case 5:
        console.log("Not valid")
        break;

    case 10:
        console.log("Exactly")
        break;
    default:
        console.log("I dont know the value")
}

//Functions

let myName = "Jina"
function showname(myName){
    return myName
}
console.log(showname(myName))

//Assignment 1
let num = 3
function posOrneg(num){
    return (num > 0) ? "Positive Number": "Negative Number" //conditional operation
    //if(num > 0)
     //   console.log("Positive number")
    //else
       // console.log("Negative number")
}
console.log(posOrneg(num))

//array function

let sumArray = (nums) => {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum
}
console.log(sumArray([1,2,3,4]))

//Assignment 2
let largeArray = (numbers) => {
    let largest = numbers[0];
    for (let i = 0; i< numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }   
    }
    return largest;
}
console.log(largeArray([10,30,15,7]))

//objects 

let obj2 = {
    FirstName : "Jina",
    Lastname : "Sunuwar",
    age : 22,
    showName: function (){
        return obj2.FirstName + obj2.Lastname
    } 
}
console.log(obj2.showName())

//Assignment 3
let areaObj = {
    radius : 3,
    height: 5,
    showArea: function(){
        return 3.14*areaObj.radius*areaObj.radius*areaObj.height
    }
}
console.log(areaObj.showArea())

//this

let interest1 = {
    color : "green",
    dress : "sweatshirt",
    showColor1: showColor
}
let interest2 = {
    color : "black",
    dress : "pant",
    showColor2: showColor
}
function showColor(){
    return this.color
}
console.log(interest2.showColor2())

//Assignment 4
let rectArea = {
    len: 4,
    breadth : 6,
    showArea1 : Area  
    }
function Area(){
    return this.len*this.breadth;
}
console.log(rectArea.showArea1())




