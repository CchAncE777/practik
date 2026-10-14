//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ

/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray(start, end) {
    let arr = []

    for (i = start; i < end + 1; i++) {
        arr.push(i)
    }
    return arr
}

function getIntervalArray_2(start, end) {
    return Array.from({length: end - start + 1 }, (_, i) => start + i);
}

console.log(getIntervalArray(1, 5))
console.log(getIntervalArray(-2, 2))
console.log(getIntervalArray(0, 100))
console.log(getIntervalArray(3, 3))

/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function sumArrays(arr1, arr2) {
    let arr = []
    let number = 0
    for (i = 0; i < arr1.length || i < arr2.length; i++) {
        if (arr1[i] != undefined && arr2[i] != undefined) {
            let number = arr1[i] + arr2[i]
            arr.push(number)
            number = 0
        }
        if (arr1[i] != undefined && arr2[i] == undefined) {
            let number = arr1[i]
            arr.push(number)
            number = 0
        }
        if (arr1[i] == undefined && arr2[i] != undefined) {
            let number = arr2[i]
            arr.push(number)
            number = 0
        }
    }
    return arr
}

function sumArrays_2(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length);
    
    return Array.from({ length: maxLength }, (_, i) => {
        return (arr1[i] || 0) + (arr2[i] || 0);
    });
}

console.log(sumArrays([1, 2, 3], [4, 5, 6]))
console.log(sumArrays([10, 20, 30], [5, 10, 15]))
console.log(sumArrays([-1, 0, 1], [1, 2, 3, 4]))

/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement(arr, value) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}

function findElement_2(arr, value) {
    return arr.indexOf(value)
}

console.log(findElement(['Ace', 10, true], 10))
console.log(findElement(['Array', 'Number', 'string'], 'Date'))
console.log(findElement([0, 1, 2, 3, 4, 5], 5))

/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences(arr, item) {
    let number = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            number += 1
        }
    }
    return number
}

function findAllOccurrences_2(arr, item) {
    return arr.filter(current => current === item).length
}

console.log(findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1))
console.log(findAllOccurrences([ 1, 2, 3, 4, 5 ], 0))
console.log(findAllOccurrences([ 'a','b','c','c' ], 'c'))
console.log(findAllOccurrences([ null, undefined, null ], null))
console.log(findAllOccurrences([ true, 0, 1, 'true' ], true))

/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
function removeFalsyValues(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

function removeFalsyValues_2(arr) {
    return arr.filter(Boolean)
}

console.log(removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]))
console.log(removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]))
console.log(removeFalsyValues([ false, 0, NaN, '', undefined ]))

/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} arr - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
    let arrNumbers = []

    for (i = 0; i < arr.length; i++) {
        arrNumbers.push(arr[i].length)
    }
    return arrNumbers
}

function getStringsLength_2(arr) {
    return arr.map(str => str.length);
}

console.log(getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]))
console.log(getStringsLength([ 'angular', 'react', 'ember' ]))


