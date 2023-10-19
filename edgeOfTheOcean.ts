
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
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
//
//     Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
//
//     Example
//
// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.
//
//     There is no one element in this array that can be removed in order to get a strictly increasing sequence.
//
//     For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.
//
//     You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
function almostIncreasingSequence(sequence: number[]): boolean {
    let count: number = 0;
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i+1]) {
            count++;
        }
        if (i - 1 >= 0 && i + 2 <= sequence.length - 1 && sequence[i] - sequence[i+2] >= 0 && sequence[i-1] - sequence[i+1] >= 0) {
            return false;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
}
// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
//
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
//
// Example
//
// For
//
// matrix = [[0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]]
// the output should be
// solution(matrix) = 9.
// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.
//
// For
//
// matrix = [[1, 1, 1, 0],
//     [0, 5, 0, 1],
//     [2, 1, 3, 10]]
// the output should be
// solution(matrix) = 9.
// Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

function matrixElementsSum(matrix: number[][]): number {
    let total: number = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let matrixLoop: number = matrix[j][i];
            if (matrixLoop === 0) {
                break;
            } else {
                total += matrixLoop;
            }
        }
    }
    return total;
}
