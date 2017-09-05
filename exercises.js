/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */

//manual input of array values -- long way 

var sumArrays = function(arr1, arr2){
  // var arr1 = [2,3,4];
  // var arr2 = [3,4,5];
  var num1 = 0;
  var num2 = 0;
  for(var i = 0; i< arr1.length; i++){
    num1 += arr1[i];
  }
  for(var j = 0 ; j < arr2.length ; j++){
    num2 += arr2[j];
  }
  return num1 + num2;
 };

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function stringCount(str) {
  var strToNum = 0;
  return str.length + strToNum;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
var str = [];
var arrayLength = function arrayLength(str){ 
  return str.length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */

var countAll = function countAll(arr) {
  // var arr = [1,2,3];
  var sumArr = 0;
  for(var i = 0; i < arr.length; i++){
    sumArr += arr[i];
  }
  return sumArr;
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */

var countStrings = function countStrings(arr){
  // var arr = ["a", "ab", "abc"]; 
  var rtnArr = [];
  for(var i = 0; i < arr.length; i++){
    rtnArr.push(arr[i].length);
  }
  return rtnArr;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function countAllStrings(arr) {
  return(countAll(countStrings(arr)));
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
 
var convertToArray = function convertToArray(obj) {
  // var rtn = Object.values(obj);
  var newArray = [];
  for(var key in obj){
    newArray.push(obj[key]);
  }
  return newArray;
};

/* #objectSize <---REVIEW!!!
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function objectSize(obj){
  var newArray = [];
  for (var i in obj){
    newArray.push(i);
  }
  return newArray.length;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function createZeroFilledArray(num){
  var newArray = [];
  for (var i=0; i < num; i++){
    newArray.push("0" * i);
  }
  return newArray;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function poppedArray(arr){
  arr.pop();
  return arr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function splitString(str){
  var splitStr = str.split('');
  return splitStr;
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function lengthOfLast(arr){
  var lastStr = arr.length - 1;
  return arr[lastStr].length ;
};

/* #sumBelowTen <---REVIEW
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function sumBelowTen(arr){
  var totalSum = 0;
  for (var i = 0; i < arr.length; i ++){
    if (arr[i].length < 10){
      totalSum = totalSum + arr[i];
    } 
  }
  return totalSum;
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function moreThanTenLetters(arr){
  var totalElem = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length > 10){
      totalElem = totalElem + arr[i];
    }
  }
  return totalElem;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function multiplyAll(arr){
  var product = 1;
  for(var i = 0; i < arr.length; i++){
    product = product * arr[i];
  }
  return product;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function getKeys(obj){
  var objKeys = [];
  for(var i in obj){
    objKeys.push(i);
  }
  return objKeys;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function sumAllPositive(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    if (arr[i] >= 0){
      sum = sum + arr[i];
    }
  }
  return sum;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function stringCountBelowThree(arr){
  var strAmt = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length <= 3){
      strAmt++; //if string length is 3 character's or less, increase string amount by an increment of one.
    }
  }
  return strAmt;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function countObjects(arr){
  return arr.length;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function getObjectKeys(obj){
  var newArr = [];
  for (var i in obj){
    arr.push(i);
  }
  return arr;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function getObjectValues(obj){
  var newArray = [];
  for(var i in obj){
    arr.push(obj[i]);
  }
  return newArray;
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function makeObject(key, value){
  var newObj = {};
  newObj[key] = value;
  return newObj;
};

/* #makeObjectReverse <--- why reverse???
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function makeObjectReverse(value, key){
  var newObj = {};
  newObj[key] = value;
  return newObj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function tupleToObject(arr){
  var newObj = {};
  newObj[arr[0]] = arr[1];
  return newObj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function tupleToObject(arr){
  var newObj = {};
  newObj[arr[1]] = arr[0];
  return newObj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function stringToKeys(arr){
  var newObj = {};
  for(var i = 0; i < arr.length; i++){
  newObj[arr[i]] = 0;
  }
  return newObj;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function getValues(obj){
  var newArr = [];
  for (var i in obj){
    newArr.push(obj[i]);
  }
  return newArr;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjKeys = function getObjKeys(obj){
  return Object.keys(obj);
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function objectToArray(obj){
  var tupleArr = [];
  for (var i = 0; i < obj.length; i++){
    var newArr = [];
    arr.push(i, obj[i]);
    tupleArr.push(arr);
  }
  return tupleArr;
};

/* #arrayToObject <<<REVIEW
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function arrayToObject(arr){
  var newObj = {};
  for(var i = 0; i < arr.length; i++){
    newObj(arr[i]) === false;
  }
  return newObj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function arraysToObject(arr1, arr2){
  var newObj = {};
  for (var i = 0; i < arr1.length; i++){
    newObj(arr1[i]) === arr2[i];
  }
  return newObj;
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function objectsToTuples(obj1, obj2){
  var newArr = [];
  for (var i = 0; i < obj1.length; i++){
    var obj1Arr = [];
     obj1Arr.push(i, obj1[i]);
    newArr.push(obj1Arr);
    }
  for (var j = 0; j < obj2.length; j++){
    var obj2Arr = [];
    obj2Arr.push(j, obj2[i]);
    newArr.push(obj2Arr);
  }
  return newArr;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: stringToKeys,
  getValues: getValues,
  getObjKeys: getObjKeys, //Initially titled ' getKeys' which was already used above. Renamed to 'getObjKeys' to circumvent crashing.
  objectToArray: objectToArray,
  arrayToObject: arrToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectToTuples,
  mapArrayValues: null,
  mapStringCounts: null,
  arrayToObjectNums: null,
  stringToKeys: null,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
};