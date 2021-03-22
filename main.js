console.log("Kimmie inlämning 1");

//Uppgift 1
let cars = ['volvo', 'saab', 'bmw', 'tesla'];

for (const car in cars) {
    console.log(cars[car]);
}

//Uppgift 2
let cars = ['volvo', 'saab', 'bmw', 'tesla'];

let fruits = ['apple', 'banana', 'orange'];

printArray(cars);
printArray(fruits);

//Funktion för att printa arrays
function printArray(array){
array.forEach(element => console.log(element));
};

//Uppgift 3
//Array med blommor fick nytt namn flowers ist för x
let flowers = ['rose', 'tulip', 'lily', 'orchid'];

printArray(flowers);

//Funktionen fick nytt namn printArray och även en forEach ist för for loop.
function printArray(array) {
   array.forEach(element => console.log(element)); 
}

