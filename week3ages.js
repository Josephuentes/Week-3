//1. added 5 to the end and the console log printed to -2
var ages = [3, 9 , 23, 64, 2, 8, 28, 93]

var x = ages.slice(0, 1);
var y = ages.slice(-1);

console.log( x - y )

var sum = 0;

// A for Loop to print the average of the ages Array
for (var number of ages) {
    sum += number;
}
average = sum / ages.length;
console.log(average);
