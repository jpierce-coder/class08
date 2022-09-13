function multFunctions(baseNum) {
  return function newArg(altNum) {
    let sumOfNum = baseNum + altNum;
    return sumOfNum;
  }
}

// console.log(multFunctions(22)(12));

// console.log(multFunctions(354)(-234));

// console.log(multFunctions(99)(1));