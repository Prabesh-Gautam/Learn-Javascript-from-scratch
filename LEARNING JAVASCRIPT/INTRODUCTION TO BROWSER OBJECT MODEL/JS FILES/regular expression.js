var myString = "He was born in the year 1996 and his age is 24 years old. This YEAR he will turn 25 on march."
var myString1 = "Air Birm Circle"
var myString3 = "9840072453"


// there are two ways to define the regular expression in javascript
// 1. syntax: /{pattern}/{flags}
// 2. syntax: new RegExp("pattrn","flags") //inbuild regExp class

// some of the regular expression classes methods are listed below(.
// 1.search syntaxt: str.search(pattern) = it returns the string position of the first match.
// 2.pattern.test(str) = if returns a boolen value if the string matchs/doesn't match the patten
// 3.str.match(pattern) = it returns the matched string.

var pattern0 = /year/
var pattern =/year/g // does't stops after finding the first match, search other possible mathe
var pattern1 = /year/gi; // i indicated the insensitive meaning it is not a case sensitive.

console.log(myString.search(pattern0));
console.log(myString.match(pattern1));
console.log(pattern.test(myString));

// using the RegExp class to define the pattern
var pattern2 = new RegExp("[ABC]ir","gi"); //using sets 
var pattern3 = new RegExp("[0-9]",'g') //using ranges.
var pattern4 = new RegExp("[A-Z]","g")

console.log(myString1.match(pattern2))
console.log(myString.match(pattern3))
console.log(myString.match(pattern4))

//using character class in regExp there are various character class some of them are listed below

var pattern5 = /\s/g //using \s character class which gives all the space in the string.
var pattern6 = /\S/g  // using \S character class which gives all the character except the space.
var pattern7 = /\d/g //using \d character class which gives all the numeric values
var pattern8 = /./g //using . metacharacter which matches all the character in the string.

console.log(myString.match(pattern5))
console.log(myString.match(pattern6))
console.log(myString.match(pattern7))
console.log(myString.match(pattern8))


// using quantifier in the regular expression.

var pattern9 = /[\d]{5}/g 
var pattern10 = /[\d]{3}/g //selecting the number with the length of 3
var pattern11 = /[\d]{1,4}/
var pattern12 = /[\d]{1,}/ //selecting number more than 1 we can use "+" instead of this quantifier
console.log(myString3.match(pattern9))
console.log(myString3.match(pattern10))
console.log(myString3.match(pattern11))
console.log(myString3.match(pattern12))


// identifiying either the string contains the hex code or not
var hex = "#123456"
var pattern13 = /^#[\w]{6}$/g // ^ means the starting string must be likewise and $ meand the string must end likewise.
console.log(pattern13.test(hex))
console.log(hex.match(pattern13))

//identifying phone number

var phone = "9779876787698"
var phone1 = "9840072453"
var phone2 = "35984005967"
// var pattern14 = /^98[\d]{8}$/g
var pattern15 = /^(977)?(98)[\d]{8}$/g // ? is the optional sign and  () makes the group and it counts as a one element 

// console.log(phone.match(pattern14))
console.log(phone.match(pattern15))
console.log(phone1.match(pattern15))
console.log(phone2.match(pattern15))

// testing whether the given string is a valid url or not.

var url1 = "www.google.com"
var url2 = "www.facebook.com"
var url3 = "www.flixplay.net"

pattern16 = /^www\.[\w]+\.(com|net|io)$/i // | means the optional string
console.log(url1.match(pattern16))
console.log(pattern16.test(url2))
console.log(url3.match(pattern16))


