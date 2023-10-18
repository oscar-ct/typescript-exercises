
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.
//
// 7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray: number[]): number {
    let productNumbers: number[] = [];
    for (let i = 1; i < inputArray.length; i++) {
        productNumbers.push(inputArray[i] * inputArray[i-1]);
    }
    return Math.max(...productNumbers);
}
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//
//     A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
function shapeArea(n: number): number {
    return n*n + (n-1)*(n-1);
}

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
//
//     Example
//
// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.
//
// Ratiorg needs statues of sizes 4, 5 and 7.
function makeArrayConsecutive2(statues: number[]): number {
    const sortedStatues: number[] = statues.sort(function(a, b){return a-b});
    const low: number = sortedStatues[0];
    const high: number = sortedStatues[sortedStatues.length - 1];
    return ((high - low + 1) - (sortedStatues.length));
}

