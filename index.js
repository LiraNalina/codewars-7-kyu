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


The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"

function openOrSenior(data) {
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
);