/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/

const removeNegatives = arr => {

    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) { newArr.push(arr[i] * -1); }
        else { newArr.push(arr[i]); }
    }
    return newArr;
}

console.log('returns [3,2,1,2,3,4]', removeNegatives([-3,-2,1,2,3,-4]));


/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/

const findVal = (arr, val) => {

    for (i = 0; i < arr.length; i++) {
        // let tempValue = arr[i];
        if (arr[i] === val) {
            return i;
        }
        
    }
    return -1; // runs through for loop and returns number if condition met, if not returns nothing
                // and return outside of for loop will run
   
}

console.log('returns 0', findVal([1,2,3,4], 1));
console.log('returns 3', findVal([1,2,3,4], 4));
console.log('returns -1', findVal([1,2,3,4]));


/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/

const removeOdds = (arr) => {
    const arr2 = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0 && typeof arr[i] === 'number') { // if even and a number push into new arr
            arr2.push(arr[i])}   // if not , then it will just continue to loop until condition is false
    
    }
    return arr2;
}

console.log('returns [2,4]', removeOdds([1,2,3,4]));
console.log('returns [4]', removeOdds([1,"2",3,4]));

/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/

const addSquares = arr => {

    const newArr = arr.slice(0);

    for (let i = 0; i < arr.length; i++ ) {
        newArr.push(arr[i] ** 2);
    }
    return newArr;

}

console.log('returns [1,2,3,4,1,4,9,16', addSquares([1,2,3,4]));

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

const doubleify = (arr) => {

    // const deepCopyArr = [...arr]

    const copyArr = [];
    for (i = 0; i < arr.length; i++) {
        copyArr.push(arr[i]);
        copyArr.push(arr[i]);
    }

    return copyArr;
}

console.log('returns [1,1,2,2,3,3,4,4]', doubleify([1,2,3,4]));


/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/

const findMax = array => {

    let max = 0; // declare max outside of loop

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > max) {   // if current array > max , then change max , if not keep looping until end
            max = array[i]; }

    }
    return max; // return max outside of loop

}

console.log('returns 99', findMax([1,2,3,99,4]));