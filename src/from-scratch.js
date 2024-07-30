// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, total = 0, idx = 0) => {
  if (idx === arr.length) return total; 
  return sum(arr, total + arr[idx], idx + 1);
}

// const sum = (arr) => {
//   if (arr.length === 0) return 0;
//   return arr[0] + sum(arr.slice(1)); 
// }

// const sum = (arr, total = 0) => {
//   if (arr.length === 0) return total;
//   return sum(arr, total + arr.pop()); 
// }

// Reverse string using recursive approach
const reverse = (str) => {
  if (str.length <= 1) return str; 
  return str.charAt(str.length - 1) + reverse(str.slice(0, -1)); // return last character + reverse of rest of string
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  if (n === 0) return 0; 
  if (n === 1) return 1; 

  let prevPrevNum = 0; // f(0)
  let prevNum = 1; // f(1)
  let currNum = 1 // f(2)

  for (let i = 2; i <= n; i++) {
    currNum = prevPrevNum + prevNum; // calculate f(i)
    prevPrevNum = prevNum; // move to next pair 
    prevNum = currNum;
  }
  return currNum; 
};

// Recursive fibonacci
const fibRec = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1; 
  return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) return -1; // if the start index exceeds the end index, the target is not in the array

  let mid = Math.floor((start + end) / 2);

  // check if the target is at the mid index
  if (arr[mid] === target) {
    return mid;
  }
  
  if (target < arr[mid]) { // if the target is less than the mid element, search in the left half
    return binarySearch(arr, target, start, mid - 1);
  }

  // if the target is greater than the mid element, search in the right half
  return binarySearch(arr, target, mid + 1, end);
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
