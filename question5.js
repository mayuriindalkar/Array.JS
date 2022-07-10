// let fruits = ['Apple', 'Banana']; 
// console.log(fruits.length);      

// let fruits = ['Apple', 'Banana', 'Orange']
// console.log(fruits[2]);

// var array = [ 1, 2, 3, 4, 5, 6 ];
// for (var index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }

// let fruits = ['Apple', 'Banana','strawbary']
// fruits.push('Orange')
// console.log(fruits)

// var fruits = ['Apple', 'Banana', 'orange']
// fruits.shift()
// console.log(fruits)

// let fruits = ['Apple', 'Banana', 'Orange']
// let position = fruits.indexOf('Banana')
// console.log(position);

// let fruits = ['Apple', 'Banana', 'Orange']
// let removedItem = fruits.splice(2)
// console.log(removedItem)


// let fruits = ['Apple', 'Banana', 'Orange']
// let removedItem = fruits.join("/")
// console.log(removedItem)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1); 
// console.log(citrus)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3); 
// console.log(citrus)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3); 
// console.log(citrus)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort(); 
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse(); 
// console.log(fruits)

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b}); 
// console.log(points)

// const point = [40, 100, 1, 5, 25, 10];
// point.sort(function(a, b){return b-a}); 
// console.log(point)

const a=require("readline-sync")
var b=a.question("enter number : ")
console.log("even"*(b%2==0),"odd"*(b%2!=0));

// splice