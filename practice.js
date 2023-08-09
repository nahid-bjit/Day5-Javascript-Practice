console.log("Hello World")

// ## Javascript Object ## 

const carObject = {
    name: "maruti",
    model: "001",
}

console.log("The object is:",carObject)

//## Javascript Object ## 

const planeObject = {
    name: "biman",
    color: "red"
}

console.log(planeObject)

// ## Array of Objects ## 

const arrayOfCars = [
    {
        name: "papiya",
        sit: 42,
    }, 

    {
        name: "ekota",
        sit: 40
    }
]

console.log("Chandina buses: ", arrayOfCars)

// ## Javascript Function ## 

function sumFunction (a, b) {
    return a + b;

    // console.log("The value of x is: ", x)
    // console.log("The value of y is: ", y)
    
    // console.log("summation is: ", sum)
}

// sumFunction(5, 6)

function subFunction (a, b) {
    return a - b;

    // console.log("The value of x is: ", x)
    // console.log("The value of y is: ", y)

    // console.log("Subtraction is: ", sum)
}

// subFunction(6, 5)

// function jogaKhichuri (x, y) {
//     var sumResult = sumFunction(x,y)
//     var subResult = subFunction(x,y)
//     return sumResult + subResult
// }

// var num1 = 20;
// var num2 = 10;

// var khichuri = jogaKhichuri(num1, num2)
// console.log("Khichuri is: ", khichuri)

// ## Solution from shifu ##

function sum(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function addSumAndSub(x, y) {
    var sumResult = sum(x, y);
    var subResult = sub(x, y);
    
    return sumResult + subResult;
  }
  
  var num1 = 10;
  var num2 = 5;
  
  var result = addSumAndSub(num1, num2);
  console.log("Result:", result);
  

// ## function in the function ##

function greet(name) {
    console.log("Hello, " + name + "!");
}

function sayGreeting() {
    console.log("Lets greet someone, ");
    greet("Nahid");
}

sayGreeting();

// ## Code from shifu ##
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  function sayGreeting() {
    console.log("Let's greet someone:");
    greet("Alice"); // Calling the greet function inside sayGreeting.
  }
  
  sayGreeting(); // Calling the sayGreeting function.

// ## Traditional Method ## 
function sumFunction (x, y)
{
    const sum = x + y;
    return sum;
};

console.log ("The summation is: ", sumFunction(5,6))

// ## Arrow Function ## 

const sumFunction2 = (x,y) => {
    const sum = x + y;
    return sum;
};

console.log("This summation of arrow fucntion is: ", sumFunction2(5,6))


  