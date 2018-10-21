/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

const average = arr => {
    // const myArray = arr.length;
    const newArray = arr.slice(0);
    let sum = 0;
    for (i = 0; i < newArray.length; i++) // beginning of index is always zero 
    // iterating through index of array
{
    sum += newArray[i];
}
return sum / newArray.length;

}

console.log(average([1,2,3,4]));
console.log(average([2,4,6,8,10,20]));
console.log(average([20,10]));


/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/

const squareEach = arr => {

    // const newArray = [...arr];
    const lastArray = [];
    for (i = 0; i < arr.length; i++) {
        lastArray.push(arr[i] ** 2);
    }
    return lastArray;

}

console.log('result: [1,4,9,16]', squareEach([1,2,3,4]));


/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/

const averageSquare = arr => {

    const arr2 = [];
    // square each element
    for (i = 0; i < arr.length; i++) {
        arr2.push(arr[i] ** 2);
        console.log(arr2);
    }
    // find sum of squared elements
    let sum = 0;
    for (i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    console.log(arr);
    console.log(arr2);
    // find avg of squared elements
    return sum / arr2.length;

}

console.log('returns 7.5: ', averageSquare([1,2,3,4]));



/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

const negateArr = arr => {
    // const newArray = arr.slice(0);
    const newArray = [];
    for (i = 0; i < arr.length; i++) {
        newArray.push(arr[i] * -1);
    }
    return newArray;

}

console.log('returns [-1,-2,-3,-4]', negateArr([1,2,3,4]));

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

const reverseArr = arr => {

    const newArray = [];
    for (i = arr.length-1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

console.log('returns [4,3,2,1]', reverseArr([1,2,3,4]));


/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

const negateBackwards2 = arr => {

    return reverseArr(negateArr(arr));
}
console.log('returns [-4,-3,-2,-1]', negateBackwards2([1,2,3,4]));

const negateBackwards = arr => {

    const newArray = [];
    for (i = arr.length-1; i >= 0; i--) {
        newArray.push(arr[i] * -1);
    }
    return newArray;
}

console.log('returns [-4,-3,-2,-1]', negateBackwards([1,2,3,4]));

const averageSquare2 = arr => {

    return average(squareEach(arr));
}

console.log(averageSquare2([1,2,3,4]));