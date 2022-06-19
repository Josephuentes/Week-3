//2. declaring names array
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
var h = names.slice(k < 6)
console.log(h)

//average of letters per name
var total = 0
for(var k = 0; k < names.length; k++){
    total+=names[k].length;
}
var mean = total/names.length;
{
    console.log(mean)
}


//concatenated names
let result = '';

for (let k = 0; k < names.length; k++) {
    result = result.concat(names[k]);
    if (k < names.length - 1) {
        result = result.concat(" ");
    }
}
console.log(result.concat());

//declaring nameLengths
var nameLengths = names.map(function(element) {
  return element.length
});


//sum of nameLengths array
var sum = 0
for (var i = 0; i <nameLengths.length; i++){
  sum += nameLengths[i];
}
console.log(sum)



//How do you access the last element of an array?
//You can use either the pop or slice method to access last element
//How do you access the first element of any array?
//You can use either the shift or unshift method to access first element