/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {number[]} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
function getAverage(arr) {
    let sum = 0

    for(i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    
    let our_sum = (sum / arr.length).toFixed(2)
    return our_sum
}

function getAverage_2(arr){
    if (arr.length === 0) {
        return 0
    }
    return (arr.reduce((acc, number) => acc + number, 0) / arr.length).toFixed(2);
}

console.log(getAverage([]))
console.log(getAverage([ 1, 2, 3 ]))
console.log(getAverage([ -1, 1, -1, 1 ]))
console.log(getAverage([ 1, 10, 100, 1000 ]))
console.log(getAverage([ 2, 3, 3 ]))

/**
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i].length != arr[i + 1].length) {
            return false
        }
    }
    return true
}

function isSameLength_2(arr) {
    return arr.every(str => str.length === arr[0].length)
}

console.log(isSameLength(['orange', 'banana', 'cherry']))
console.log(isSameLength(['cat', 'dog', 'elephant']))

/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] == i) {
            return true
        }
    }
    return false
}

function isValueEqualsIndex_2(arr) {
    return arr.some((num, i) => num === i)
}

console.log(isValueEqualsIndex(([0, 1, 2, 3, 4])))
console.log(isValueEqualsIndex(([2, 1, 0, 4, 5])))
console.log(isValueEqualsIndex(([10, 20, 30, 40, 50])))

/**
 * Inserts the item into specified array at specified index
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]}
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */

function insertItem(arr, item, index) {
    let result = []

    for (i = 0; i < arr.length; i++) {
        if (i === index) {
            result.push(item)
        }
        result.push(arr[i])
    }
    return result
}

function insertItem_2(arr, item, index) {
    return arr.toSpliced(index, 0, item)
}

console.log(insertItem([ 1, 3, 4, 5 ], 2, 1))
console.log(insertItem([ 1, 'b', 'c'], 'x', 0))

/**
 * Returns the n first items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getHead(arr, n) {
    let result = []
    for (i = 0; i < n; i++) {
        result.push(arr[i])
    }
    return result  
}

function getHead(arr, n) {
    return arr.splice(0, n)
}

console.log(getHead([ 1, 3, 4, 5 ], 2))
console.log(getHead([ 'a', 'b', 'c', 'd'], 3))
console.log(getHead([ 'a', 'b', 'c', 'd'], 0))

/**
 * Returns the n last items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail(arr, n) {
    let result = []
    for (i = arr.length - n; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result  
}

function getTail(arr, n) {
    return arr.splice(arr.length - n, arr.length)
}

console.log(getTail([ 1, 3, 4, 5 ], 2))
console.log(getTail([ 'a', 'b', 'c', 'd'], 3))
console.log(getTail([ 'a', 'b', 'c', 'd'], 0))


/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray(arr) {
    let result = []

    for (i = 0; i < arr.length * 2; i++) {
        result.push(arr[i % arr.length])
    }
    return result
}

function doubleArray_2(arr) {
    return arr.concat(arr)
}

console.log(doubleArray(['Ace', 10, true]))
console.log(doubleArray([0, 1, 2, 3, 4, 5]))
console.log(doubleArray([]))

/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList(arr) {
    let result = ''

    for (i = 0; i < arr.length; i++)
        if (i < arr.length - 1) {
            result += arr[i] + ','
        } else {
            result += arr[i]
        }
        

    return result
}

function toStringList_2(arr) {
    return arr.join(',')
}

console.log(toStringList([0, false, 'cat', NaN, true, '']))
console.log(toStringList([1, 2, 3, 4, 5]))
console.log(toStringList(['rock', 'paper', 'scissors']))

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct(arr) {
    let result = []

    for (i = 0; i < arr.length; i++) {
        let isDublicate = false
        for (j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDublicate = true
                break
            } 
        }
        if (!isDublicate) {
            result.push(arr[i])
        }
    }
    return result
}

function distinct(arr) {
    return [...new Set(arr)]
}

console.log(distinct([ 1, 2, 3, 3, 2, 1 ]))
console.log(distinct([ 'a', 'a', 'a', 'a' ]))
console.log(distinct([ 1, 1, 2, 2, 3, 3, 4, 4]))
console.log(distinct([]))

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */

function createNDimensionalArray(n, size) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        let array = [];
        for (let i = 0; i < size; i++) {
            array.push(0);
        }
        return array;
    }
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(createNDimensionalArray(n - 1, size));
    }
    return result;
}

function createNDimensionalArray_2(n, size) {
    if (n === 0){
        return 0
    }
        return Array.from({ length: size }, () => createNDimensionalArray(n - 1, size))
}

console.log(createNDimensionalArray(2, 3))
console.log(createNDimensionalArray(3, 2))
console.log(createNDimensionalArray(4, 2))
console.log(createNDimensionalArray(1, 1))

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray(nestedArray) {
    let result = []

    for (let i = 0; i < nestedArray.length; i++) {
        if (!Array.isArray(nestedArray[i])) {
            result.push(nestedArray[i])
        } else {
            result = result.concat(flattenArray(nestedArray[i]))
        }
    }
    return result
}

function flattenArray_2(nestedArray) {
    return nestedArray.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]))
console.log(flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']))
console.log(flattenArray([1, 2, 3, 4]))

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let children = childrenSelector(arr[i])

        for (let j = 0; j < children.length; j++) {
            result.push(children[j])
        }
    }
    return result;
}

function selectMany_2(arr, childrenSelector) {
    return arr.flatMap(childrenSelector)
}

console.log(selectMany([[1, 2], [3, 4], [5, 6]], (x) => x))
console.log(selectMany(['one','two','three'], (x) => x.split('')))
/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance(arr) {
    let sum = 0
    let resultOne = []

    if (arr.length === 0) {
        return 0
    }

    for (i = 0; i < arr.length; i++) {
        resultOne = arr[i]
        for (j = 0; j < resultOne.length; j++) {
            if (j === 0) {
                sum += resultOne[j]
            } else {
                sum -= resultOne[j]
            }
        }
    }
    return sum
}

