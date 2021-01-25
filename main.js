// new task 1
// Create a function that should receive an array, and return an array in reverse order. Result should be stored in a variable

function reverseArray () {
    var dataOld = [34, true, "Peter", 1992];
    var dataNew = [];
    var i=0;
        while (i<dataOld.length) {
            dataNew[i]=dataOld[dataOld.length-1 -i ];
            i++;
}
        console.log(dataNew)
}
reverseArray();

// new task 2
// Create a function that should receive parameter of any type, and console log the type of received data
function printDataType(value) {

    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
        if (typeof value === "object" || typeof value === "function") 
    {
            for (x = 0, len = dtypes.length; x < len; x++);
    }
    
    return typeof value;
}
console.log(printDataType(36));
console.log(printDataType('CubesSchool'));
console.log(printDataType(true));

// new task 3
//Create a function that should receive an array of at least five names, and return the length of the longest name in the array (hint - you can get the length of an string the same way as for array). Result should be stored in a variable

function findLongestName(listOfNames,maxLength) {
    var listOfNames =["Mark", "Helen", "Loo","Daniele","Lukas" ];
    var maxLength=[];
    for (var i = 0; i < listOfNames.length; i++) {      
        if (listOfNames[i].length > maxLength) {
        maxLength = listOfNames[i].length;
    }
}   console.log(maxLength)
}
findLongestName()
// new task 4
// Create a function that should receive an array of numbers, find the second lowest and second greatest number, and console log result

var data=[55,56,53,52,48,65,80,90,85]
function getNumbers(numbers){
var min = numbers[0];
var max = numbers[0];
var secondmin = numbers[0];
var secondmax = numbers[0];

 for (var i = 0; i < numbers.length; i++) {
     if (numbers[i] > max) {
         secondmax = max;
         max = numbers[i];
    }
     if (numbers[i] < min ) {
         secondmin = min;
         min = numbers[i]
     }
     
} console.log(min,max,secondmax,secondmin)
} 
getNumbers(data)

// new task 5 
// Create two functions. First one should receive two parameters, an array of numbers, and a single number. 
//Then it should call the second function, and pass the same array and number into it. 
//The second function should, based on an array and number provided, find all numbers in an array which are bigger then a provided number, and create an array of those numbers. 
//Then it should console log result.

var dataArray=[24,14,54,36,12];
    var newDataArray=[];
    var singleNumber = 20;
function firstFunction(_array,_number) {
   

    return  function secondFunction() {
    
    for (let i = 0; i < dataArray.length; i++) {
        if (singleNumber < dataArray[i]) {
            newDataArray[i] = dataArray[i]
     };
        
    }
    console.log(newDataArray)
}
}

firstFunction([10,24,44,30,8],20)()


/* TASK 6:

Create three functions. 

First one should receive an array and return the lowest number in the array.
Second one should receive an array and return the highest number if an array.

Third function should receive first two functions, and should multiply the result of the first function with the result of the second function. Then it should console log the result.
 */
var numbers= [12,25,36,45,89];
var multiplyNumber = multiplyNumbers(numbers,highestNumberInArray, lowestNumberInArray);


function highestNumberInArray(arr) {
    
    var someArray=arr;
    var highestNumber = 0;
    for(i = 0; i <= highestNumber; i++) {
        if(someArray[i] > highestNumber) {         
           var highestNumber = someArray[i];
        } 
    }
    return highestNumber
}


function lowestNumberInArray(arr) {
    var someArray=arr;
    var lowestNumber = someArray[0];
    for(i=0; i < someArray.length; i++){
        if(lowestNumber > someArray[i]){
            var lowestNumber = someArray[i]
        }
    }
    return lowestNumber
}

function multiplyNumbers(arr,highestNumberInArrayFn,lowestNumberInArrayFn) {
    return highestNumberInArrayFn(arr) * lowestNumberInArrayFn(arr)
}
console.log(multiplyNumber);

// TASK 7
// Create a function that should receive an array and the second function.
// Array should be:
// [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]
// After array is received you should find all numbers from array which are unique, and create a new array out of them.
// Then, the second function that is passed in the first one should be called, and it should receive this new array we created. 
// It should then delete the biggest number in the array, and console log the result (array).


var numbers = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];
var uniqueNumbersInArray= removeDuplicates(numbers, findBiggestNumber);


function removeDuplicates(numbers){
      var unique=[...new Set(numbers)];
     return unique;
}

function findBiggestNumber(array) {
    var arrayMax = array[0];
    var newArray = [];
    for (var i = 0; i < unique.length; i++) {
        if (array[i] > arrayMax){
            arr = array[i];
            newArray=i;
        } 
    return newArray;
}
}
console.log(uniqueNumbersInArray)
