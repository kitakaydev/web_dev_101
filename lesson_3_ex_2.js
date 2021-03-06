//INIT

const _replaceMe_ = null;

// Remove _replaceMe_ and add your own code so that each variable is the type that its name indicates
const numberVar = 27;
const stringVar = "Code";
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;

// Remove _replaceMe_ and use math operators to assign the following variables. Use Math methods where ever possible. 
const pi = 3.1415926;

const piPlusOne = pi + 1;
const piMinusOne = pi - 1;
const piDividedByThree = pi / 3;
const piSquared = Math.pow( pi, 2 );
const piRoundedDown = Math.floor( pi );
const piRoundedUp = Math.ceil( pi );

// Logging out some stuff to check myself instead of relying on tests below this line:
// console.log(pi)
// console.log(piPlusOne)
// console.log(piMinusOne)
// console.log(piDividedByThree)
// console.log(piSquared)
// console.log(piRoundedDown)
console.log( piRoundedUp )



// Create an if-else statement that will randomly log "Marco" half of the time and "Polo" the other half.  
const random = Math.random();
const Marco = 5 > Math.random();
let Polo = 5 < Math.random();
console.log( Marco )
console.log( Polo )



if ( Marco )
{
    // if block
    console.log( "Run Marco" );
} else ( Polo ) 
{
    // else block
    console.log( "Run Polo" );
}

// Remove _replaceMe_ and assign the variables below using x and y. 
const x = 7.5;
const y = -15;
const isXLessThanY = x < y;
const xMinusY = x - y;
const yDividedByX = y / x;
const xAsAString = "x";
const YToThePowerOfX = Math.pow( y, x );
const yRoundedUp = Math.ceil( y );

//move the console log at the start of the code to greet Evelyn. Do not modify anything else. 
let mysteryVar = 'start value';
console.log( mysteryVar );

const name = 'Evelyn';
const greeting1 = 'Good morrow';
const greeting2 = 'Farewell';

if ( name.length < Math.random() * 10 ) 
{
    mysteryVar = greeting1 + ', ' + name;
} else 
{
    mysteryVar = greeting2 + ', ' + name;
}

mysteryVar = null;

// Stretch Task: 
// Research the following string methods: includes, indexOf, slice, toUpperCase, toLowerCase
// Using those methods on 'sampleText', correctly remove _replaceMe_ and assign the following variables.
// const sampleText = "Isn't documentation great!";
// const trueValue = sampleText.includes( 'great!' );
// const falseValue = _replaceMe_;
// const three = _replaceMe_;
// const nine = _replaceMe_;
// const cumen = _replaceMe_;
// const eat = _replaceMe_;
// const DOC = _replaceMe_;
// const is = _replaceMe_;