function calculateBalance(arr) {
        return arr.reduce((balance, subArr) => {
        return balance + (subArr[0] - subArr[1]);
    }, 0);
}

console.log(calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]))
console.log(calculateBalance([ [ 10, 8 ], [ 1, 5 ] ]))
console.log(calculateBalance([]))

/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
* @return {any[]} - An array of chunks.
 
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks(arr, chunkSize) {
    let result = []
    for (i = 0; i < arr.length; i += chunkSize) {
        let chunk = arr.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result
}

function createChunks_2(arr, chunkSize) {
    return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) => {
        return arr.slice(i * chunkSize, i * chunkSize + chunkSize)
    })
}

console.log(createChunks([1, 2, 3, 4, 5, 6, 7], 3))
console.log(createChunks(['a', 'b', 'c', 'd', 'e'], 2))
console.log(createChunks([10, 20, 30, 40, 50], 1))

/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
    let result = []
    for (i = 0; i < len; i++) {
        result.push(i * 2 + 1)
    }

    return result
}

function generateOdds_2(len) {
    return Array.from({ length: len }, (_, i) => 2 * i + 1)
}

console.log(generateOdds(0))
console.log(generateOdds(1))
console.log(generateOdds(2))
console.log(generateOdds(5))

/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} arr - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */

function getElementByIndices(arr, indices) {
    let currentLevel = arr;

    for (let i = 0; i < indices.length; i++) {
        let currentIndex = indices[i];
        currentLevel = currentLevel[currentIndex];
    }

    return currentLevel;
}

function getElementByIndices_2(arr, indices) {
    return indices.reduce((currentLevel, index) => currentLevel[index], arr)
}

console.log(getElementByIndices([[1, 2], [3, 4], [5, 6]], [0, 0]))
console.log(getElementByIndices(['one', 'two', 'three'], [2]))
console.log(getElementByIndices([[[1, 2, 3]]], [0, 0, 1]))

/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount(arr) {
    let number = 0
    for (i = 0; i < arr.length; i++) {
        if (!arr[i]) {
        number += 1
        }
    }
    return number
}

function getFalsyValuesCount_2(arr) {
    return arr.filter(item => !item).length
}

console.log(getFalsyValuesCount([]))
console.log(getFalsyValuesCount([ 1, '', 3 ]))
console.log(getFalsyValuesCount([ -1, 'false', null, 0 ]))
console.log(getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]))

/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
    let matrix = []

    for (i = 0; i < n; i++) {
        let row = []
        for (j = 0; j < n; j++) {
            if (i === j) {
                row.push(1)
            } else {
                row.push(0)
            }
        }
        matrix.push(row)
    }
    return matrix
}

function getIdentityMatrix_2(n) {
    return Array.from({ length: n }, (_, i) => {
        return Array.from({ length: n }, (_, j) => {
            return i === j ? 1 : 0
        })
    })
}

console.log(getIdentityMatrix(1))
console.log(getIdentityMatrix(2))
console.log(getIdentityMatrix(5))

/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} numbers - The array of numbers.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers(numbers) {
    let result = []

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            result.push(i)
        } 
    }
    return result
}

function getIndicesOfOddNumbers_2(numbers) {
    return numbers
        .map((num, i) => (Math.abs(num) % 2 === 1 ? i : null))
        .filter(index => index !== null);
}

console.log(getIndicesOfOddNumbers([1, 2, 3, 4, 5]))
console.log(getIndicesOfOddNumbers([2, 4, 6, 8, 10]))
console.log(getIndicesOfOddNumbers([11, 22, 33, 44, 55]))
/*
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {number[]} arr - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */

function getHexRGBValues(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let hex = arr[i].toString(16).toUpperCase()
        let formattedHex = hex.padStart(6, '0')
        result.push('#' + formattedHex)
    }
    return result
}

function getHexRGBValues_2(arr) {
    return arr.map(num => '#' + num.toString(16).toUpperCase().padStart(6, '0'))
}

console.log(getHexRGBValues([0, 255, 16777215]))
console.log(getHexRGBValues([]))

