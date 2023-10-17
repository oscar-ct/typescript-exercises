
// For param1 = 1 and param2 = 2, the output should be
// solution(param1, param2) = 3.
function add(param1: number, param2: number): number {
    return param1 + param2;
}
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
function centuryFromYear(year: number): number {
    return Math.ceil(year / 100);
}
// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.
function checkPalindrome(inputString: string): boolean {
    const inputString2: String = inputString.split('').reverse().join('');
    return inputString2 === inputString;
}
