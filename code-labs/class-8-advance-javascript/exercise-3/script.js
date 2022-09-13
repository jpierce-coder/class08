function checkQual([vEasyNum, vEasyNum2, easyNum, easyNum2, mediumNum, mediumNum2, hardNum, hardNum2]) {
  const totalTime = 120;
  const veryEasyQual = 5;
  const easyQual = 10;
  const mediumQual = 15;
  const hardQual = 20;


  if ((vEasyNum + vEasyNum2 + easyNum + easyNum2 + mediumNum + mediumNum2 + hardNum + hardNum2) <= totalTime) {
    console.log('This candidate qualifies!');
  } else if ((vEasyNum + vEasyNum2 + easyNum + easyNum2 + mediumNum + mediumNum2 + hardNum + hardNum2) > totalTime) {
    console.log('I am sorry, you did not qualify!')
  } else {
    console.log('Please enter valid times.')
  }
}


// checkQual([4, 4, 8, 8, 12, 12, 19, 19]);

checkQual([12, 12, 12, 12, 18, 18, 20, 20])