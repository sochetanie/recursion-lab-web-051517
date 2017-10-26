// Code your solution here!
function printString(myString) {
  console.log(myString[0])
  if (myString.length > 1) {
    let substring = myString.substring(1, myString.length)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(myString) {
  if (myString.length > 1) {
    return reverseString(myString.substring(1)) + myString[0]
  } else {
    return myString
  }
}

function isPalindrome(str) {
  if (str.length > 1) {
    if (str[0] === str[str.length-1]) {
      let subString = str.substring(1, str.length-1)
      isPalindrome(subString)
    } else {
      return false
    }
    return true
  }
}

function addUpTo(arr, n) {
  if (n > 0) {
    return addUpTo(arr, n-1) + arr[n]
  } else {
   return arr[n]
  }
}

function maxOf(arr) {
  if (arr.length > 1) {
    return Math.max(arr.pop(), maxOf(arr))
  } else {
    return arr[0]
  }
}

function includesNumber(arr, num) {
  if (arr.length > 1) {
    return arr[0] === num ? true : includesNumber(arr.slice(1), num)
  } else {
    return arr[0] === num
  }
}