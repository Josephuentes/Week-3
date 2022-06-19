//
function repeatString (n , w) {
    if (n == 1)
    return w;
    else
    return w.concat(repeatString (n - 1, w))
}
var a = repeatString (3 , 'Hello')
console.log(a)

//
function fullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log( 'Joseph', 'Fuentes')

//Function that takes array of number and returns true if sum of array > 100
var f = [5, 10, 15, 20, 25, 30]
var sum = 0

let whole = f.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    
});
console.log(whole)

    if ( whole > 100){
        console.log('True')
    }

//function that returns array average
const count =[1, 3, 5];
const average = count.reduce ((r, t) => r + t, 0) / count.length

function getAverage(_length,_accumulator){
    return _accumulator +_length;
}

//function that compares the averages of two arrays

function compareAverage (arrayone, arraytwo) {
    if (arrayone > arraytwo){
        console.log('True')
    }
}
       
    
//drink function
function willBuyDrink( _isHotoutside, _moneyInPocket) {
    if (_isHotoutside = true)
    if (_moneyInPocket > 10.50)
    console.log('Buy Drink')
}

// coin flip function for making my decisions in life
function coinFlip() {
    x = (math.floor(math.random() * 2)== 0);
    if (x = 1){
        console.log(Heads)
    } else {
        console.log(Tails)
    }
}
