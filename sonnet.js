// Take the contents of the sonnet div and place it in a variable.
var sonnet1 = document.getElementById("sonnet").innerHTML;
console.log(sonnet1);

// Find and output the starting position of the word "orphans".
var searchOrphan = sonnet1.indexOf("orphans");
console.log(searchOrphan);

// Output the number of characters in the sonnet.
var sonnetLength = sonnet1.length;
console.log(sonnetLength);

// Replace the first occurance of the string "winter" with "yuletide".
sonnet1 = sonnet1.replace("winter", "yuletide");
console.log(sonnet1);

// Replace all occurances of the string "the" with "a large".
var sonnet1 = sonnet1.replace(/the /gi, 'a large ');
console.log(sonnet1);

// Set the content of the sonnet div with the new string. 
document.getElementById("sonnet").innerHTML = sonnet1;
