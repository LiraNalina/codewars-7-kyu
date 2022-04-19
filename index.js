//Age in Days 
// Complete the function which returns your age
// in days. The birthday is given in the following
// order: year, month, day.

//For example if today is 30 November 2015 then

//ageInDays(2015, 11, 1) returns "You are 29 days old"


function ageDays(year, month, day) {
    let a = [year, month, day];
    let b = new Date();
    let d = new Date(a);
    let c = Math.round((b - d) / 1000 / 60 / 60 / 24);
  
    return "You are " + c + " days old";
  }
  
  console.log(ageDays([2022, 3, 1]));


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

function checkNames(arr){
  return arr.filter((logins) => logins[0].match(/_$/));
}

console.log(checkNames([[ "foo", "foo@foo.com" ], ["bar_", "bar@bar.com"]]));