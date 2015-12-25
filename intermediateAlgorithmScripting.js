//SUM ALL NUMBERS IN A RANGE
//We'll pass you an array of two numbers. 
//Return the sum of those two numbers and all numbers between them.
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i<= Math.max(...arr); i++)
    sum += i;  
  return sum;
}

sumAll([5, 10]);


//DIFF TWO ARRAYS
//Compare two arrays and return a new array with 
//any items only found in one of the original arrays.
// first solution - runs about two times faster than second solution
function diff(arr1, arr2) {
  var newArr = [];
  // looping through arr1 to detect if element of arr1 exists in arr2
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      // pushing every unique to arr1 element to newArr
      newArr.push(arr1[i]);
    } 
  }
  // looping through arr2 to detect if element of arr2 exists in arr1
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      // pushing every unique to arr2 element to newArr      
      newArr.push(arr2[j]);
    } 
  }
  
  return newArr;
}

// second solution 
function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


//ROMAN NUMERAL CONVERTER
//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.
var convert = function(num) {

  // Create arrays with default conversion with matching indices
  var decimalNumArray = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumArray = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var resultRomanNumber = [];

  // Loop through the indices of the decimalNumArray array
  for (var index = 0; index < decimalNumArray.length; index++) {
    // Build the roman numeral while the decimal value from decimalNumArray is smaller or equal num
    while (decimalNumArray[index] <= num) {
      // Add the roman numeral to the romanNumber array
      resultRomanNumber.push(romanNumArray[index]);
      // Decrease num by the decimal equivalent
      num -= decimalNumArray[index];
    }
  }

// String concatenation is slower and causes major performance problems in older versions of IE. 
// Manipulating array is more efficient
// It is highly recommended to use .push then use join("") to return a string
  return resultRomanNumber.join("");
};

convert(36);





// WHERE ART THOU 
//Make a function that looks through an array of objects (first argument) 
//and returns an array of all objects that have matching property and value pairs (second argument). 
//Each property and value pair of the source object has to be present in the object from 
//the collection if it is to be included in the returned array.


function where(collection, source) {
  var arr = [];
  // get all the keys from source
  var sourceKeyArr = Object.keys(source);
  // in callback function iterate through sourceKeyArr to find key-value pair in collection 
  arr = collection.filter(function(obj){
    for (var i = 0; i < sourceKeyArr.length; i++){
      if (!obj.hasOwnProperty(sourceKeyArr[i]) || obj[sourceKeyArr[i]] != source[sourceKeyArr[i]] )
        return false;
      }
      return true;
    });

  return arr;
}

where([{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



// SEARCH AND REPLACE
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it. 
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


function myReplace(str, before, after) {
    // match the casing of source parameter to target and return target
    function matchCasing(source, target) {
        var targetArr = target.split("");
        var sourceArr = source.split("");
       
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
            // use regular expression to determine if sourseArr[i] is upper case
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            else targetArr[i] = targetArr[i].toLowerCase();
        } 
        return (targetArr.join(""));
    }
    
    // replace "before" with "after" with "before"-casing 
    return str.replace(before, matchCasing(before, after));
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


// PIG LATIN
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) 
// of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.

function translate(str) {
    var strArr = [];
    var tmpChar;
    
    // check if the char is consonant using regex
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }
    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else 
        strArr = str.split("");
        
    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
    
 return strArr.join("")+"ay";
}

translate("consonant");
