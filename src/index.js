module.exports = function toReadable (number) {
 const int = {
     0 : 'zero',
     1 : 'one',
     2 : 'two',
     3 : 'three',
     4 : 'four',
     5 : 'five',
     6 : 'six',
     7 : 'seven',
     8 : 'eight',
     9 : 'nine',
 }
 const teen = {
    0 : 'ten',
    1 : 'eleven',
    2 : 'twelve',
    3 : 'thirteen',
    4 : 'fourteen',
    5 : 'fifteen',
    6 : 'sixteen',
    7 : 'seventeen',
    8 : 'eighteen',
    9 : 'nineteen',
}
const ty = {
    2 : 'twenty',
    3 : 'thirty',
    4 : 'forty',
    5 : 'fifty',
    6 : 'sixty',
    7 : 'seventy',
    8 : 'eighty',
    9 : 'ninety',
}
let x = String(number)
if (x.length == 1){return int[number]}
if (x.length == 2&&number<20){return teen[x[1]]}
if (x.length == 2&&x[1] == 0){return `${ty[x[0]]}`}
if (x.length == 2){return `${ty[x[0]]} ${int[x[1]]}`}
let h = `${int[x[0]]} hundred`
if ( x[1] == 0 && x[2] == 0 ){return h}
if ( x[1] == 0){return `${h} ${int[x[2]]}`}
if ( x.slice(-2) < 20 ) {return `${h} ${teen[x[2]]}`}
if ( x[2] == 0){return `${h} ${ty[x[1]]}`}
return `${h} ${ty[x[1]]} ${int[x[2]]}`
}
