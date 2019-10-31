'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: Designed to take any value and return that value unchanged.
 * 
 * @param {Value} value: Any type of value can be input.
 * 
 * @return {value}: Returns the same value as the input value, unchanged.
 * 
 * 
 */ 
 
 function indentity(value){
    return value;
}

module.exports.identity = indentity;

/**
 * typeOf: Designed to take any value and return the datatype of the value.
 * 
 * @param {Value} value: Any type of value can be input.
 * 
 * @return {String}: Returns the datatype of the value in string form.
 * 
 * 
 */
 function typeOf(value){
    if(Array.isArray(value) === true){
        return 'array';
    }else if (value === null){
        return 'null';
    }else{
        return typeof(value);
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to take an array and return the first elements of a given amount.
 * 
 * @param {Array} array: This is the array to iterate over. If no array is given,
 * the function will return an empty array.
 * @param {Number} number: This is the number of array elements to return from 
 * the beginning. If the number is negative, the function returns array literal.
 * If the number is undefined or not a number, the function will return the
 * first array element. If the number is greater than the array length,
 * the function returns the entire array.
 * 
 * @return {Array}: Returns the number of array elements from the 
 * beginning of the array, according to the input number argument. This could be
 * a single array element of any datatype, an empty array, or an array of elements.
 * 
 * 
 */
 function first(array, number){
    if(Array.isArray(array) === false || number < 0 ){
        return [];
    }else if (number !== number || number === undefined){
        return array[0];
    
    }else if(number > array.length){
        return array;
    }else {
        return array.slice(0, number);
    }
}
module.exports.first = first;

/**
 * last: Designed to take an array and return the last elements of a given amount.
 * 
 * @param {Array} array: This is the array to iterate over. If no array is given,
 * the function will return an empty array.
 * @param {Number} number: This is the number of array elements to return from 
 * its end. If the number is negative, the function returns array literal.
 * If the number is undefined or not a number, the function will return the
 * last array element. If the number is greater than the array length,
 * the function returns the entire array.
 * 
 * @return {Array}: Returns the number of array elements from the 
 * end of the array, according to the input number argument. This could be
 * a single array element of any datatype, an empty array, or an array of elements.
 * 
 */
 function last(array, number){
     if(Array.isArray(array) === false || number < 0 ){
        return [];
    }else if (number !== number || number === undefined){
        return array[array.length -1];
    
    }else if(number > array.length){
        return array;
    }else {
        return array.slice(number -1, array.length);
    }
}
module.exports.last = last;

/**
 * indexOf: Designed to take an array and return the index number of the
 * specified array element
 * 
 * @param {Array} array: This is the array to iterate over for the specified
 * array element's index number.
 * @param {Value} value: This is the array element of any datatype that the 
 * function finds the index number.
 * 
 * @return {Number}: Returns the index number of the input array element. If
 * the input value is not in the array, the function returns -1.
 * 
 * 
 */
 function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to take an array and return a Boolean value if a input
 * value is inside the array.
 * 
 * @param {Array} array: This is the array to iterate over to find if the
 * parameter value is inside it.
 * @param {Value} value: This is the value the program looks for inside the
 * given array.
 * 
 * @return {Boolean}: Returns a Boolean answer for whether the input value is an
 * element in the input array.
 * 
 * 
 */
 
 function contains(array, value){
    
        return (array.includes(value))? true : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} functionTest: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, functionTest) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            functionTest(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            functionTest(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to remove the duplicate array elements from a given array.
 * 
 * @param {Array} array: The array with duplicate elements.
 * 
 * @return {Array}: A new array without duplicate elements
 * 
 * 
 */
 function unique(array){
    //returns new array with duplicates removed
    //use _.indexOf 
    let answer = [];
    //check empty array for given array element
    //if its not there put it in
    for(let i = 0; i < array.length; i ++){
        if(answer.indexOf(array[i]) === -1){
            answer.push(array[i]);
        }
    }
    return answer;
}
module.exports.unique = unique;

/**
 * filter: Designed to filter values in an array based on a test. 
 * Takes array and passes each element through a test Function.
 * The test Function returns true if the value passes the test, false otherwise. 
 * Elements that pass the test are collected and returned in an output Array.
 * 
 * @param {Array} array: The array to filter.
 * @param {Function} test: The Function to be applied to each element of  
 * the array. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Array}: An Array containing the filtered collection values. 
 * The Array will contain only the values that passed the test.
 * 
 * 
 */ 
 
    function filter(array, test) {
        let answer = [];
    
    for(let i = 0; i < array.length; i++){
        if(test(array[i], i, array) == true){
            answer.push(array[i]);
        }
    }
    
    return answer;
    }
module.exports.filter = filter;

/**
 * reject: Takes array and passes each element through a test Function.
 * The test Function returns true if the value passes the test, false otherwise. 
 * Elements that fails the test are collected and returned in an output Array.
 * 
 * @param {Array} array: The array to put through the input test.
 * @param {Function} test: The Function to be applied to each element of  
 * the array. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Array}: An Array containing the elements that failed the input test.
 * 
 * 
 */
 function reject(array, test){
  //call function for each element in array
  // function passes arguments element, index, array
  // returns new array of elements where function returned false
  
  //opposite of filter, use filter in code
    return filter(array, function(ele, i, arr){
        return !test(ele, i, arr);
    });
    
}
module.exports.reject = reject;

/**
 * partition: Takes array and passes each element through a test Function.
 * The test Function returns true if the value passes the test, false otherwise. 
 * Elements that pass and fail the test are collected in separate arrays.
 * Those two arrays of passes and fails are the subarrays in a larger returned
 * array.
 * 
 * @param {Array} array: The array to put through the input test.
 * @param {Function} test: The Function to be applied to each element of  
 * the array. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Array}: An Array containing two separate arrays: a subarray of 
 * the elements that passed the input test and a subarray of the elements that
 * failed the input test.
 * 
 */
  function partition(array, test){
    //returns an array of arrays
    
    let answer1 = [];
    let answer2 = [];
    let answer3 = [];
    
     for(let i = 0; i < array.length; i++){
        if(test(array[i], i, array) == true){
            answer1.push(array[i]);
        }else{
            answer2.push(array[i]);
        }
    }
    answer3.push(answer1);
    answer3.push(answer2);
    return answer3;
}
module.exports.partition = partition;

/**
 * map: Takes array or object and passes its values through an input function.
 * The results are collected and returned in an array
 * 
 * @param {Array or Object} collection: The array or object which each value 
 * to put through the input test.
 * @param {Function} test: The Function to be applied to each value of  
 * the collection. 
 * 
 * @return {Array}: An Array containing results of the input function on the 
 * collection's values.
 * 
 */
 
 function map(collection, test){
    //calls function on array or objects
    
    let container = [];
    
    if(Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            container.push(test(collection[i], i, collection));
        }
    }else{
        for(let key in collection){
            container.push(test(collection[key], key, collection));
        }
   }
   return container;
}
module.exports.map = map;

/**
 * pluck: Takes array of objects returns a new array the values of the input
 * property from each array element object. 
 * 
 * @param {Array} array: The array with objects to retrieve values.
 * @param {Value} property: The property in the array's objects to take values.
 * 
 * @return {Array}: An Array containing the values of the input property.
 * 
 */

function pluck(array, property){
    //return an array with the values of the given key or property
  let answer = [];
    map(array, function(element){
        answer.push(element[property]);
    });
    return answer;
}
module.exports.pluck = pluck;

/**
 * every: Takes array or object returns if every element or value passes through 
 * the input function with the result of true. 
 * 
 * @param {Array or Object} collection: The array or object to pass through function.
 * @param {Function} test: The function which every array element or object value
 * must pass through with a true result.
 * 
 * @return {Boolean}: Returns true or false if every element or value is true
 * when passed through the input function.
 * 
 */
 function every(collection, test){
     let count = 0;
    console.log(collection);
    console.log(test);
    
    if(test === undefined && Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            if(!collection[i]){
                count += 1;
            }
        }
    }else if (test === undefined && Array.isArray(collection) === false){
        for(let key in collection){
            if(!collection[key]){
                count += 1;
            }
        }
    }else if(Array.isArray(collection) === true && test !== undefined){
        for(let i = 0; i < collection.length; i++){
            if(test(collection[i], i, collection) === false){
                count += 1;
            }
        }
    }else if (Array.isArray(collection) === false && test !== undefined){
        for(let key in collection){
            if(test(collection[key], key, collection) === false){
                count += 1;
            }
        }
    }

if(count === 0){
    return true;
}else{
    return false;
}
    
}
module.exports.every = every;

/**
 * some: Takes array or object returns a boolean if one element or value of all 
 * the total elements or value passes through the input function with the result
 * of true or not. 
 * 
 * @param {Array or Object} collection: The array with objects to retrieve values.
 * @param {Function} test: The function which at least one array element 
 * or object value must pass through with a true result.
 * 
 * @return {Boolean}: Returns true or false if at least one element or value 
 * is true when passed through the input function. If none are true, then the
 * result is false.
 * 
 */
 function some(collection, test) {
  //determine if the collection is an array or object
  //call the test function on every element in the collection
  //if the return value of calling the function on every element is true, for at least one element, return true
  //otherwise return false
  //if the function is not provided return true, if at least one element is truthy, otherwise return false
  let count = 0; 
   if(test === undefined && Array.isArray(collection) === true){
       for(let i = 0; i < collection.length; i++){
           if(collection[i]){
               count += 1;
           }
       }
   }else if (test === undefined && Array.isArray(collection) === false){
       for(let key in collection){
           if(collection[key]){
               count += 1;
           }
       }
   }else if(Array.isArray(collection)){
      for(let i = 0; i < collection.length; i++){
         if(test(collection[i], i, collection) === true) {
             count++;
         } 
      }
  }else {
      for (let key in collection){
        if(test(collection[key], key, collection) === true) {
            count++;
        }  
      }
  }if (count > 0) {
      return true;
  } else {
      return false;
  }
}
module.exports.some = some;

/**
 * reduce: Takes array, calls a function on every element in the array. The
 * function acts as a reducer leading to a single result.
 * 
 * @param {Array} array: The array with objects to retrieve values.
 * @param {Function} action: The function which all elements are passed through
 * to reduce the given array to a single output.
 * @param {Value} seed: The initial value to use on the callback function. This 
 * is optional. If no intial value is provided, it is set as the first element
 * in the array and the index starts at 1 instead of 0.
 * 
 * @return {Value}: Returns a single value reduced from an array of values.
 * 
 * 
 */
 function reduce(array, action, seed){
     /* var previousResult = seed;
     //if seed not given
     if(seed === undefined){
         previousResult = array[0];
         seed = array[0];
         for(let i = 1; i < array.length; i++){
             previousResult = action(previousResult, array[i], i, array);
         }
         return previousResult;
     }else{
         _.each(array, function(ele, i, arr){
             previousResult = action(previousResult, ele, i, arr)
         });
         return previousResult;
     }
     */
     
     
     
   let seedDefined = 0;
   if (seed === undefined){
       seed = array[0];
       seedDefined = 1;
   }
   for (let i = seedDefined; i < array.length; i++){
       seed = action(seed, array[i], i);
   }   return seed;
}
module.exports.reduce = reduce;

/**
 * extend: Takes more than one object and adds the properties of the objects to
 * the first object argument.
 * 
 * @param {Object} object1: The first object as a container object for the new
 * properties taken from the subsequent objects.
 * @param {Object} object2: This object's key/value pairs will be added to the
 * first.
 * @param {Array} ...object: The amount of objects following the first two is 
 * unknown, which called for a rest parameter. This turns them into an array of
 * objects
 * 
 * @return {Object}: Returns the first object argument updated with new keys and
 * values from the subsequent arguments.
 * 
 * 
 */
 
 function extend(object1, object2, ...object) {
    for(let key in object2){
        object1[key] = object2[key];
    } for(let i = 0; i < object.length; i++) {
        for(let key in object[i]) {
            object1[key[i]] = object[i][key];
        }
    }
    return object1;
}
module.exports.extend = extend;