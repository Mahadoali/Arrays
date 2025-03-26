//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let numbers =  [3,7,34,90,12]

let num = numbers[numbers.length -1];
console.log({num})
 
let array1 = [true,"green", "where", 12, 56]

let array2 = array1[array1.length-1];
console.log({array2})

//Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"];

const myPets = ["cow", "Bird", "Snake", "Dog"];
const pestString = myPets.join(",");
console.log({pestString})

//Write a JS script to sort the following array items. var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((a,b) => a-b);
console.log({arr3})

//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found".
let arr5 = ["the", "way", "x", 4];
let searchWord = "food";
if (arr5.includes(searchWord)){
    console.log(searchWord);
}
else{
    console.log("thesearchWord was not found.");
} 
//Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"
let sortedWord = word.split("");
sortedWord.sort()
let result = sortedWord.join("");
console.log(result);

//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'];
fruits.splice(5,0, 'Tomato');
console.log(fruits);

//Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates


let arr = ["boy", "man", "girl", "school", "girl", "woman"];


function removeDuplicates(arr) {
    let uniqueArr = []; 
    let duplicatesArr = [];
    let seen = new Set(); 

    for (let item of arr) {
        if (seen.has(item)) {
            
            if (!duplicatesArr.includes(item)) {
                duplicatesArr.push(item); 
            }
        } else {
            
            uniqueArr.push(item);
            seen.add(item);
        }
    }

    console.log("Array without duplicates:", uniqueArr);
    console.log("Array with duplicates:", duplicatesArr);
}