/**
 * Returns the n largest values from the specified array
 *
 * @param {number[]} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems(arr, n) {
    if (arr.length === 0) {
        return []
    }
    let result = []

    for (i = 0; i < n; i++) {
        let maxI = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] > arr[maxI]) {
                maxI = j;
            }
        }
        let removedElement = arr.splice(maxI, 1)
        result.push(removedElement[0])
    }
    return result;
}


function getMaxItems_2(arr, n) {
    return [...arr].sort((a, b) => b - a).slice(0, n)
}

console.log(getMaxItems([], 5))
console.log(getMaxItems([ 1, 2 ], 1))
console.log(getMaxItems([ 2, 3, 1 ], 2))
console.log(getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3))
console.log(getMaxItems([ 10, 10, 10, 10 ], 3))

/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements(arr1, arr2) {
    let result = []
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i])
            }
        }
    }
    return result
}

function findCommonElements_2(arr1, arr2) {
    let common = arr1.filter(item => arr2.includes(item))
    return [...new Set(common)]
}

console.log(findCommonElements([1, 2, 3], [2, 3, 4]))
console.log(findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']))
console.log(findCommonElements([1, 2, 3], ['a', 'b', 'c']))

/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence(nums) {
    if (nums.length === 0) {
        return 0
    }

    let maxLength = 1
    let currentLength = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentLength += 1;
        } else {
            currentLength = 1;
        }
        if (currentLength > maxLength) {
            maxLength = currentLength
        }
    }
    return maxLength
}

function findLongestIncreasingSubsequence_2(nums) {
    if (nums.length === 0) {
        return 0
    }
    let chunks = nums.map((x, i) => (i > 0 && x <= nums[i - 1] ? '|' : '') + x)
    let sequences = chunks.join(' ').split('|')
    let lengths = sequences.map(str => str.trim().split(' ').length)
    return Math.max(...lengths)
}

console.log(findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]))
console.log(findLongestIncreasingSubsequence([3, 10, 2, 1, 20]))
console.log(findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]))
/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} arr - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex(arr) {
    let result = []
    for (i = 0; i < arr.length; i++) {
            for (let j = 0; j <= i; j++) {
            result.push(arr[i])
        }
    }
    return result
}

function propagateItemsByPositionIndex_2(arr) {
    return arr.flatMap((item, i) => Array(i + 1).fill(item))
}

console.log(propagateItemsByPositionIndex([]))
console.log(propagateItemsByPositionIndex([1]))
console.log(propagateItemsByPositionIndex(['a', 'b']))
console.log(propagateItemsByPositionIndex(['a', 'b', 'c', null]))
console.log(propagateItemsByPositionIndex([1, 2, 3, 4, 5]))

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(arr, n) {
    for (let i = 0; i < (n % arr.length + arr.length) % arr.length; i++) {
        let lastElement = arr.pop()
        arr.unshift(lastElement)
    }
    return arr;
}

function shiftArray_2(arr, n) {
    return arr.slice(-((n % arr.length + arr.length) % arr.length)).concat(arr.slice(0, arr.length - (n % arr.length + arr.length) % arr.length))
}

console.log(shiftArray([1, 2, 3, 4, 5], 2))
console.log(shiftArray(['a', 'b', 'c', 'd'], -1))
console.log(shiftArray([10, 20, 30, 40, 50], -3))

/**
 * Sorts digit names.
 *
 * @param {string[]} arr - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
    let numbers = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
    }
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (numbers[arr[j]] > numbers[arr[j + 1]]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function sortDigitNamesByNumericOrder_2(arr) {
    let numbers = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
    }

    return [...arr].sort((a, b) => numbers[a] - numbers[b])
}

console.log(sortDigitNamesByNumericOrder([]))
console.log(sortDigitNamesByNumericOrder(['nine','one']))
console.log(sortDigitNamesByNumericOrder(['one','two','three']))
console.log(sortDigitNamesByNumericOrder(['nine','eight','nine','eight']))
console.log(sortDigitNamesByNumericOrder(['one','one','one','zero' ]))

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail(arr) {
    let len = arr.length;
    let half = Math.floor(len / 2);
    let tailOffset = len - half;
    for (i = 0; i < half; i++) {
        let tailIndex = i + tailOffset;
        let temp = arr[i]
        arr[i] = arr[tailIndex]
        arr[tailIndex] = temp
    }
    return arr
}

function swapHeadAndTail(arr) {
    if (arr.length < 2) {
    return [...arr]
    }

    let half = Math.floor(arr.length / 2)
    let head = arr.slice(0, half)
    let tail = arr.slice(arr.length - half)
    let middle = arr.length % 2 !== 0 ? [arr[half]] : []

    return tail.concat(middle, head)
}

console.log(swapHeadAndTail([1, 2]))
console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(swapHeadAndTail([1]))
console.log(swapHeadAndTail([]))
