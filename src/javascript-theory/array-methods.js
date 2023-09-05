console.clear();

// MAP - an array method that takes a CALLBACK as a parameter, iterates through the whole array
// and APPLIES our callback to EACH ITEM and REPLACES THAT ITEM WITH THE RETURNED RESULT of our CALLBACK

const numbers = [100, 2, 3, 4, 5];

// const result = [];

// for (let i = 0; i < numbers.length; i++) {
//   result[i] = numbers[i] * 2;
// }

// console.log(result);

function mapCallback(item, index, array) {
  console.log(`Item is ${item}, index is ${index}, array is ${array}`);

  return item * 3;
}

const mapped = numbers.map(mapCallback);

console.log(mapped);

// OUR OWN MAP IMPLEMENTATION

// OUR CALLBACK WILL TAKE THE SAME PARAMETERS - CURRENT ITEM, CURRENT INDEX, OUR ARRAY
function ourOwnMap(arrayToOperateOn, ourCallbackFunction) {
  // array of results of calling our callback with each item
  const resultingArray = [];

  for (let i = 0; i < arrayToOperateOn.length; i++) {
    const currentItem = arrayToOperateOn[i];

    const result = ourCallbackFunction(currentItem, i, arrayToOperateOn);

    resultingArray[i] = result;
  }

  return resultingArray;
}

console.log(ourOwnMap(numbers, mapCallback));

// CALLBACK

// we accept a function as a parameter
function greetPerson(generatePersonName, timestampLogFunction) {
  timestampLogFunction();

  // we call it and store the result in the <generatedName> variable
  const generatedName = generatePersonName();

  // and we use the result of calling our callback(generatePersonName) in this function the way we want

  setTimeout(() => {
    timestampLogFunction();
  }, 100);

  return "Hello " + generatedName;
}

// this function is used as a callback in <greetPerson>
function generateName() {
  return "HAHA I FOOLED YOU, THERE IS NO NAME";
}

function logCurrentTimestamp() {
  console.log("CUrrent time is ", Date.now().toString());
}

// console.log(greetPerson(generateName, logCurrentTimestamp));
