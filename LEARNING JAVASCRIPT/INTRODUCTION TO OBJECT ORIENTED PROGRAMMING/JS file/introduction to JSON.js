 // creating a JSON object; it is same like js object but here the value and data both must be in apostrophy

 var mObj = {
     'name':'Prabesh',
     'address':'kathmandu',
     'contact':'9840072453',
     'age':'24',
     'marriage': true,
      "score": [2,4,5,6],
      "parents": {
          name: 'Ram'
      },
      "regards":null,
     'height':undefined, //it just ignores the undefined datatype in Json
     "getName":function(){
        return this.name
     }
 }

// using JSON methods JSON.stringify and JSON.parse
 console.log(mObj)
var strJson = JSON.stringify(mObj) // it converts the json into strings
console.log(strJson)
var JsonFormat = JSON.parse(strJson) //it converts the string into json obj
console.log(JsonFormat)




 // JSON IN ARRAY FORMAT

//  var mArr = [
//     {
//         'name':'Prabesh',
//         'address':'kathmandu',
//         'contact':'9840072453',
//         'age':'24'
//     },
//     {
//         'name':'Sweta',
//         'address':'kathmandu',
//         'contact':'9862133304',
//         'age':'24'
//     },
//     {
//         'name':'Prashant',
//         'address':'kathmandu',
//         'contact':'9810277415',
//         'age':'18'
//     },

//  ]


//  console.log(mArr[1])
//  console.log(mArr[1].name)
