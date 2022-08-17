function reverseString(str) {
  //str = str.split('');

  let array = []
  for(let i = 0; i < str.length; i++){
    array.unshift(str[i])
  }
  return array.join('');
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
