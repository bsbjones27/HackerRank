'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    
    // length of input matrix.
    const array_length = arr.length;
    var left_sum = 0
    var right_sum = 0;
  
    // Traversing the array and summing diagonal
    for(var i = 0; i < array_length; i++){
      // sum of the primary diagonal
        left_sum += arr[i][i];
      // Reversing the second dimension of array for secondary sum
        right_sum += arr[array_length -1 - i][i]
    }
    // return absolute difference value.
    return Math.abs(left_sum - right_sum);  

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
