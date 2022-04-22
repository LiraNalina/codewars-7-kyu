//Age in Days 
// Complete the function which returns your age
// in days. The birthday is given in the following
// order: year, month, day.

//For example if today is 30 November 2015 then

//ageInDays(2015, 11, 1) returns "You are 29 days old"


/* function ageDays(year, month, day) {
    let a = [year, month, day];
    let b = new Date();
    let d = new Date(a);
    let c = Math.round((b - d) / 1000 / 60 / 60 / 24);
  
    return "You are " + c + " days old";
  }
  
  console.log(ageDays([2022, 3, 1])); */


  /* Javascript filter - 1
  While developing a website, you detect that some of the members have troubles logging in. 
  Searching through the code you find that all logins ending with a "_" make problems.
  So you want to write a function that takes an array of pairs of login-names and e-mails,
  and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".
If you have the input-array:
[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
it should output
[ [ "bar_", "bar@bar.com" ] ]
You have to use the filter-method which returns each element of the array for which the filter-method returns true.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

/* function checkNames(arr){
  return arr.filter((logins) => logins[0].match(/_$/));
}

console.log(checkNames([[ "foo", "foo@foo.com" ], ["bar_", "bar@bar.com"]])); */


/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"
 */
/* function openOrSenior(data) {
  let members = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7 && data[i][1] <= 26) {
      members.push("Senior");
    } else if ( data[i][0] < 55 && data[i][1] > -2 || data[i][1] <= 7) {
      members.push("Open");
    }
  }
  return members;
}

console.log(
  openOrSenior([
    [27,21],[20,3],[21,20],[15,-2],[17,21],[54,-1],[19,22],[79,-2]
  ])
); */


/* Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
For example:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return [] */


/* function solution(nums) {
  let result = [];

  if (nums === null) return [];

  result = nums.sort((a, b) => a - b);

  return result;
}
// console.log(solution([null]));
console.log(solution([20, 2, 10])); */


/* Most Digits
Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.
 */

/* function unusedDig(array) {
  let a = [];

  for (let i = 0; i < array.length; i++) {
    a.push(array[i].toString());
    a.sort((a, b) => b.length - a.length);
  }
  return parseInt(a[0], 10);
}
console.log(unusedDig([1, 10, 100])); */


/* Sum of All Arguments
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15 */

/* function sumArgs(...args) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log(sumArgs(1, 2, 4, 5)); */


/* Sum up the random string
Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

Note:
    Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
    All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
    If no number was given in the string, it should return 0
Example:
str = "In 2015, I want to know how much does iPhone 6+ cost?"
The numbers are 2015, 6
Sum is 2021. */

/* function sumNum(str) {
  return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0);
}
console.log(sumNum("In 2015, I want to know how much does iPhone 6+ cost?"));
 */
/* function sumFromString(str) {

  var arr = str.split(/\D/g);
  var res = 0;
  
  for(var i = 0; i < arr.length; i++){
    res += +arr[i];
  }
  
  return res;
}

console.log(sumNum("In 2015, I want to know how much does iPhone 6+ cost?")); */


/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3] */



/* function arrayDiff(a, b) {
  return a.filter((elem) => !b.includes(elem));
}
console.log(arrayDiff([1, 2, 3], [1, 2])); */


// Thinkful - List Drills: Longest word
/* Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7

Do not modify the input list. */

function longest(words) {
  return words.sort((a, b) => b.length - a.length)[0].length;
}
console.log(longest(["explicit", "is", "better", "than", "implicit"]));
