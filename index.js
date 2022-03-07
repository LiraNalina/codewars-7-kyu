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