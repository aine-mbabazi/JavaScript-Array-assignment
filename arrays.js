//Question 1, find the last element of the following arrays.
// arr1=[3,7,34,90,12]
let arr1 = [3,7,34,90,12];
let lastelement = arr1[arr1.length-1];
console.log({lastelement});

// arr2 = [true, "green", "where", 12, 56]
let arr2 = [true,"green", "where",12,56];
console.log(arr2.slice(-1));

// or

let last = arr2.pop()
console.log({last})

// Write a JS program that will join the following array elements into a string
let myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.toString());

// write a JS script to sort the following array items
let arr3 = [-5,9,5,3,2,-3,6,8,4,1]
arr3.sort((num1,num2)=> num1-num2);
console.log('ascending',arr3)

arr3.sort((num1,num2)=> num2-num1);
console.log('descending',arr3);

// Write a program to remove duplicates from the following array.
// Console the array that only sontains the duplicates.
//an array that contains only duplicates.
let arr = ["apple","mango","apple","orange","mango","mango"];
let originalFruits = [];
let duplicates = [];
arr.forEach(fruit =>{
    if (!originalFruits.includes(fruit)) {
        originalFruits.push(fruit);
    }
    else(duplicates.push(fruit));
});
console.log({originalFruits});
console.log({duplicates});

// Write a JS script to search for the following word "way" inthe array, If the word
// is present, console it else console "the search word was not found"
let arr5 = ["the","way","x",4]
const words = "way";
const wordIndex = arr5.indexOf(words);
if (words){console.log({words})}
else {console.log("the search was not found")}

// Question 5
// Write a JS script to sort the following string
let word = "sevink";
let newWord = function(word){
    return word.split('').sort().join('');

};
console.log(newWord(word))
// sorting using forEach

